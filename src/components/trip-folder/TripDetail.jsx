import { useState } from 'react'
import axios from 'axios'
import checklistData from '../tools/checklistData'
import ChecklistTool from '../tools/ChecklistTool'
// import ExpenseTool from '../tools/ExpenseTool'
// import FlightTool from '../tools/FlightTool'
// import LodgingTool from '../tools/LodgingTool'
// import NoteTool from '../tools/NoteTool'
// import ScheduleTool from '../tools/ScheduleTool'

export default function TripDetail(props) {
    const [checklist, setChecklist] = useState([])
    // const [itemName, setItemName] = useState('')
    // const [checked, setChecked] = useState(false)
    // const [category, setCategory] = useState('')
    const incomingChecklist = checklistData.data
    console.log(incomingChecklist, '🤯')
    console.log(props)
    const handleAddChecklist = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/tripChecklist`, {incomingChecklist})
            console.log(typeof response.data.items, '😻')
            const fixMyChecklist = response.data.items
            let checklistArray = [];
            for(const key in fixMyChecklist) {
                checklistArray.push(fixMyChecklist[key])
            }
            setChecklist(checklistArray)

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
                        <input type="hidden"/>
                    </form>
                    {/* <form >
                        <input type="submit" value="Add Trip Expenses"/>
                    </form> */}
                    {/* add conditional rendering for if tool exists in state */}
                    <ChecklistTool className="tool" checklist={ checklist }/>
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