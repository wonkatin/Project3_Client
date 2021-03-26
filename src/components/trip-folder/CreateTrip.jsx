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


      <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="trip-name-input">Trip Name</label>
            <input 
              type="text"
              id="trip-name-input"
              placeholder="Trip Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="location-input">Location</label>
            <input 
              type="text"
              id="location-input"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <label htmlFor="from-date-input">From Date</label>
            <input
              type="text"
              id="from-date-input"
              placeholder="From Date"
              value={fromDate}
              onChange={e => setFromDate(e.target.value)}
            />
            <label htmlFor="to-date-input">To Date</label>
            <input
              type="text"
              id="to-date-input"
              placeholder="To Date"
              value={toDate}
              onChange={e => setToDate(e.target.value)}
            />
            <label htmlFor="image-input">Image</label>
            <input
              type="text"
              id="image-input"
              placeholder="Image"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
            <input type="submit"/>
          </form>
      </div>
  )
}