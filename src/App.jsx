import { useState } from 'react'
import { nanoid } from 'nanoid'

// component imports
import Header from './components/Header'
import Nav from './components/Nav'
import TodoItem from './components/TodoItem'

export default function App() {

  const [inputEl, setInputEl] = useState(false)
  const [list, setList] = useState([
    {
      text: "Get strawberries",
      completed: false
    },
    {
      text: "Push the bug fix for the quiz app",
      completed: false
    }
  ])

  function displayInput() {
    setInputEl(prevState => !prevState)
  }

  const toDoItems = list.map(item => {
    const id = nanoid()
    return <TodoItem key={id} text={item.text} completed={item.completed} />
  })

  return (
    <div className="app">
      <div className="main-container">
        <Header handleClick={displayInput} />
        <ul className="items">
          {toDoItems}
        </ul>
        {inputEl &&  <input type="text" className="text-input" placeholder="Add task"/>}
        <Nav />
      </div>
    </div>
  )
}