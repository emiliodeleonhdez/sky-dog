import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import OffCanvas from '../Sidebars/PrimaryOffCanvas';


const OptionMenu = (props) => {

  const navigate = useNavigate();
  const handleIsClickedAndClose = (path) => {
    navigate(path);
    <OffCanvas show={false}/>
  }

  return (
    <div className={props.customClasses}>
        {props.displayOptions.map((option, index) => <Nav.Link key={index} onClick={()=> handleIsClickedAndClose(option.nav)} className={props.anchorClasses}>{option.name}</Nav.Link>)}
    </div>
  )
}

export default OptionMenu