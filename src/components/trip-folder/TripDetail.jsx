import { useState } from 'react'
import axios from 'axios'
import ChecklistTool from '../tools/ChecklistTool'
// import ExpenseTool from '../tools/ExpenseTool'
// import FlightTool from '../tools/FlightTool'
// import LodgingTool from '../tools/LodgingTool'
// import NoteTool from '../tools/NoteTool'
// import ScheduleTool from '../tools/ScheduleTool'

export default function TripDetail(props) {
    const [checklist, setChecklist] = useState([])
    console.log(props)
    const handleAddChecklist = async (e) => {
        try {

        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Hello from TripDetail</h1>

            <div className="detail-container">
                
                <div className="detail-header">
                    <h1>{props.currentUser.trips}</h1>
                    
                   
                   
                </div>
                
                <div className="tool-container">
                    <form onSubmit={handleAddChecklist}>
                        <input type="submit" value="Add Trip Checklist"/>
                    </form>
                    <ChecklistTool className="tool"/>
                    {/* <ExpenseTool className="tool"/>
                    <FlightTool className="tool"/>
                    <LodgingTool className="tool"/>
                    <NoteTool className="tool"/>
                    <ScheduleTool className="tool"/> */}
                </div>

            </div>
        </div>
    )
}