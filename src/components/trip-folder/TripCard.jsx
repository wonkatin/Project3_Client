import { BrowserRouter as Router, Link } from "react-router-dom";

// Need:
  // Figure out how to set DB image as background image.

export default function TripCard(props) {
  console.log(props,'✅')
  return(
      // <Link to={`/users/${props.currentUser.id}/trips/${props.currentUser.trips.tripId}`}>
            <div className="trip-card">
              <h2>{props.name}</h2>
              <h4>{props.location}</h4>
              <h4>{props.fromDate}</h4>
              <img src={props.img} alt={props.location}/>
            </div>
      // {/* </Link> */}
    
  )
}