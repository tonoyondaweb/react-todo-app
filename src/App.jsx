import { useState } from 'react'
import { nanoid } from 'nanoid'

// component imports
import Header from './components/Header'
import Nav from './components/Nav'
import TodoItem from './components/TodoItem'

export default function App() {

  //State definitions
  const [inputEl, setInputEl] = useState(false)
  const [input, setInput] = useState({
    text: "",
    completed: false
  })
  const [list, setList] = useState([])
  const [currentTab, setCurrentTab] = useState("active")

  //Functions
  function displayInputField() { //Function to render the input text box
    setInputEl(prevState => !prevState)
  }

  function handleInput(event) { //Function to handle input changes
    const { name, type, value, checked } = event.target
    const inputValue = type === "checkbox" ? checked : value
    
    setInput({
      [name]: inputValue
    })
  }

  function addItem(event) {
    const input = event.target.value
    const id = nanoid()
    setList(prevState => {
      return (
       [ ...prevState,
        {
          id: nanoid(),
          text: input,
          completed: false
        }]
      )
    })
    setInput(prevState => ({...prevState, text: ''}))
    setInputEl(false)
  }

  function check(id) {
    setList(prevState => {
      return prevState.map(item => {
        if(item.id === id){
          return ({
            ...item,
            completed: !item.completed
          })
        }
        else{
          return ({
            ...item
          })
        }
      })
    })
  }

  function changeTab(tab) {
    setCurrentTab(tab)
  }
  //rendering to-do list items
  const allItems = list.map(item => {
    const check = item.completed ? true : false
    return <TodoItem key={item.id} id={item.id} text={item.text} checked={check} handleChange={handleInput} handleClick={check} />
  })

  const activeItems = []
  const completedItems = []

  list.forEach(item => {
    item.completed ?
    completedItems.push(
      <TodoItem key={item.id} id={item.id} text={item.text} checked={true} handleChange={handleInput} handleClick={check} />
    ) :
    activeItems.push(
      <TodoItem key={item.id} id={item.id} text={item.text} checked={false} handleChange={handleInput} handleClick={check} />
    )
  })


  return (
    <div className="app">
      <div className="main-container">
        <Header handleClick={displayInputField} />
        <ul className="items">
          {currentTab === "active" && (
            activeItems.length > 0 ? activeItems : 
            <p className="alert">You are all caught up :)</p>
          )}
          {currentTab === "completed" && (
            completedItems.length > 0 ? completedItems : 
            <p className="alert">No tasks completed :(</p>
          )}
          {currentTab === "all" && (
            allItems.length > 0 ? allItems : 
            <p className="alert">No items :(</p>
          )}
          {/* {currentTab === "completed" && completedItems}
          {currentTab === "all" && allItems} */}
        </ul>
        {
          inputEl &&
          <input
            type="text"
            className="text-input"
            placeholder="Add task"
            name="text"
            onChange={handleInput}
            onKeyPress={(event) => event.key === "Enter" && addItem(event)}
            value={input.text}
            autoComplete="off"
            autoFocus
          />
        }
        <Nav handleClick={changeTab} />
      </div>
    </div>
  )
}