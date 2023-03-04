import './categorypage.css'
import { DataContext } from "../../context/dataContext";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Overlay from '../../components/overlay';


export const CategoryPage = (props) => {
    const {id} = useParams();
    const data = useContext(DataContext);
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState(null)
    const [products, setProducts] = useState(null)
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayId, setOverlayId] = useState()
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };
    const toggleOverlay = (newState) => {
        setShowOverlay(!showOverlay);
    };
    function handleChildId(id) {
        setOverlayId(id)
    };


    useEffect(() => {
        if (data.loading===false) {
            const temp_obj = data.categories.filter(k => k.id==id);
            console.log(temp_obj[0])
            setTitle(temp_obj[0].category)
            setImage(temp_obj[0].image)
            setDescription(temp_obj[0].description)
            const temp_prod = data.products.filter(k => k.category==id);
            setProducts(temp_prod)
        }
    }, []);


    return (
        <div className='categorypage-container'>
            <div className='categorypage-header'>
                <div className='categorypage-header-title' >All {title}</div>
                <img className='categorypage-header-image' src={image}></img>
            </div>

            <div className='categorypage-content'>
                {products && products.map((item)=>
                    <div className='categorypage-product-box' key={item.id}>
                        <img className='categorypage-product-image' src={item.image} />
                        <div className='categorypage-product-info'>
                            <div className='categorypage-product-name'>{item.name}</div>
                            <div className='categorypage-product-price'> only ${item.price}</div>
                            <button onClick={()=> {toggleOverlay(); handleChildId(item.id)}} className='categorypage-product-button'> + Quick View</button>
                        </div>
                    </div>
                )}
            </div>
            { showOverlay && <Overlay overlayId={overlayId} onStateUpdate={toggleOverlay} /> }
            <button id='category-back-btn' onClick={() => navigateHome()}> BACK </button>
        </div>
    )
}
