export default function ChecklistTool(props) {

  // need to map over info to create checklist items
  const ListItem = props.list.map((item) => {
    return (
      <div>
        <input type="checkbox" id={item}/>
        <label htmlFor={item}>{item}</label>
      </div>
    )
  })

  // Do we want to have update button for checklist, or update as clicked?

  return (
      <div>
          <h1>Hello from ChecklistTool</h1>
          <form action="handleSubmit">
            {ListItem}
          </form>
      </div>
  )
}