import './overlay.css'
import { ShopContext } from '../context/shopContext'
import { DataContext } from "../context/dataContext";
import AuthContext from "../context/AuthContext";
import { useState, useEffect, useContext } from 'react';
import { ColorSelect } from './colorselect';
import { SizeSelect } from './sizeselect';


const Overlay = (props) => {
    const id = props.overlayId
    const data = useContext(DataContext);
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState()
    const [sale, setSale] = useState(false)
    const [discountedPrice, setDiscountedPrice] = useState(null)
    const { addToCart, cartItems, addToWishlist, wishItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    const wishlistItemAmount = wishItems[id]

    useEffect(() => {
        if (data.loading==false) {
            const temp = data.products.filter(k => k.id == id);
            setProduct(temp[0])
            //console.log("prod", temp)
            const sale = temp[0].sale
            //console.log("sale", sale)
            setSale(sale)
            const discount = temp[0].percent
            const disco = (temp[0].price * (1 - discount / 100)).toFixed(2);
            setDiscountedPrice(disco)
        }
    }, []);

    const handleUpdate = () => {
        props.onStateUpdate(1);
    };

    return (
        <div className='overlay-background'>    
            <div className='overlay-container'>
                <button className="overlay-close-button" onClick={handleUpdate}> X </button>

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
                                {user ? (
                                    <button className='overlay-addToCartBtn'  onClick={()=> addToWishlist(id)}>
                                        Add To Wishlist {wishlistItemAmount > 0 && <> ({wishlistItemAmount}) </>}
                                    </button>
                                    ):(
                                    <button className='overlay-addToCartBtn disabled' disabled>
                                        Add To Wishlist
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};
  

export default Overlay;



/*


*/