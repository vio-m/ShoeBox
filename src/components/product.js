import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

export const Product = (props) => {
    const { id, image, price, name, category } = props.data


    return (

            <div className='product-container'>
                <img className='product-image' src={image} />
                <div className='product-description'></div>
                <div className='product-name'>{name}</div>
                <div className='product-price'>{price}</div>                   
            </div>

    )
}

/*
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]


                <button className='addToCartBtn' onClick={()=> addToCart(id)}> 
                    Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
                </button>
*/
