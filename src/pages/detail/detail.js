import './detail.css'
import axios from "axios"
import { ShopContext } from '../../context/shopContext'
import { DataContext } from "../../context/dataContext";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { ColorSelect } from '../../components/colorselect';
import { SizeSelect } from '../../components/sizeselect';


export const Detail = () => {
    const {id} = useParams();
    const data = useContext(DataContext);
    const [product, setProduct] = useState()
    const [sale, setSale] = useState(false)
    const [discountedPrice, setDiscountedPrice] = useState(null)
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]


    useEffect(() => {
        if (data.loading==false) {
            console.log('data:', data)
            const temp = data.products.filter(k => k.id == id);
            setProduct(temp[0])
            const sale = temp[0].sale
            setSale(sale)
            const discount = temp[0].percent
            const disco = (temp[0].price * (1 - discount / 100)).toFixed(2);
            setDiscountedPrice(disco)
        }
    }, []);

    
    return (
        <div className="detail-page">
            <div className="detail-container">
            {product && (
                    <>
                        <div className='overlay-image'>
                            <img src={product.image}></img>
                        </div>
                        <div className='overlay-details'>
                            
                            <div className='overlay-name'>{product.name}</div>
                            {product.tag && <div className='overlay-trending'>{product.tag}</div>}
                            <div className='overlay-info'>{product.description}</div>
                            {sale ? (
                                <>
                                    <div className='overlay-full-price'>$ {product.price}</div>
                                    <div className='overlay-discounted-price'>$ {discountedPrice}</div>
                                </>
                            ):(
                                <div className='overlay-price'>$ {product.price}</div>
                            )}                       

                            <SizeSelect sizes={product.size}/>
                            <ColorSelect />

                            <div className='overlay-add-buttons'>
                                <button className='overlay-addToCartBtn' onClick={()=> addToCart(id)}> 
                                    Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
                                </button>
                                <button className='overlay-addToCartBtn'>Add To Wishlist</button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}


/*

*/
