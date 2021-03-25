import { BrowserRouter as Router, Link } from "react-router-dom"
import TripCard from './TripCard.jsx'
import CreateTrip from './CreateTrip.jsx'

// Needs:
    // Possible stretch goal links with conditionals for sorting trips by date


export default function Trips(props) {
    console.log(props.currentUser);
    // const [trips, setTrips] = useState([])

    const AllTrips = props.currentUser.trips.map((trip, index) => {
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
                <div className="trip-container">
                    {AllTrips}
                    <CreateTrip />
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