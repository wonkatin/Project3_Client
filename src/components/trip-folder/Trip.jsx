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
            console.log(response);
            let tripsArray = [];
            for (const key in allTrips) {
                console.log(key, allTrips[key])
                tripsArray.push(allTrips[key])
            }
            setAllTrips(tripsArray)
        }
        pullData()
    }, [])

    // console.log(tripsArray);
    // if(allTrips) {
        const displayTrips = allTrips.map((trip, index) => {
            return <TripCard
                        key={index}
                        img={trip.img}
                        name={trip.name}
                        location={trip.location}
                        fromDate={trip.fromDate}
                    />
        })
    // }
    
    return(
        <Router>
            <div className="background-trips">
                <h1>My Trips</h1>
                <div className="trip-container">
                    {displayTrips}
                </div>
            </div>
        </Router>
    )
}



// Stretch Goal for Sorting Trips
// <div class="upcoming-links">
//     <a href="">All Trips</a> {/* Need to add Link */}
//     <a href="">Upcoming Trips</a> {/* Need to add Link */}
//     <a href="">Past Trips</a> {/* Need to add Link */}
// </div>