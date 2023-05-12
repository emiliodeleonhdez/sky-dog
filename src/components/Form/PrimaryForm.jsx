import React from 'react';
import Form from 'react-bootstrap/Form';
import PrimaryButton from  '../Buttons/PrimaryButton/PrimaryButton'

const PrimaryForm = (props) => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{props.primaryLabel}</Form.Label>
                    <Form.Control type="email" placeholder={props.primaryLabelPlaceHolder} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{props.secondaryLabel}</Form.Label>
                    <Form.Control type="password" placeholder={props.secondaryLabelPlaceHolder} />
                </Form.Group>
                <Form.Group className='d-flex justify-content-center'>
                    <PrimaryButton {...props}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default PrimaryForm;
