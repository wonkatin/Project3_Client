import { Link } from 'react-router-dom'

export default function TripCard(props) {
  return(
    <div> {/* Need to add Router tags */}
        <a href="./trip-details.html"> {/* Need Link here */}
          <div class="trip-card">
            <h2>{props.trips.city}</h2> {/* Is this correct? */}
            <h4>{props.trips.date}</h4> {/* Is this correct? Is there a way to display as just year & month? */}
          </div>
        </a>
    </div>
  )
}