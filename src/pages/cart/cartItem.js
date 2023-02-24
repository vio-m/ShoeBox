import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const CartItem = (props) => {
    //console.log("props: ", props)
    const { id, name, price, image } = props.data;
    //console.log("!>", id, name, price)
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="cartItem-container">
            <div className="cartItem-image">
                <img src={image} />
            </div>
            <div className="cartItem-description">
                <div className="cartItem-title">
                    {name}
                </div>
                <div className="cartItem-price"> 
                    Price: ${price}
                </div>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};