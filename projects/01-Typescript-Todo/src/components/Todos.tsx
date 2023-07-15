import { type Todo, type ListOfTodos } from '../types'

interface Props {
  todos: ListOfTodos
    handleClick: (id: string) => void
    onCheckClick:(id:string)=>void
}
export const Todos: React.FC<Props> = ({ todos, handleClick, onCheckClick }) => {
 

  return (
        <ul className='todo-list'>
        {todos.map(todo => {
          return (
              <li key={todo.id} className={todo.completed ? 'completed' : 'incomplete'}>
                  <SingleTodo todo={todo} handleClick={handleClick} onCheckClick={ onCheckClick} />
              </li>
          )
        })}
    </ul>)
}
interface TodoProps {
  todo: Todo
    handleClick: (id:string) => void
    onCheckClick: (id:string) => void
}
const SingleTodo: React.FC<TodoProps> = ({ todo, handleClick, onCheckClick }) => {
  return (<div className='view'>
        <input
            className='toggle'
            checked={todo.completed}
            type='checkbox'
          onChange={()=>onCheckClick(todo.id)} />
      <label>{todo.title}</label>
      <button
          className='destroy'
          onClick={()=> handleClick(todo.id)} />
  </div>

  )
}
