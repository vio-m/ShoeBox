import './userInfo.css'
import { useEffect, useState } from 'react';


export default function UserInfo({ user }) {
    const [showElement, setShowElement] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setShowElement(false);
        }, 3000);
      }, []);

    return (
        <>
            {showElement ? (
                    <div className="userinfo-container">
                        <h4>Hello, {user.username}</h4>
                    </div>
            ):(
                <></>
            )}
        </>
    );
}
