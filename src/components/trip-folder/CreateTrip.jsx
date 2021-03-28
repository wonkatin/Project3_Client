import { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default function CreateTrip(props) {

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async (e) => {
    // e.preventDefault() //in purpose to refresh the page!
    try {
      const requestBody = {
        name: name,
        location: location,
        fromDate: fromDate,
        toDate: toDate,
        image: image
      }
  
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips`, requestBody)
    } catch (error) {
      console.log(error);
    }
  }

  return(


      <div className="create-trip">
          <h4>Add a New Trip</h4>
          <form onSubmit={handleSubmit} className="new-trip-form">
            <div>
              <label htmlFor="trip-name-input">Trip Name</label>
            <input 
              type="text"
              id="trip-name-input"
              placeholder="ex. '30th Birthday Trip'"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="location-input">Location</label>
            <input 
              type="text"
              id="location-input"
              placeholder="ex. 'Hawaii'"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="from-date-input">Start Date</label>
            <input
              type="text"
              id="from-date-input"
              placeholder="mm/dd/yy"
              value={fromDate}
              onChange={e => setFromDate(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="to-date-input">End Date</label>
            <input
              type="text"
              id="to-date-input"
              placeholder="mm/dd/yy"
              value={toDate}
              onChange={e => setToDate(e.target.value)}
            />
            </div>
            
            {/* <label htmlFor="image-input">Image</label>
            <input
              type="text"
              id="image-input"
              placeholder="Image"
              value={image}
              onChange={e => setImage(e.target.value)}
            /> */}
            <div>
              <p></p>
              <input type="submit" value="Create"/>
            </div>
          </form>
      </div>
  )
}