// import { useState } from 'react'
import checklistData from './checklistData'
// import axios from 'axios'

export default function ChecklistTool(props) {
  console.log(checklistData, '⛈')
  const list = checklistData.data.map((item, index) => {
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
  return (
      <div>
          <h1>Hello from ChecklistTool</h1>
         {list}
      </div>
  )
}