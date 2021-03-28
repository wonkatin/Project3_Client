import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NoteTool(props) {
const [allNotes, setAllNotes] = useState([])
const [content, setContent] = useState('')
const [title, setTitle] = useState('')
const [date, setDate] = useState('')

const getNotes = async () => {
  try{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes`)
    console.log('🦋', response.data)

    if(response.data.length > 0) {
      const fixMyNotes = response.data
      let notesArr = []
      for(const key in fixMyNotes){
        notesArr.push(fixMyNotes[key])
      }
      setAllNotes(notesArr)

      console.log(notesArr, '🐼, notesArr')
    }
    
  }catch(err) {
    console.log(err)
  }
  }

useEffect(() => {
  getNotes()
}, [])

console.log(allNotes, '🐶, AllNotes')

  const handleAddNotes = async (e) => {
      e.preventDefault()
      console.log('add note')
      try {
        const requestBody = {
          content: content,
          title: title,
          date: date
        }
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes`, requestBody)
          getNotes()
          setContent('')
        }catch(err){
          console.log(err)
        }
      }

  const handleDeleteNotes = async e => {
    e.preventDefault()
    console.log('delete note')
  //  need to figure out what is noteId
  // await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/notes/${noteId}`)
  }

  const displayAllNotes = allNotes.map((note, index) => {
    return (
      <div key={index}> 
        <p>- {note.content}</p>
      </div>
    )
  })
 

    return(
      <div className="checklist">
          <form onSubmit={ handleAddNotes } >
                <input 
                  type="text"
                  placeholder="your note" 
                  value={content}
                  onChange={e => setContent(e.target.value)}
                />

                <input type="hidden" value={title} />
                <input type="hidden" value={date} />

                <input type="submit" value="Add"/>
            </form>

            {displayAllNotes}

          <form onSubmit={ handleDeleteNotes } >
            <input type="submit" value="Delete"/>
          </form>
      </div>
  )
}