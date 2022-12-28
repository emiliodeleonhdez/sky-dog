import React from 'react';
import Button from 'react-bootstrap/Button';

const PrimaryButton = (props) => {
    return (
        <>
            <Button variant={props.variant} onClick={props.action} size={props.size ? props.size : 'sm'} className={props.customCss}>
                {props.text}
            </Button>
        </>
    );
};

export default PrimaryButton;
