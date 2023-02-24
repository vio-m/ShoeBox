import { useState } from "react";

export const OrderProcessor = ({ shippingAddress, paymentMethod, cartItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Show a loading indicator
      setIsLoading(true);
  
      // Send a request to the server to place the order
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shippingAddress,
          paymentMethod,
          items: cartItems,
        }),
      });
  
      // Parse the response from the server
      const data = await response.json();
  
      // Check if the order was successfully placed
      if (response.status === 200) {
        // Show a success message
        setMessage('Order placed successfully!');
  
        // Clear the cart
        //setCartItems([]);
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
  };

  return (
    <div className='order-processor'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {message && <div>{message}</div>}
          <h2>Shipping Address</h2>
          <p>{shippingAddress.name}</p>
          <p>{shippingAddress.address}</p>
          <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}</p>
          <h2>Payment Method</h2>
          <p>{paymentMethod}</p>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};