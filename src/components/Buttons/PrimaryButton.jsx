import React from 'react';
import Button from 'react-bootstrap/Button';

const PrimaryButton = (props) => {
    return (
        <>
            <Button variant={props.variant} onClick={props.action}>
                {props.text}
            </Button>
        </>
    );
};

export default PrimaryButton;
