import React from 'react'
import Nav from 'react-bootstrap/Nav';

const OptionMenu = (props) => {
  return (
    <div className='row'>
        {props.displayOptions.map((option, index) => <Nav.Link key={index} href={option.nav} className='col-4 text-center'>{option.name}</Nav.Link>)}
    </div>
  )
}

export default OptionMenu