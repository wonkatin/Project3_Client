import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ExpenseTool(props) {
  const [allExpenses, setAllExpenses] = useState([])
  const [purchase, setPurchase] = useState('')
  const [cost, setCost] = useState('')
  const [date] = useState('')


  const getExpenses = async () => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/tripExpenses`)

      if(response.data.length > 0) {
        const fixMyExpenses = response.data
        let expensesArr = []
        for(const key in fixMyExpenses){
          expensesArr.push(fixMyExpenses[key])
        }
        setAllExpenses(expensesArr)
      }
    }catch(err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getExpenses()
  }, [])

  const handleAddExpenses = async (e) => {
      e.preventDefault()
      console.log('add expense')
      try {
        const requestBody = {
          purchase: purchase,
          cost: cost,
          date: date
        }

        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/tripExpenses`, requestBody)
          getExpenses()
          setPurchase('')
          setCost('')
      } catch(err) {
          console.log(err)
      }
  }

  
  const handleDeleteExpense = async e => {
    try{
      e.preventDefault()
      console.log(e, 'target')
      const tripExpenseId = e.target[1].defaultValue
      const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/trips/${props.tripId}/tripExpenses/${tripExpenseId}`)
      getExpenses()
    }catch(error){
      console.log(error)
    }
  }
  
  const displayAllExpenses = allExpenses.map((expense, index) => {
    const expenseId = expense._id
    console.log(expense._id, 'expense')
    return (
      <div key={index}> 
        <p>{expense.purchase}</p>
        <p>{expense.cost}</p>
          <form onSubmit={ handleDeleteExpense } >
            <input type="submit" value="Delete"/>
            <input className="note-id" type="hidden" value={expenseId}/>
          </form>
      </div>
    )
  })

    return(
      <div className="checklist">
          <form onSubmit={ handleAddExpenses } >
                <input 
                  type="text"
                  placeholder="your purchase" 
                  value={purchase}
                  onChange={e => setPurchase(e.target.value)}
                />

                <input 
                  type="text"
                  placeholder="cost" 
                  value={cost}
                  onChange={e => setCost(e.target.value)}
                />

                <input type="hidden" value={date} />

                <input type="submit" value="Add"/>
            </form>

            {displayAllExpenses}
      </div>
  )
}