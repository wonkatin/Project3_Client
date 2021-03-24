import CreateTrip from './CreateTrip'
import TripDetail from './TripDetail'

// Needs:
    // Condition that displays either CreateTrip component if no trip id is found
    // OR displays TripDetail if id is found

export default function TripContainer(props) {
  return(
    <div>
        if(props.currentUser.trips._id) {
        <TripDetail />
        } else {
        <CreateTrip />
        }
    </div>
  )
}






