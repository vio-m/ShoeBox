import './searchoverlay.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'


export default function SearchOverlay(props) {
    const results = props.results

    const handleUpdate = () => {
        props.onStateUpdate(1);
    };
    const sendId = (id) => {
        props.onSendId(id);
    }

    return (

        <div className='searchoverlay-background'>    
            <div className='searchoverlay-container'>
                <button className="searchoverlay-close-button" onClick={handleUpdate}> X </button>

                {results && results.length == 0 ? (
                    <h3>No results found...</h3>
                ):(
                    <>
                        {results.map((item)=> 
                            <div className='searchitem-card' key={item.id} onClick={()=> {sendId(item.id); handleUpdate()}} >
                                <img className='searchitem-image' src={item.image} />
                                <div className='searchitem-name'>{item.name}</div>
                                <div className='searchitem-price'> ${item.price}</div>
                                
                                
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

/*
<button onClick={()=> {sendId(item.id); handleUpdate()}} className='searchitem-button'>VIEW</button>
<Link to={`/detail/${item.id}`} className='searchitem-button' onClick={handleUpdate}>View</Link>
*/