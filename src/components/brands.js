import './brands.css'
import { Link } from 'react-router-dom'

export const Brands = ({brands}) => {
    return (
        <div className='brands-container'>
    
            <div className='brands-title'>BRANDS WE LOVE</div>
            <div className='brand-box-container'>
                {brands.map((item) => (
                    <div className='brand-box' key={item.id}>
                        <img className="brand-image" src={ item.image }></img>
                        <div className='brand-info'>
                            <Link to={`/brand/${item.id}`} className='brand-button'>{ item.brand }</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
  }



/*
<button className="brand-button">SHOP NOW</button>
*/