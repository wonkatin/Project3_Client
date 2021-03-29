import { useState } from 'react'
import axios from 'axios'

export default function NoteTool(props) {
  const [allNotes, setAllNotes] = useState([])
  const [content, setContent] = useState('')
  const [title] = useState('')
  const [date] = useState('')


  const getNotes = async () => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes`)

      if(response.data.length > 0) {
        const fixMyNotes = response.data
        let notesArr = []
        for(const key in fixMyNotes){
          notesArr.push(fixMyNotes[key])
        }
        setAllNotes(notesArr)
      }
    }catch(err) {
      console.log(err)
    }
  }


  // useEffect(() => {
  //   getNotes()
  // }, [])

  const handleAddNotes = async (e) => {
      e.preventDefault()
      try {
        const requestBody = {
          content: content,
          title: title,
          date: date
        }

        await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes`, requestBody)
          getNotes()
          setContent('')
      } catch(err) {
          console.log(err)
      }
  }

  
  const handleDeleteNotes = async e => {
    try{
      e.preventDefault()
      console.log(e, 'target')
      const noteId = e.target[1].defaultValue
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes/${noteId}`)
      getNotes()
    }catch(error){
      console.log(error)
    }
  }
  
  const displayAllNotes = allNotes.map((note, index) => {
    const noteId = note._id
    console.log(note._id, 'note')
    return (
      <div key={index} className="note-item"> 
        <p>{note.content}</p>
          <form onSubmit={ handleDeleteNotes } >
            <input type="submit" value="delete" className="delete-note" />
            <input className="note-id" type="hidden" value={noteId}/>
          </form>
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
      </div>
  )
}
