import { useState } from 'react'
// import axios from 'axios'

export default function NoteTool(props) {
const [newNote, setNewNote] = useState('')

  const handleAddNotes = async (e) => {
      e.preventDefault()
      console.log('delete')
      try {
        // const requestBody = {
        //   title: title,
        //   date: new Date,
        //   content: content
        // }
        //   const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/notes`, requestBody)
      }catch(err){
        console.log(err)
      }
  }

  const handleDeleteNotes = async e => {
    e.preventDefault()
    console.log('delete')
  //  need to figure out what is noteId
  // await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/notes/${noteId}`)
  }


    return(
      <div>
          <form onSubmit={ handleAddNotes } />
          <form>
              <input 
                type="text"
                placeholder="your note" 
                value={newNote}
                onChange={e => setNewNote(e.target.value)}
              />

              {newNote}

              <input type="submit" value="Add"/>
          </form>

          <form onSubmit={ handleDeleteNotes } />
          <form>
            <input type="submit" value="Delete"/>
          </form>
      </div>
  )
}