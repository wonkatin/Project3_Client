import { Link } from "react-router-dom"

export default function TripCard(props) {
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