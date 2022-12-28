import React from 'react'
import Nav from 'react-bootstrap/Nav';

const OptionMenu = (props) => {
  return (
    <div className='row'>
        {props.displayOptions.map((option, index) => <Nav.Link key={index} className='col-4'>{option.name}</Nav.Link>)}
    </div>
  )
}

export default OptionMenu