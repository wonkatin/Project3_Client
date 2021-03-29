import { useState, useEffect } from 'react'
import axios from 'axios'
import checklistData from '../tools/checklistData'
import ChecklistTool from '../tools/ChecklistTool'
import NoteTool from '../tools/NoteTool'
import { Link } from 'react-router-dom'


export default function TripDetail(props) {
 
    const [checklist, setChecklist] = useState([])
    const [handleAddChecklistClick, setHandleAddChecklistClick] = useState(false)
    //checking if there is a checklist
    const [hasTripChecklist, setHasTripChecklist] = useState(false)
    
    const [handleAddNoteClick, setHandleAddNoteClick] = useState(false)

    const [tripChecklistId, setTripChecklistId] = useState('')
    //from checklistData.js file
    const incomingChecklist = checklistData.data
    
    
    const getList = async() => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/tripChecklist`)
        
            if(response.data.length > 0) {
                setHasTripChecklist(true)
                setTripChecklistId(response.data[0]._id)
                const fixMyChecklist = response.data[0].items
                let checklistArray = [];
                for(const key in fixMyChecklist){
                    checklistArray.push(fixMyChecklist[key])
                }
                setChecklist(checklistArray)
            }
            
        } catch (error) { 
            console.log(error)
        }
    }
    useEffect(() => {
        if(props.location.state.tripChecklist > 0 ) {
            setTripChecklistId(props.location.state.tripChecklist[0]._id)
            setChecklist(props.location.state.tripChecklist[0].items)
        }
        
    }, [checklist, hasTripChecklist, props.location.state.tripChecklist])

    useEffect(() => {
        getList()
    }, [])



    const handleAddChecklist = async (e) => {
        try {
            e.preventDefault()
            setHasTripChecklist(true)
            setHandleAddChecklistClick(true)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/tripChecklist`, {incomingChecklist})
            const fixMyChecklist = response.data.items
            let checklistArray = [];
            for(const key in fixMyChecklist) {
                checklistArray.push(fixMyChecklist[key])
            }

            setChecklist(checklistArray)
            setTripChecklistId(response.data._id)

        } catch (error) {
            console.log(error)
        }
       
    }
    
    
    const handleAddNote = async e => {
        e.preventDefault()
        try{
            setHandleAddNoteClick(true)
        }catch (error) {
            console.log(error)
        }
    }

    // delete trip
    const handleDelete = async (e) => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}`)

        } catch (error) {
            console.log(error)
        }
        
    }
    

    return(
        <div className="background-trips">
            <div className="detail-container">
                
                <div className="detail-header">
                    <h1>{props.location.state.name}</h1>
                    <h3>{props.location.state.location}</h3>
                    <h4>{props.location.state.fromDate} - {props.location.state.toDate}</h4>
                   
                </div>
                
                <div className="tool-container">
                    <div className="left-tool-field">
                        {!props.location.state.tripChecklist[0] && !handleAddChecklistClick ?
                            <form onSubmit={handleAddChecklist}>
                                <input type="submit" value="Add Trip Checklist"/>
                                <input type="hidden"/>
                            </form>
                        :
                        
                        <ChecklistTool className="tool"
                            tripId={ props.location.state.tripId }
                            img={ props.location.state.img }
                            name={ props.location.state.name }
                            location={ props.location.state.location }
                            fromDate={ props.location.state.fromDate }
                            toDate={ props.location.state.toDate }
                            tripChecklist={ checklist }
                            tripChecklistId= { tripChecklistId }
                            tripExpenses={ props.location.state.tripExpenses }
                            notes={ props.location.state.notes }
                            tripSchedule={ props.location.state.tripSchedule }
                            lodgingInfo={ props.location.state.lodgingInfo }
                            flightInfo={ props.location.state.flightInfo }
                            handleLogout={ props.handleLogout } 
                            currentUser={ props.currentUser } 
                            setCurrentUser={ props.setCurrentUser } 
                        />

                        }
                    </div>

                    <div className="right-tool-field">
                        {!props.location.state.notes[0] && !handleAddNoteClick ?
                            <form onSubmit={handleAddNote}>
                                <input type="submit" value="Add notes about your Trip"/>
                                <input type="hidden"/>
                        </form>
                        :

                        <NoteTool 
                            tripId={ props.location.state.tripId }
                            img={ props.location.state.img }
                            name={ props.location.state.name }
                            location={ props.location.state.location }
                            fromDate={ props.location.state.fromDate }
                            toDate={ props.location.state.toDate }
                            tripChecklist={ props.location.state.tripChecklist }
                            tripExpenses={ props.location.state.tripExpenses }
                            notes={ props.location.state.notes }
                            tripSchedule={ props.location.state.tripSchedule }
                            lodgingInfo={ props.location.state.lodgingInfo }
                            flightInfo={ props.location.state.flightInfo }
                            handleLogout={ props.handleLogout } 
                            currentUser={ props.currentUser } 
                            setCurrentUser={ props.setCurrentUser } 
                        />

                        }
                    </div>
                    
                </div>

                <div className="delete-trip">
                    <Link to={`/users/${props.currentUser.id}/trips`} className="button" onClick={ handleDelete } >
                        Delete Trip
                    </Link>
                </div>

            </div> 
        </div>
    )
}