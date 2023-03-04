import './footer.css'
import { Newsletter } from './newsletter'
import Socialmedia from './socialmedia'


  export const Footer = () => {

    return (
      <div className='footer-container'>
        <div className='footer-left'>
            <div className='footer-logo'>SHOE BOX</div>
            <div className='footer-description'> Proud to offer the very best in women's fashion. Looking for new head-to-toe outfits to update your wardrobe? Shop our selection of women's clothing, shoes and handbags. We offer a range of sizes for every body, from petite clothing to plus-size clothing and every fit in between. When it comes to warm-weather trends, we've got you covered. 
            </div>
            <div></div>
        </div>
        <div className='footer-center'>
            <div className='footer-newsletter'>
                <Newsletter />
            </div>
            <div className='footer-socialmedia'>
                <Socialmedia />
            </div>
        </div>
        <div className='footer-right'>
            <div>Contact Us</div>
            <div>Gift Cards</div>
            <div>Find a Store</div>
            <div>Careers</div>
            <div>Return Policy</div>
            <div>Order Status</div>
            <div>Shipping</div>
        </div>
      </div>
    )
  }
  