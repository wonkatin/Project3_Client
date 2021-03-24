import { RouterBrowser as Router, Switch } from 'react-router-dom'
import CreateTrip from './CreateTrip'
import TripDetail from './TripDetail'

// Needs:
    // Condition that displays either CreateTrip component if no trip id is found
    // OR displays TripDetail if id is found

export default function TripContainer() {
  return(
    <Router>
      <div>
          <CreateTrip />
          <TripDetail />
      </div>
    </Router>
  )
}






