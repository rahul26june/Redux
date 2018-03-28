import React from 'react'
import PropTypes from 'prop-types'
 
const Link = ({ active, children, onClick }) => (
  <a className="button"
     onClick={onClick}
     disabled={active}
     style={{
         marginLeft: '4px',
     }}
  >
    {children}
  </a>
)
 
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
 
export default Link