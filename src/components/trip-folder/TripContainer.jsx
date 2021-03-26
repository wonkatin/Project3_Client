import CreateTrip from "./CreateTrip"
import Trip from './Trip'

export default function TripContainer(props) {
    // console.log(props.currentUser,'✅');
    return(
        <div className="background-trips">
            <h1>My Trips</h1>
            <CreateTrip handleLogout={ props.handleLogout } currentUser={ props.currentUser } setCurrentUser={ props.setCurrentUser } />
            <Trip handleLogout={ props.handleLogout } currentUser={ props.currentUser } setCurrentUser={ props.setCurrentUser } tripId={ props.tripId } setTripId={ props.setTripId } />
        </div>
    )
}