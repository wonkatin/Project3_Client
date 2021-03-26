import { BrowserRouter as Router, Link } from "react-router-dom"
import  { useState, useEffect } from 'react'
import TripCard from './TripCard.jsx'
import axios from 'axios'

// Needs:
    // Possible stretch goal links with conditionals for sorting trips by date
    

export default function Trips(props) {
    const [allTrips, setAllTrips] = useState([])

    // console.log(props.currentUser.trips)
    useEffect(() => {
        let pullData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips`)
            // console.log(response.data[0], '🌸');
            const tripInfo = response.data
            let tripsArray = [];

            for (const key in tripInfo) {
                // console.log(key, tripInfo[key], '🌕')
                tripsArray.push(tripInfo[key])
            }
            setAllTrips(tripsArray)
            // console.log(tripsArray, '🌷')
        }


        pullData()
    }, [])
    
    const displayTrips = allTrips.map((trip, index) => {
        return (
            <h1 key={index}>{trip.location}</h1>
            // <TripCard
            //     key={ index }
            //     img={ trip.img }
            //     name={ trip.name }
            //     location={ trip.location }
            //     fromDate={ trip.fromDate }
            //     handleLogout={ props.handleLogout } 
            //     currentUser={ props.currentUser } 
            //     setCurrentUser={ props.setCurrentUser } 
            // />
            
            )
        })
        
        
        return(
            <div className="background-trips">
                <h1>My Trips</h1>
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