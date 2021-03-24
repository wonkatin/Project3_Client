import { RouterBrowser as Router, Link, Route } from 'react-router-dom'
import TripCard from './TripCard.jsx'

// Needs:
    // Route for TripContainer?
    // Address link to create new Trip
    // Is map info correct?
    // Possible stretch goal links with conditionals for sorting trips by date


export default function Trips(props) {
    
    // const [trips, setTrips] = useState([])

    const AllTrips = props.trips.map((trip, index) => {
        return <TripCard
                    key={index}
                    img={trip.img}
                    name={trip.name}
                    location={trip.location}
                    fromDate={trip.fromDate}
                />
    })
    
    return(
        <Router>
            <div className="background-trips">
                <h1>My Trips</h1>
                <Link to="/users/${userId}/trips/${tripId}" className="button">Add New Trip</Link>
                <div className="trip-container">
                    {AllTrips}
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