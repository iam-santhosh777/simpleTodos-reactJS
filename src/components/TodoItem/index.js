// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button onClick={onDeleteTodo} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
