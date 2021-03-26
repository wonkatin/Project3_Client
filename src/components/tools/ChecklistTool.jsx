// import { useState } from 'react'

// import axios from 'axios'

export default function ChecklistTool(props) {
  console.log(props.checklist, '⛈')
  const filterClothingAndAccessories = props.checklist.filter(item => item.category === "clothing and accessories")
  const mapClothingAndAccessories = filterClothingAndAccessories.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        <form >
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  const filterToiletries = props.checklist.filter(item => item.category === "toiletries")
  const mapToiletries = filterToiletries.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        <form >
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  const filterMiscellaneous = props.checklist.filter(item => item.category === "miscellaneous")
  const mapMiscellaneous = filterMiscellaneous.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        <form >
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  const filterTodo = props.checklist.filter(item => item.category === "to-do")
  const mapTodo = filterTodo.map((item, index) => {
    return(
      <div key={index}>
        <input type="checkbox"></input>
        <h4>{item.itemName}</h4>
        <form >
          <input type="submit" value="delete"/>
        </form>
      </div>
    )
  })
  // const toiletries
  // const miscellaneous 
  // const toDo

  return (
      <div>
          <h1>Hello from ChecklistTool</h1>
          <div>
          <h2>Clothing and Accessories</h2>
            {mapClothingAndAccessories}
          </div>
          <div>
          <h2>Toiletries</h2>
            {mapToiletries}
          </div>
          <div>
          <h2>Miscellaneous</h2>
            {mapMiscellaneous}
          </div>
          <div>
          <h2>To-do List</h2>
            {mapTodo}
          </div>
          
      </div>
  )
}