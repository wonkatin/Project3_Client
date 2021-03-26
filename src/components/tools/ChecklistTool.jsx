// import { useState } from 'react'
import checklistData from './checklistData'
// import axios from 'axios'

export default function ChecklistTool(props) {
  console.log(checklistData, '⛈')
  const list = checklistData.data.map((item, index) => {
    return(
      <div key={index}>
        <h4>{item.itemName}</h4>
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