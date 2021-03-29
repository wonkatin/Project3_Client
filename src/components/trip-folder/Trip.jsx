import  { useState, useEffect } from 'react'
import TripCard from './TripCard.jsx'
import axios from 'axios'


    // Possible stretch goal links with conditionals for sorting trips by date
    

export default function Trips(props) {
    const [allTrips, setAllTrips] = useState([])
    
    const pullData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips`)
        const tripInfo = response.data
        let tripsArray = [];

        for (const key in tripInfo) {
            tripsArray.push(tripInfo[key])
        }
        setAllTrips(tripsArray)
    }

    // useEffect(() => {
    //     pullData()
    // }, [props.currentUser.id])
    
    useEffect(() => {
        pullData()
    },[])
    

    const displayTrips = allTrips.map((trip, index) => {
        return (
            <TripCard
                key={ index }
                tripId={ trip._id }
                img={ trip.img }
                name={ trip.name }
                location={ trip.location }
                fromDate={ trip.fromDate }
                toDate={ trip.toDate }
                tripChecklist={ trip.tripChecklist }
                tripExpenses={ trip.tripExpenses }
                notes={ trip.notes }
                tripSchedule={ trip.tripSchedule }
                lodgingInfo={ trip.lodgingInfo }
                flightInfo={ trip.flightInfo }
                handleLogout={ props.handleLogout } 
                currentUser={ props.currentUser } 
                setCurrentUser={ props.setCurrentUser }
                pullData={ pullData }
            />
            )
        })
        
        
        return(
            <div>
                <div className="trip-container">
                   { displayTrips }
                </div>
            </div>
        
    )
}



// Stretch Goal for Sorting Trips
// <div class="upcoming-links">
//     <a href="">All Trips</a> {/* Need to add Link */}
//     <a href="">Upcoming Trips</a> {/* Need to add Link */}
//     <a href="">Past Trips</a> {/* Need to add Link */}
// </div>