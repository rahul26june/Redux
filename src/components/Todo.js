import React from 'react'
import PropTypes from 'prop-types'

const Todo =({onClick, completed, text}) =>(
    <li className="list-group-item" 
    onClick = {onClick}
    // style = {{
    //     textDecoration: completed ? 'line-through' : 'none'
    // }}
    ><div className="tasktext">{text}</div><div className="taskstatus">{completed ? 'Yes' : 'No'}</div>
    </li>
)



Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo

