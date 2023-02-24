import './wishlist.css'
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { DataContext } from "../../context/dataContext";
import { useNavigate } from "react-router-dom";
import { WishlistItem } from "./wishlistItem";


export const WishList = () => {
    const data = useContext(DataContext);
    const { wishItems } = useContext(ShopContext);
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
            <button id='home-btn' onClick={() => navigateHome()}> HOME </button>
        </div>
    );
};


/*


*/
