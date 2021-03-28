import { Link } from "react-router-dom";

// Need:
  // Figure out how to set DB image as background image.

export default function TripCard(props) {
  console.log(props,'✅')
  // console.log(props.tripId, '🌈')
  // console.log(props.location, '🟣')
  return(
    <div>
      <Link to={{
        pathname: `/users/${props.currentUser.id}/trips/${props.tripId}`, 
        state: {
          tripId: props.tripId,
          name: props.name,
          location: props.location,
          fromDate: props.fromDate,
          toDate: props.toDate,
          // pullData: props.pullData,
          tripChecklist: props.tripChecklist,
          tripExpenses: props.tripExpenses,
          notes: props.notes,
          tripSchedule: props.tripSchedule,
          lodgingInfo: props.lodgingInfo,
          flightInfo: props.flightInfo
        }}}
      >
        {/* Show me my trip */}
            <div className="trip-card">
              <h2>{props.name}</h2>
              <h4>{props.location}</h4>
              <h5>{props.fromDate}</h5>
              {/* <img src={props.img} alt={props.location}/> */}
            </div>
      </Link> 
    </div>
    
  )
}