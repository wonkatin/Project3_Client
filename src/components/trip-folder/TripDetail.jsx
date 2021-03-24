import ChecklistTool from '../tools/ChecklistTool'
import ExpenseTool from '../tools/ExpenseTool'
import FlightTool from '../tools/FlightTool'
import LodgingTool from '../tools/LodgingTool'
import NoteTool from '../tools/NoteTool'
import ScheduleTool from '../tools/ScheduleTool'




export default function TripDetail(props) {
    return(
        <div>
            <h1>Hello from TripDetail</h1>

            <div className="detail-container">
                
                <div className="detail-header">
                    <h1>{props.trip.city}</h1> {/* Is this correct? */}
                    <h5>{props.trip.date}</h5> {/* Is this correct? Is there a way to display as just year & month? */}
                </div>
                
                <div className="tool-container">
                    <ChecklistTool className="tool"/>
                    <ExpenseTool className="tool"/>
                    <FlightTool className="tool"/>
                    <LodgingTool className="tool"/>
                    <NoteTool className="tool"/>
                    <ScheduleTool className="tool"/>
                </div>

            </div>
        </div>
    )
}