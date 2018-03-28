import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
 
const AddTodo = ({ dispatch }) => {
  let input
 
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
      <div className="description">To do list using react and Redux</div>
      <ul className="menu formtodo">
          <li className="txt"> <input type="text" placeholder="Search" ref={node => input = node} /></li>
          <li> <button type="submit" className="button">Add Todo </button></li>
        </ul>

      </form>
    </div>
  )
}
 
export default connect()(AddTodo)