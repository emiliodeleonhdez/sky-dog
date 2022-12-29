import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import OptionMenu from '../Menus/OptionMenu';

const OffCanvas = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const optionMenu = [
        {
            name: 'Home',
            nav: '/'
        },
        {
            name: 'Nosotros',
            nav: '/about'
        },
        {
            name: 'Productos',
            nav: 'www.twitter.com'
        }
    ];

    return (
        <>
        {console.log(props.show)}
            <FontAwesomeIcon icon={faBars} className="d-md-none" onClick={() => setShow(true)} />
            <Offcanvas show={show || props.show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sky Dog | Educación Canina</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <OptionMenu onClick={()=> alert("click")} displayOptions={optionMenu} customClasses='d-flex container__header-options flex-column' anchorClasses='col-4 text-left'/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffCanvas;
