import { useState } from 'react'

export default function CreateTrip(props) {

  const [tripName, setTripName] = useState('')
  const [location, setLocation] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Need to figure out how to add info to database from here.
  }

  const handleChange = e => {
    setTripName(e.target.value),
    setLocation(e.target.value),
    setFromDate(e.target.value),
    setToDate(e.target.value),
    setImage(e.target.value)
  }

  return(


      <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="trip-name-input">Trip Name</label>
            <input 
              type="text"
              id="trip-name-input"
              placeholder="Trip Name"
              value={tripName}
              onChange={handleChange}
            />
            <label htmlFor="location-input">Location</label>
            <input 
              type="text"
              id="location-input"
              placeholder="Location"
              value={location}
              onChange={handleChange}
            />
            <label htmlFor="from-date-input">From Date</label>
            <input
              type="text"
              id="from-date-input"
              placeholder="From Date"
              value={fromDate}
              onChange={handleChange}
            />
            <label htmlFor="to-date-input">To Date</label>
            <input
              type="text"
              id="to-date-input"
              placeholder="To Date"
              value={toDate}
              onChange={handleChange}
            />
            <label htmlFor="image-input">Image</label>
            <input
              type="text"
              id="image-input"
              placeholder="Image"
              value={image}
              onChange={handleChange}
            />
            <input type="submit"/>
          </form>
      </div>
  )
}