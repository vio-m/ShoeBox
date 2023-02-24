import './newsletter.css'
import axios from 'axios';
import { useState } from 'react';


export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState();

    async function handleSubscribe(e) {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/subscribe/', { email })
            .then(response => {
                setMessage(response.data.message)
                setEmail('');
            })
            .catch(err => {
                console.error(err);
            });
        setEmail('');
      };
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className='newsletter-container'>
            {message ? (

                <div className='newsletter-title'>{message}</div>

            ) : (
                <>
                    <div className='newsletter-title'>Get email updates:</div>
                    <form className='newsletter-form' onSubmit={handleSubscribe}>
                        <input className='newsletter-input' 
                            placeholder='  Email Address  '
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button className='newsletter-button' >Subscribe</button>
                    </form>
                </>
            )}
        </div>
    )
}


/*

    if (subscribed) {
        console.log("You have already subscribed.");
        return;
    }

--------------------------------------------------------



*/