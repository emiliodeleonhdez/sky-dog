import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

const OptionMenu = (props) => {

  const navigate = useNavigate();

  return (
    <div className={props.customClasses}>
        {props.displayOptions.map((option, index) => <Nav.Link key={index} eventKey={index} onSelect={(selectedKey)=>  alert(`selected ${selectedKey}`)} onClick={()=> navigate(option.nav)} className={props.anchorClasses}>{option.name}</Nav.Link>)}
    </div>
  )
}

export default OptionMenu