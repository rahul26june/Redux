import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => (
    <ul className="list-group todosection">
    <li className="list-group-item active">List of Actions</li>
    {
        todos.map(todo =>
        <Todo key ={todo.id}
        {...todo}
        onClick = {() =>toggleTodo(todo.id)}
        />
        )
    }
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          completed: PropTypes.bool.isRequired,
          text:PropTypes.string.isRequired
      }).isRequired  
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList