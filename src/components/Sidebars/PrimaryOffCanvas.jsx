import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const OffCanvas = (props) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleClick = (path) => {
        navigate(path);
        setShow(false);
    };

    const optionMenu = [
        {
            name: 'Home',
            nav: '/'
        },
        {
            name: '¡Soy Ivonne!',
            nav: '/about'
        },
        {
            name: 'Productos',
            nav: '/products'
        }
    ];

    return (
        <div className="d-md-none">
            <FontAwesomeIcon icon={faBars} onClick={() => setShow(true)} />
            <Offcanvas show={show} onHide={handleClose} responsive='md' className="off-canvas__custom-width">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sky Dog Educación Canina</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {optionMenu.map((option, index) => (
                        <Nav.Link key={index} onClick={() => handleClick(option.nav)} className={props.anchorClasses}>
                            {option.name}
                        </Nav.Link>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default OffCanvas;
