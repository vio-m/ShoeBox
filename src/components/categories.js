import './categories.css'
import { Link } from 'react-router-dom'

export const Categories = ({categories}) => {
    return (
        <div className='categories-container'>

            <div className='categories-title'>CHOOSE YOUR TYPE</div>
            <div className='category-box-container'>
                {categories.map((item) => (
                    <div className='category-box' key={item.id}>
                        <img className="category-image" src={ item.image }></img>
                        <div className='category-info'>
                            <div className="category-name">{ item.name }</div>
                            <Link to={`/category/${item.id}`} className='category-button'>SHOP NOW</Link>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/*


<div className="category-description">{ item.description }</div>

<button className="category-button">SHOP NOW</button>

*/