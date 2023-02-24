import './checkout.css'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
//import { OrderProcessor } from './OrderProcessor';


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
                <div>
                    <label htmlFor="credit-card">Credit Card:</label>
                    <input
                    type="radio"
                    id="credit-card"
                    name="paymentMethod"
                    value="credit-card"
                    checked={paymentMethod === 'credit-card'}
                    onChange={handlePaymentMethodChange}
                    />
                </div>
                <div>
                    <label htmlFor="paypal">PayPal:</label>
                    <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={handlePaymentMethodChange}
                    />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    )
}


/*

<button onClick={navigateHome}>Home</button>
<p>{JSON.stringify(data)}</p>

-------------------------------------------------------------------

    await axios.post('http://localhost:8000/api/order/', JSON.stringify(order))
        
        .then(response => {
            setMessage(response.data.message)
            console.log("response: ", response.status)
            navigate(`/`);
        })
        .catch(err => {
            console.error(err.response);
            console.log(">>> ERROR: ", err.message);
        });


-----
 "items": data.cartItems,
------

        try {
            const response = await axios.post('http://localhost:8000/api/order/', {
                credentials: 'true',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin':'http://localhost:3000/',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Headers': '*',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'),
                },
                body: JSON.stringify(order),
            });
            
            if (response.ok) {
                console.log("response: ", response)
                const data = await response.json();
                navigate(`/order/${data.order_id}/`);
            } else {
                const errorData = await response.json();
                console.log(">>> ERROR: ", errorData);
                setMessage('There was an error placing the order. Please try again later.');
            }
        } catch (error) {
            console.log("catched error: ", error, JSON.stringify(error));
            setMessage('There was an error placing the order. Please try again later.');
        }


-------------------------------------------------

                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'),
                },

-------------------------------------------

<OrderProcessor
    shippingAddress={shippingAddress}
    paymentMethod={paymentMethod}
    cartItems={[]} // Assuming that the cart items are stored in a separate state or passed down as props
/>

---------------------------------------------

    Prevents the default form submit behavior.

    Sets the isLoading state to true to show a loading indicator.

    Sends a POST request to the server to place the order, passing the shipping address, payment method, and cart items as the request body.

    Parses the response from the server and checks the status code.

    If the order was successfully placed, it sets a success message and clears the cart.

    If there was an error, it sets an error message.

    Hides the loading indicator by setting isLoading to false.

----------------------

the original handlesubmit func:

try {
    // Show a loading indicator
    setIsLoading(true);

    // Send a request to the server to place the order
    const response = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        shippingAddress,
        paymentMethod,
        items: cartItems, // Assuming that the cart items are stored in a separate state or passed down as props
    }),
    });

    // Parse the response from the server
    const data = await response.json();

    // Check if the order was successfully placed
    if (response.status === 200) {
    // Show a success message
    setMessage('Order placed successfully!');

    // Clear the cart
    setCartItems([]);
    } else {
    // Show an error message
    setMessage('There was an error placing the order. Please try again later.');
    }
} catch (error) {
    // Show an error message
    setMessage('There was an error placing the order. Please try again later.');
} finally {
    // Hide the loading indicator
    setIsLoading(false);
}
        





*/






