import './order.css'

export const Order = ({data}) => {

    const date = new Date(data.created_at).toLocaleDateString()

    return (
        <div className='order-container'>
            <div className='order-box'>
                <div className='order-title'>Your order details: </div>
                <div className='order-date'>Date: <span>{date}</span></div>
                <div className='order-status'>Status: <span>{data.status}</span></div>
                <div className='order-payment'>Payment Method: <span>{data.payment_method}</span></div>
                <div className='order-transaction'>Transaction ID: <span>{data.transaction_id}</span></div>
            </div>
        </div>
    )
}
