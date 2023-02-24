import './couponad.css'


export const CouponAd = (props) => {
    const image = props.image
    return (
        <div className='couponad-container'>
            <img className='couponad-image' src={image}></img>
            <div className='couponad-text'>Get 10% off with your coupons...</div>
        </div>
    )
}



/*

*/