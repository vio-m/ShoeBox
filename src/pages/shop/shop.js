import './shop.css';
import yellow from '../../media/yellow.jpg';
import loved from '../../media/loved.jpg';
import { useState, useEffect, useContext } from 'react'
import UserInfo from "../../components/userInfo";
import AuthContext from "../../context/AuthContext";
import { DataContext } from "../../context/dataContext";
import { Slider } from '../../components/slider';
import { Categories } from '../../components/categories';
import { Brands } from '../../components/brands';
import { Footer } from '../../components/footer';
import { About } from '../../components/about';
import { CouponAd } from '../../components/couponad';
import Overlay from '../../components/overlay';


export const Shop = () => {
    const data = useContext(DataContext);
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [brands, setBrands] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayId, setOverlayId] = useState()
    const ADVERT = ['Put your best foot forward. Buy now!',
                    'Make a statement with fashion-forward footwear.',
                    'Step into fashion with our trendy shoes.',
                    'Shoe-lovers unite! Shop our latest collection.',
                    'Put some sass in your step with our shoes.']
    const [randomAdvert, setRandomAdvert] = useState("Get 10% off with your coupons...");

    const changeAd = () => {
        const randomIndex = Math.floor(Math.random() * ADVERT.length);
        setRandomAdvert(ADVERT[randomIndex]);
    };

    const toggleOverlay = (newState) => {
        setShowOverlay(!showOverlay);
    };

    function handleChildId(id) {
        setOverlayId(id)
    };

    useEffect(() => {
        if (data.loading==false) {
            setProducts(data.products)
            setCategories(data.categories)
            setBrands(data.brands)
        }
        changeAd()
    }, [data]);

    return (
        
        <div className='shop-container'>
            <div className='shop-content'>

                { user && <UserInfo user={user} /> }

                { products && <>
                    <Slider products={products} onStateUpdate={toggleOverlay} onSendId={handleChildId}/>
                    <CouponAd image={yellow} text={randomAdvert} />
                    <Categories categories={categories}/>
                    <Brands brands={brands}/>
                    <CouponAd image={loved}/>
                    
                </>}
                { showOverlay && <Overlay overlayId={overlayId} onStateUpdate={toggleOverlay} /> }
                
            </div>

            <About />
            <Footer />

        </div>
    )
}



/*

<Products products={products} onStateUpdate={toggleOverlay} onSendId={handleChildId}/>
-------------------------------------
    async function getData() {
        try {
            const products_response = await axios.get('http://localhost:8000/api/product/');
            setProducts(products_response.data.results);
            const categories_response = await axios.get('http://localhost:8000/api/category/');
            setCategories(categories_response.data.results);
            setError(null);
        } catch (err) {
            setError(err.message);
            setProducts(null);
            setCategories(null);
        } finally {
            setLoading(false);
        }
    };
    getData();


----------------------------------

<button onClick={() => setShowOverlay(!showOverlay)}>Overlay</button>

---------------------------------


    function showCategory(e) {
        let catId = e.target.id
        setCategory(catId)
        let cat = product.filter((val) => val.category===catId);
        setFilteredResults(cat);
    }
    function changeHeight(){
        var element = document.getElementById("scroll");
        element.style.height = "5px";
        element.style.visibility = "hidden";
    }
    function resetHeight(){
        setFilteredResults(null)
        var element = document.getElementById("scroll");
        element.style.height = "100%";
        element.style.visibility = "visible";
    }
-----------------------

    {filteredResults ? (

            <div className='shop'>
            <div className='shopTitle'>
                <div onClick={resetHeight}><ArrowSquareLeft size={32} /></div> 
                <div> {category} </div> 
            </div>

            <div className='products-container'>
                {filteredResults.map((product)=> (
                <Link to={`/detail/${ product.id }`}>
                    
                    <Product data={product}/>
                    
                </Link>
                ))}
            </div>
            </div>

    ):(<></>)}  
--------------------

    if (data !== null) {
        let unique_category = [...new Set(data.map(item => item.category))];
        console.log("unique_category: ", unique_category)
        setCategory(unique_category);
    }

--------------------

    const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, DELETE'
    }

---------------------    


<div id="scroll" className='categories-container'>
        {category && category.map((cat)=> (
            <div   className='category-box' onClick={(e) => (showCategory(e), changeHeight())}>
                <img id={cat.category} className='category-image' src={cat.image} />
                <div className='category-title'>{cat.category}</div>
            </div>
        ))}
</div>

-----------------------


   useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              'http://localhost:8000/api/product/',
                method: 'GET',    
                withCredentials: true,    
                crossorigin: true,    
                mode: 'no-cors',
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            setData(actualData);
            console.log("data:", data)
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }  
        }
        getData()
        console.log("data:", data)
      }, [])



*/