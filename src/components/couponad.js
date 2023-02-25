import './couponad.css'


export const CouponAd = (props) => {
    const image = props.image
    const text = props.text
    return (
        <div className='couponad-container'>
            <img className='couponad-image' src={image}></img>
            {text && <div className='couponad-text'>{text}</div>}
        </div>
    )
}



/*

*/