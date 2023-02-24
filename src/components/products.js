import './products.css'
import  { Product } from './product'
import { Link } from 'react-router-dom'


export const Products = (props) => {
    const products = props.products

    const handleUpdate = () => {
        props.onStateUpdate(1);
    };
    const sendId = (id) => {
        props.onSendId(id);
    }

    return (
        <div className='products-container'>
            {products.map((item)=>
                        
                <div className='product-box' key={item.id}>
                    <img className='product-image' src={item.image} />
                    <div className='product-info'>
                        <div className='product-name'>{item.name}</div>
                        <div className='product-price'> only ${item.price}</div>
                        <button onClick={()=> {handleUpdate(); sendId(item.id)}} className='product-button'>Quick View</button>
                    </div>
                </div>

            )}
        </div>
    )
}


/*
<Link to={`/detail/${item.id}`} className='product-button'>Quick View</Link>  


<div className='product-description'>{item.description}</div>


<Product data={(props)} key={props.id}/>
*/