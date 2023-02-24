import './announcement.css'
import { useEffect, useState } from "react";

export const Announcement = () => {
    const [showElement, setShowElement] = useState(true);
    
    useEffect(() => {
        setTimeout(function () {
        setShowElement(false);
        }, 3000);
    }, []);


  return (
        <>
            {showElement ? (
                
                <div className='announcement-container'>
                    Super Deal! Free Shipping!
                </div>

                ) : (

                <div className='announcement-container hidden'></div>

                )
            }
        </>
    )
}
