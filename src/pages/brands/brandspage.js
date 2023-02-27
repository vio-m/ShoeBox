import './brandspage.css'
import { DataContext } from "../../context/dataContext";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Overlay from '../../components/overlay';


export const BrandsPage = (props) => {
    const {id} = useParams();
    const data = useContext(DataContext);
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState(null)
    const [products, setProducts] = useState(null)
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayId, setOverlayId] = useState()
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };
    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    const toggleOverlay = (newState) => {
        setShowOverlay(!showOverlay);
    };
    function handleChildId(id) {
        setOverlayId(id)
    };


    useEffect(() => {
        if (data.loading===false) {
            const temp_obj = data.brands.filter(k => k.id==id);
            setTitle(temp_obj[0].name)
            setImage(temp_obj[0].image)
            setDescription(temp_obj[0].description)
            const temp_prod = data.products.filter(k => k.category==id);
            setProducts(temp_prod)
        }
    }, []);


    return (
        <div className='brandspage-container'>
            <div className='brandspage-header'>
                <div className='brandspage-header-title' onClick={handleClick}>All {title}</div>
                <img className='brandspage-header-image' src={image}></img>
                {isVisible && <div className='brandspage-header-description'>{description}</div>}
            </div>
            <div className='brandspage-content'>
                {products && products.map((item)=>
                    <div className='brandspage-product-box' key={item.id}>
                        <img className='brandspage-product-image' src={item.image} />
                        <div className='brandspage-product-info'>
                            <div className='brandspage-product-name'>{item.name}</div>
                            <div className='brandspage-product-price'> only ${item.price}</div>
                            <button onClick={()=> {toggleOverlay(); handleChildId(item.id)}} className='brandspage-product-button'> + Quick View</button>
                        </div>
                    </div>
                )}
            </div>
            { showOverlay && <Overlay overlayId={overlayId} onStateUpdate={toggleOverlay} /> }
            <button id='brand-back-btn' onClick={() => navigateHome()}> BACK </button>
        </div>
    )
}