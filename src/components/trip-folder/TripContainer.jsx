import CreateTrip from "./CreateTrip"
import Trip from './Trip'

export default function TripContainer(props) {
    // console.log(props.currentUser,'✅');
    return(
        <div>
            <CreateTrip handleLogout={ props.handleLogout } currentUser={ props.currentUser } setCurrentUser={ props.setCurrentUser } />
            <Trip handleLogout={ props.handleLogout } currentUser={ props.currentUser } setCurrentUser={ props.setCurrentUser } />
        </div>
    )
}