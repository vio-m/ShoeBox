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


export const Shop = ({searchId}) => {
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
    function setNull() {
        setOverlayId(null)
    };
    function handleParentId(searchId) {
        //console.log("function: ", searchId, overlayId)
        if (searchId != null || searchId != undefined) {
            setOverlayId(searchId)
            toggleOverlay()}
    };

    useEffect(() => {
        if (data.loading==false) {
            setProducts(data.products)
            setCategories(data.categories)
            setBrands(data.brands)
        }
        changeAd()
        handleParentId(searchId)
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
                { showOverlay && <Overlay overlayId={overlayId} onStateUpdate={toggleOverlay} setNull={setNull}/> }
                
            </div>

            <About />
            <Footer />

        </div>
    )
}



/*

*/