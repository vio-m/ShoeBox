import "./cart.css";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { DataContext } from "../../context/dataContext";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";



export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const data = useContext(DataContext);
    //console.log("data from context: ", data)
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    };

    const navigateToCheckout = () => {
        navigate("/checkout", {
        state: {
            totalAmount,
            cartItems
        }
        });
    };


  return (
    <div className="cart">

    <div className="cart">
        {data.products.map((product) => {
        if (cartItems[product.id] > 0) {
            return <CartItem data={product} />;
        }
        })}
    </div>

    {totalAmount > 0 ? (
        <div className="checkout">
        <div className="checkout-title"> CART TOTALS </div>
        <div className="checkout-subtotal"> Subtotal: ${totalAmount} </div>
        <div className="checkout-subtotal"> Coupon: $ 0 </div>
        <div className="checkout-subtotal"> Shipping: $ 0 </div>
        <div className="checkout-total"> Total: ${totalAmount} </div>

        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button
            onClick={() => {
            checkout();
            navigateToCheckout();
            }}
        >
            {" "}
            Checkout{" "}
        </button>
        </div>
    ) : (
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