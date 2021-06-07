const Booking=(props)=>{
    return(
        <div>
            <h3>From: {new Date(props.booking.start_time).toLocaleDateString()} to: {new Date(props.booking.end_time).toLocaleDateString()}
            </h3>
            { props.booking.confirmed
            ?<h2 className ='booking-confirmed'>Booking confirmed</h2>
            :(<div className = 'booking-button-div'>
                <button className="approve-button">Approve</button>
                <button className='deny-button'>Deny</button>
            </div>
            
                )
         }
            
        </div>
    )
}
export default Booking