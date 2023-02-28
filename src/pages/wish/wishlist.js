import './wishlist.css'
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { DataContext } from "../../context/dataContext";
import { useNavigate } from "react-router-dom";
import { WishlistItem } from "./wishlistItem";


export const WishList = () => {
    const data = useContext(DataContext);
    const { wishItems, getTotalWishlistAmount } = useContext(ShopContext);
    const totalAmount = getTotalWishlistAmount();
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };
    
    return (
        <div className='wishlist-container'>

            {data && data.products.map((product) => {
                if (wishItems[product.id] > 0) {
                    return <WishlistItem data={product} />;
                }
            })
            
            }

            {totalAmount > 0 ? (
                <button id='home-btn' onClick={() => navigateHome()}> Continue Shopping </button>
            ):(
                <div className="empty-cart">
                    <div className="empty-cart-message"> Your Shopping Cart is Empty</div>
                    <button className="empty-cart-button" onClick={navigateHome}>Continue Shopping</button>
                </div>
            )}
        </div>
    );
};


/*


*/
