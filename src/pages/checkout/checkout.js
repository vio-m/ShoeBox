import './checkout.css'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


export const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const [message, setMessage] = useState('');
    const [orderedItem, setOrderedItem] = useState(null)
    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('');
    //
    const [orderId, setOrderId] = useState(null)
    const [orderStatus, setOrderStatus] = useState()


    useEffect(() => {
          
        const handleOrderedItem = () => {
            //console.log("data", data.cartItems)
            const item = Object.entries(data.cartItems).filter(([k, v], i)=> v > 0)
            //console.log("> i.: ", item)
            setOrderedItem(JSON.stringify(item))
            //console.log(">> o.i.: ", orderedItem)
        }
        handleOrderedItem()
    }, []);  

    const handleShippingAddressChange = (event) => {
        setShippingAddress({
          ...shippingAddress,
          [event.target.name]: event.target.value,
        });
        //console.log("shipping address: ", shippingAddress)
    };
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
        //console.log("payment Method: ", paymentMethod)
    };
    


    //
    const navigateHome = () => {
        navigate("/");
    };
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        //console.log("cookie: ", cookieValue)
        return cookieValue;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //handleOrderedItem()
        const order = {
            "ordered_item": orderedItem,
            "shipping_name": shippingAddress.name,
            "shipping_address": shippingAddress.address,
            "shipping_city": shippingAddress.city,
            "shipping_state": shippingAddress.state,
            "shipping_zip": shippingAddress.zip,
            "payment_method": paymentMethod,
            "total_price": data.totalAmount,
            "customer": 1
        };
        console.log("posted:", order)
        await axios.post('http://localhost:8000/api/order/', order)
        
        .then(response => {
            setMessage(response.data.message)
            //console.log(response)
            const oid = response.data.id
            const status = response.data.status

            //console.log("response: ", response.status)
            navigate(`/order/${oid}`);
        })
        .catch(err => {
            console.error(err.response);
            console.log(">>> ERROR: ", err.message);
        });

    };


    return (
        <div className='checkout-container'>
            <form onSubmit={handleSubmit}>
                <h2>Shipping Address</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={shippingAddress.name}
                    onChange={handleShippingAddressChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingAddress.address}
                    onChange={handleShippingAddressChange}
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingAddress.city}
                    onChange={handleShippingAddressChange}
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingAddress.state}
                    onChange={handleShippingAddressChange}
                    />
                </div>
                <div>
                    <label htmlFor="zip">Zip:</label>
                    <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={shippingAddress.zip}
                    onChange={handleShippingAddressChange}
                    />
                </div>
                <h2>Payment Method</h2>
                <div class="payment-method">
                    <div className={`radio-item ${paymentMethod === 'credit-card' ? "selected" : ""}`}>
                        <label htmlFor="credit-card">Credit Card</label>
                        <input
                        type="radio"
                        id="credit-card"
                        name="paymentMethod"
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={handlePaymentMethodChange}
                        />
                    </div>
                    <div className={`radio-item ${paymentMethod === 'paypal' ? "selected" : ""}`}>
                        <label htmlFor="paypal">PayPal</label>
                        <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={handlePaymentMethodChange}
                        />
                    </div>
                </div>
                <button type="submit">Place Order</button>

            </form>
        </div>
    )
}


/*

<p>{JSON.stringify(data)}</p>

*/






