import './App.css'
import 'todomvc-app-css/index.css'
import { mockTodos } from './mocks/todo'
import { useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { Todo } from './types'


enum FILTER {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterTodos, setFilter] = useState(todos)
  const [filterSelected, setFilterSelected] = useState(FILTER.ALL)
  const filterEvent = (): void => {
    if (filterSelected === FILTER.ALL) { setFilter(todos) } else if (filterSelected === FILTER.ACTIVE) { setFilter(todos.filter(item => !item.completed)) } else if (filterSelected === FILTER.COMPLETED) { setFilter(todos.filter(item => item.completed)) }
  }

  const handleClick = (id: string): void => {

    const newTodos = todos.filter(i => i.id != id)

    setTodos(newTodos)
  }

  const onCheckClick = (id:string): void => {
    const index = todos.findIndex(t => id === t.id)
    const newTodos = [...todos]
    newTodos[index].completed = true
    setTodos(newTodos)
  }

  const removeCompleted= () => {
  
    console.log("ENTRAMOS")
    setTodos(todos.filter(todo=> !todo.completed))
  }

  useEffect(() => {
    
    filterEvent()
  }, [filterSelected, todos])

  const addTodo = () => {

    const newTask: Todo = {
      completed: false,
      title: inputValue,
      id: `${todos.length}`
    }
    const newTodos = [...todos,newTask]

    setTodos(newTodos)
  }
  const [inputValue,setInputValue] = useState('')
  
  const countCompleted = todos.filter(todo=> todo.completed).length
  return (
    <div className='todoapp'>
      <header className='header'>
        <h1>Todo</h1>

        <input onChange={(event)=>{setInputValue(event.target.value)}} className='new-todo' value={inputValue}  />
          <button  onClick={addTodo} type='submit' >Add Todo</button>

      </header>
      <Todos todos={filterTodos} handleClick={handleClick} onCheckClick={onCheckClick} />
      <footer className='footer'>
        <span className='todo-count'><strong>{todos.filter(todo => !todo.completed).length} tareas pendientes</strong></span>
        <ul className='filters'>
          <li onClick={() => { setFilterSelected(FILTER.ALL) }}><a className={filterSelected === FILTER.ALL ? 'selected': ''}>All</a></li>
          <li onClick={() => { setFilterSelected(FILTER.ACTIVE) }}><a className={filterSelected === FILTER.ACTIVE ? 'selected' : ''}>Active</a></li>
          <li onClick={() => { setFilterSelected(FILTER.COMPLETED) }}><a className={filterSelected === FILTER.COMPLETED ? 'selected' : ''}>COMPLETED</a></li>
        </ul>

        {countCompleted > 0 && <button className='clear-completed' onClick={removeCompleted}>borrar completados</button>}  
      </footer>
      
      
    </div>
  )
}

export default App
