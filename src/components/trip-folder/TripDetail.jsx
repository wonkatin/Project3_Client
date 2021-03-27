import { useState, useEffect } from 'react'
import axios from 'axios'
import checklistData from '../tools/checklistData'
import ChecklistTool from '../tools/ChecklistTool'
import NoteTool from '../tools/NoteTool'
// import ExpenseTool from '../tools/ExpenseTool'
// import FlightTool from '../tools/FlightTool'
// import LodgingTool from '../tools/LodgingTool'
// import ScheduleTool from '../tools/ScheduleTool'

export default function TripDetail(props) {
    const [checklist, setChecklist] = useState([])
    const [handleAddNoteClick, setHandleAddNoteClick] = useState(false)
    const [handleAddChecklistClick, setHandleAddChecklistClick] = useState(false)

    // const [allTrips, setAllTrips] = useState([])
    // const [itemName, setItemName] = useState('')
    // const [checked, setChecked] = useState(false)
    // const [category, setCategory] = useState('')
    const incomingChecklist = checklistData.data

    useEffect(() => {
        console.log(props.location, '🟣')
 
    }, [])

    console.log(props.location, '🐷')

    const handleAddChecklist = async (e) => {
        try {
            e.preventDefault()
            setHandleAddChecklistClick(true)
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/tripChecklist`, {incomingChecklist})
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/tripChecklist`)
            console.log(response.data[0].items, '🤠')
            const data = response.data[0].items
            
            // const fixMyChecklist = response.data.items
            // let checklistArray = [];
            // for(const key in fixMyChecklist) {
            //     checklistArray.push(fixMyChecklist[key])
            // }


            setChecklist(data)
            console.log(checklist, 'checklist🦊')

        } catch (error) {
            console.log(error)
        }
    }
    // console.log(props.location.state.notes[0], '😻')
    console.log(checklist, '🤯')
    

    const handleAddNote = async e => {
        e.preventDefault()
        try{
            setHandleAddNoteClick(true)
        }catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
            <h1>Hello from TripDetail</h1>

             <div className="detail-container">
                
                <div className="detail-header">
                    <h1>{props.location.state.name}</h1>
                    <h4>{props.location.state.location}</h4>
                    <h4>{props.location.state.fromDate} - {props.location.state.toDate}</h4>
                   
                </div>
                
                <div className="tool-container">
                    {!props.location.state.tripChecklist[0] && !handleAddChecklistClick ?
                        <form onSubmit={handleAddChecklist}>
                            <input type="submit" value="Add Trip Checklist"/>
                            <input type="hidden"/>
                        </form>
                    :

                    <ChecklistTool className="tool" 
                        tripChecklist={ props.location.state.tripChecklist[0].items }/>

                    }


                    {!props.location.state.notes[0] && !handleAddNoteClick ?
                        <form onSubmit={handleAddNote}>
                            <input type="submit" value="Add notes about your Trip"/>
                             <input type="hidden"/>
                      </form>
                    :

                    <NoteTool tripnote={ props.location.state.notes } />

                    }
                    
                </div>

            </div> 
        </div>
    )
}