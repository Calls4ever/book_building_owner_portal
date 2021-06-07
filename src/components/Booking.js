const Booking=(props)=>{
    const handleApprove=()=>{
        fetch(`http://localhost:3000/bookings/${props.booking.id}`,{
            method: 'PATCH',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                confirmed: true
            })
        })
        .then(res=>res.json())
            .then(newBooking=>{
                if(newBooking){
                    fetch(`http://localhost:3000/owners/${props.currentUser.username}`)
                    .then(res=>res.json())
                    .then(newUser=>{
                        if(newUser){
                            props.setCurrentUser(newUser)
                        }
                    })
                }
            })
    }
    return(
        <div>
            <h3>From: {new Date(props.booking.start_time).toLocaleDateString()} to: {new Date(props.booking.end_time).toLocaleDateString()}
            </h3>
            { props.booking.confirmed
            ?<h2 className ='booking-confirmed'>Booking confirmed</h2>
            :(<div className = 'booking-button-div'>
                <button className="approve-button"
                onClick={handleApprove}
                >Approve</button>
                <button className='deny-button'>Deny</button>
            </div>
            
                )
         }
            
        </div>
    )
}
export default Booking