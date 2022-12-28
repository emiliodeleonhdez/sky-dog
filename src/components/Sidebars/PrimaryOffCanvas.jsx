import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PrimaryButton from '../Buttons/PrimaryButton';

const PrimaryOffCanvas = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <PrimaryButton variant="primary" text="offcanvas" action={() => toggleShow()} />
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

const OffCanvas = () => {

    const config = {
        scroll: true,
        backdrop: true
    };

    return (
        <>
            <PrimaryOffCanvas {...config} />
        </>
    );
};

export default OffCanvas;
