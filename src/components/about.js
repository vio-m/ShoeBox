import './about.css'
import { useState } from 'react';

export const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
      };

  return (
    <div className='about-container'>
        <div className='about-title' onClick={handleClick}>About Women's Clothing, Shoes & Accessories</div>
        {isVisible && (
            <div className='about-content'>ShoeBox is proud to offer the very best in women's fashion. 
            Looking for new head-to-toe outfits to update your wardrobe? Shop our selection of women's clothing, shoes and 
            handbags. We offer a range of sizes for every body, from petite clothing to plus-size clothing and every fit 
            in between. When it comes to warm-weather trends, we've got you covered. Our free Personal Stylists are happy 
            to help you find perfect wedding-guest dresses, strappy sandals and lingerie to wear under the most challenging 
            necklines.</div>
         )}
    </div>
  )
}

 