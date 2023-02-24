import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "./dataContext";


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const data = useContext(DataContext);
    const [cartItems, setCartItems] = useState({});
    const [wishItems, setWishItems] = useState({});

    function getDefaultCart() {
        let cart = {};
        if (data.products!=null) {
            for(const[key, value] of Object.entries(data.products)) {
                cart[value.id] = 0
            }
        }
        return cart;
    };
    function getDefaultWishlist() {
        let wishlist = {};
        if (data.products!=null) {
            for(const[key, value] of Object.entries(data.products)) {
                wishlist[value.id] = 0
            }
        }
        return wishlist;
    };

    useEffect(() => {
        if (data) {
            setCartItems(getDefaultCart())
            setWishItems(getDefaultWishlist())
        }
    }, [data]);
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = data.products.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
        }
        }
        return Math.round(totalAmount * 100) / 100;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1} ));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const addToWishlist = (itemId) => {
        setWishItems((prev) => ({...prev, [itemId]: prev[itemId] + 1} ));
    };

    const removeFromWishlist = (itemId) => {
        setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
        wishItems,
        addToWishlist,
        removeFromWishlist
    };

    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    );
};




/*

    function getDefaultCart(){
        let cart = {};
        if (products) {
            for(const[key, value] of Object.entries(products)) {
                cart[value.id] = 0
            }
        }
        //console.log("empty cart: ", cart)
        return cart;
    };
    const [cartItems, setCartItems] = useState(getDefaultCart());


*/