import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NoteTool(props) {
const [allNotes, setAllNotes] = useState([])
const [content, setContent] = useState('')
const [title, setTitle] = useState('')
const [date, setDate] = useState('')
const [noteId, setNoteId] = useState('')

const getNotes = async () => {
  try{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes`)
    //  console.log(response.data._id, "😇")
    //  setNoteId(response.data._id)

    if(response.data.length > 0) {
      const fixMyNotes = response.data
      // const noteId = response.data._id
      let notesArr = []
      for(const key in fixMyNotes){
        notesArr.push(fixMyNotes[key])
      }
      console.log('🦋', fixMyNotes)
      setAllNotes(notesArr)
      // console.log('🌸', allNotes)
    }
  }catch(err) {
    console.log(err)
  }
}
console.log('🌸', allNotes)

useEffect(() => {
  getNotes()
}, [])


  const handleAddNotes = async (e) => {
      e.preventDefault()
      try {
        const requestBody = {
          _id: noteId,
          content: content,
          title: title,
          date: date
        }

  // console.log(requestBody, "🤟🏼")
  
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes`, requestBody)
          getNotes()
          setContent('')
        }catch(err){
          console.log(err)
        }
  }

  const displayAllNotes = allNotes.map((note, index) => {
    return (
      <div key={index}> 
        <p>{note.content}</p>
          {/* <form onSubmit={ handleDeleteNotes } >
            <input type="submit" value="Delete"/>
          </form> */}
      </div>
    )
  })
  
  console.log(displayAllNotes, '✅')

  // const handleDeleteNotes = async e => {
  //   try{
  //     e.preventDefault()
  //     const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/notes/${nd}`)
  //     // console.log(response, 'response')
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

    return(
      <div>
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