import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const WishlistItem = (props) => {
    const { id, name, price, image } = props.data;
    const { addToCart, removeFromWishlist } = useContext(ShopContext);

    return (
        <div className="wishItem-container">
            <div className="wishItem-image">
                <img src={image} />
            </div>
            <div className="wishItem-description">
                <div className="wishItem-title">
                    {name}
                </div>
                <div className="wishItem-price"> 
                    Price: ${price}
                </div>
                <div className="wishItem-buttons">
                    <button onClick={() => removeFromWishlist(id)}> Remove from List </button>
                    <button onClick={() => addToCart(id)}> Add to Cart </button>
                </div>
            </div>
        </div>
    );
};