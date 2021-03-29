import axios from 'axios'
import { useState, useEffect } from 'react'
// import axios from 'axios'

export default function ChecklistTool(props) {

  //set state for adding a new item to the checklist
  const [category, setCategory] = useState('')
  const [checked] = useState(false)
  const [itemName, setItemName] = useState('')
  const [tripId, setTripId] = useState('')
  const [tripChecklistId, setTripChecklistId] = useState('')
  // const [tripChecklist, setTripChecklist] = useState([])
  // console.log(tripChecklist)
  useEffect(() => {
    setTripId(props.tripId)
    setTripChecklistId(props.tripChecklistId)
    // setTripChecklist(props.tripChecklist)
  }, [props.tripChecklist, props.tripChecklistId, props.tripId])

  
  
  const handleAddItem = async (e) => {
    try {
      e.preventDefault()
      const requestBody = {
        itemName: itemName,
        checked: checked,
        category: category,
        tripId: tripId,
        tripChecklistId: tripChecklistId
      }
     
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/tripChecklist/${props.tripChecklistId}`, requestBody)
      console.log(response, "🌶")
    } catch(error) {
        console.log(error)
    }
  }

  const handleDeleteItem = async (e) => {
    try{

    } catch(error) {
      console.log(error)
    }
    e.preventDefault()
    const itemId = e.target[1].defaultValue
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/tripChecklist/${props.tripChecklistId}/items/${itemId}`)
  }


  
  const newChecklistArray = props.tripChecklist

  const filterClothingAndAccessories = newChecklistArray.filter(item => item.category === "clothing and accessories")
  const mapClothingAndAccessories = filterClothingAndAccessories.map((item, index) => {
    const itemId = item._id
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        <form onSubmit={handleDeleteItem} >
          <input type="submit" value="x" className="delete-x"/>
          <input className="item-index" type="hidden" value={itemId}/>
        </form>
      </div>
    )
  })
  const filterToiletries = newChecklistArray.filter(item => item.category === "toiletries")
  const mapToiletries = filterToiletries.map((item, index) => {
    const itemId = item._id
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        <form onSubmit={handleDeleteItem} >
          <input type="submit" value="x" className="delete-x"/>
          <input className="item-index" type="hidden" value={itemId}/>
        </form>
      </div>
    )
  })
  const filterMiscellaneous = newChecklistArray.filter(item => item.category === "miscellaneous")
  const mapMiscellaneous = filterMiscellaneous.map((item, index) => {
    const itemId = item._id
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        <form onSubmit={handleDeleteItem} >
          <input type="submit" value="x" className="delete-x"/>
          <input className="item-index" type="hidden" value={itemId}/>
        </form>
      </div>
    )
  })
  const filterTodo = newChecklistArray.filter(item => item.category === "to-do")
  const mapTodo = filterTodo.map((item, index) => {
    const itemId = item._id
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        <form onSubmit={handleDeleteItem} >
          <input type="submit" value="x" className="delete-x"/>
          <input className="item-index" type="hidden" value={itemId}/>
        </form>
      </div>
    )
  })

  return (
    <div className="checklist">
      <form onSubmit={handleAddItem}>
        <label htmlFor='item-input'>Add item to checklist </label>

        <input
            id='item-input'
            type='text'
            placeholder='add an item'
            onChange={e => setItemName(e.target.value)}
            value={itemName}
        />
        <input type="hidden"
          value={checked}
        />
        <input
            type="submit"
            value="Add"
        />

        <div>
          <label className="label">Category </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              >
              <option disabled="disabled" value="" className="is-hidden">Select One</option>
              <option value="clothing and accessories">Clothing and Accessories</option>
              <option value="toiletries">Toiletries</option>
              <option value="miscellaneous">Miscellaneous</option>
              <option value="to-do">To-do List</option>
            </select>
        </div>
      </form>
      <h2>Checklist ✔️</h2>
      <div className="category-container">
      <h4>Clothing and Accessories</h4>
        <div className="list-container">
          {mapClothingAndAccessories}
        </div>
      </div>
      <div className="category-container">
      <h4>Toiletries</h4>
        <div className="list-container">
          {mapToiletries}
        </div>
      </div>
      <div className="category-container">
      <h4>Miscellaneous</h4>
        <div className="list-container">
          {mapMiscellaneous}
        </div>
      </div>
      <div className="category-container">
      <h4>To-do List</h4>
        <div className="list-container">
          {mapTodo}
        </div>
      </div>
        
    </div>
  )
}


      