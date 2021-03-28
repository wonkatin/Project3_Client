import axios from 'axios'
import { useState } from 'react'
// import axios from 'axios'

export default function ChecklistTool(props) {
  
  // console.log(props, '⛈')

  //set state for adding a new item to the checklist
  const [category, setCategory] = useState('')
  const [checked] = useState(false)
  const [itemName, setItemName] = useState('')

  const handleAddItem = async (e) => {
    try {
      e.preventDefault()
      const requestBody = {
        itemName: itemName,
        checked: checked,
        category: category
      }
      // const rememberCurrentUser = {
      //   id: props.currentUser.id,
      //   username: props.currentUser.username,
      //   email: props.currentUser.email,
      //   firstName: props.currentUser.firstName,
      //   lastName: props.currentUser.lastName,
      //   city: props.currentUser.city
      // }
        
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/tripChecklist/${props.tripChecklistId}`, requestBody)
      // setCurrentUser(rememberCurrentUser)
    } catch(error) {
        console.log(error)
    }
  }


  // handleSubmit = e => {
  //   e.preventDefault()
  //   console.log(itemName)
  // const newClothAndAcc = [...mapClothingAndAccessories, setNewIem] ?????
  // }

  // console.log(props)
  // console.log(props.checklist)
  // console.log(props.checklist.id)
  // console.log(props.checklist._id)
                  //    NEED to find :tripChecklistId and :itemId to hit delete route (trying to console.log it, but getting undefined)
  // handleDelete = e => {
  //   e.preventDefault()
  //   await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.location.state.tripId}/tripChecklist/:tripChecklistId/items/:itemId`)
  // }


  
  const newChecklistArray = props.tripChecklist
  const filterClothingAndAccessories = newChecklistArray.filter(item => item.category === "clothing and accessories")
  const mapClothingAndAccessories = filterClothingAndAccessories.map((item, index) => {
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        {/* <form onSubmit={handleDelete}> */}
        <form>
          <input type="submit" value="x" className="delete-x"/>
        </form>
      </div>
    )
  })
  const filterToiletries = newChecklistArray.filter(item => item.category === "toiletries")
  const mapToiletries = filterToiletries.map((item, index) => {
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        {/* <form onSubmit={handleDelete}> */}
        <form>
          <input type="submit" value="x" className="delete-x"/>
        </form>
      </div>
    )
  })
  const filterMiscellaneous = newChecklistArray.filter(item => item.category === "miscellaneous")
  const mapMiscellaneous = filterMiscellaneous.map((item, index) => {
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        {/* <form onSubmit={handleDelete}> */}
        <form>
          <input type="submit" value="x" className="delete-x"/>
        </form>
      </div>
    )
  })
  const filterTodo = newChecklistArray.filter(item => item.category === "to-do")
  const mapTodo = filterTodo.map((item, index) => {
    return(
      <div key={index} className="list-item">
        <input type="checkbox"></input>
        <p>{item.itemName}</p>
        <form >
          <input type="submit" value="x" className="delete-x"/>
        </form>
      </div>
    )
  })
  // const toiletries
  // const miscellaneous 
  // const toDo

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


      