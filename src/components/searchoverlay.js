import './searchoverlay.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'


export default function SearchOverlay(props) {
    const results = props.results

    const handleUpdate = () => {
        props.onStateUpdate(1);
    };


    return (

        <div className='searchoverlay-background'>    
            <div className='searchoverlay-container'>
                <button className="searchoverlay-close-button" onClick={handleUpdate}> X </button>

                {results && results.length == 0 ? (
                    <h3>No results found...</h3>
                ):(
                    <>
                        {results.map((item)=> 
                            <div className='searchitem-card' key={item.id}>
                                <img className='searchitem-image' src={item.image} />
                                <div className='searchitem-name'>{item.name}</div>
                                <div className='searchitem-price'> ${item.price}</div>
                                <Link to={`/detail/${item.id}`} className='searchitem-button' onClick={handleUpdate}>View</Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

/*

    {results.map((item)=> 

        <div className='product-box' key={item.id}>
            <img className='product-image' src={item.image} />
            <div className='product-info'>
                <div className='product-name'>{item.name}</div>
                <div className='product-price'> only ${item.price}</div>
                <button onClick={()=> {handleUpdate(); sendId(item.id)}} className='product-button'>Quick View</button>
            </div>
        </div>

    )}

------------------------

        <div className='searchoverlay-background'>    
            <div className='searchoverlay-container'>
                <button className="searchoverlay-close-button" onClick={handleUpdate}> X </button>

                {results && results.map((item)=> 

                    <div className='product-box' key={item.id}>
                        <img className='product-image' src={item.image} />
                        <div className='product-info'>
                            <div className='product-name'>{item.name}</div>
                            <div className='product-price'> only ${item.price}</div>
                            <button className='product-button'>Quick View</button>
                        </div>
                    </div>

                )}

            </div>
        </div>

        <div className='searchoverlay-container'>
            <button className="searchoverlay-close-button" onClick={handleUpdate}> X </button>
            <div className='searchoverlay-results'>
                {results.map(result => (
                    <div className="result" key={result.id}>
                        <div>{result.name}</div>
                    </div>
                ))}
            </div>
        </div>
*/