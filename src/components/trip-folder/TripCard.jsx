import { Link } from "react-router-dom";

// Need:
  // Figure out how to set DB image as background image.

export default function TripCard(props) {
  // console.log(props.currentUser.id,'✅')
  // console.log(props.tripId, '🌈')
  return(
    <div>

      <Link to={{
        pathname: `/users/${props.currentUser.id}/trips/${props.tripId}`, 
        state: {
          tripId: props.tripId
        }}}
      >
        Show me my trip
      </Link> 
            <div className="trip-card">
              <h2>{props.name}</h2>
              <h4>{props.location}</h4>
              <h4>{props.fromDate}</h4>
              {/* <img src={props.img} alt={props.location}/> */}
            </div>
    </div>
    
  )
}