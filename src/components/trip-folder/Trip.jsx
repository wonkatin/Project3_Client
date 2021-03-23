import { RouterBrowser as Router, Link } from 'react-router-dom'
import TripCard from './TripCard.jsx'

export default function Trips() {
    return(
        <div class="background-trips"> {/* Need to add Router Tags */}
            <h1>My Trips</h1>
            <div class="upcoming-links">
                <a href="">All Trips</a> {/* Need to add Link */}
                <a href="">Upcoming Trips</a> {/* Need to add Link */}
                <a href="">Past Trips</a> {/* Need to add Link */}
            </div>
            <div class="trip-container">
                <TripCard /> {/* Need to map DB trips here as TripCards */}
            </div>
        </div>
    )
}


