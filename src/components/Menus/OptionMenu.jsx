import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

const OptionMenu = (props) => {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className={props.customClasses}>
                {props.displayOptions.map((option, index) => (
                    <Nav.Link key={index} onClick={() => handleClick(option.nav)} className={props.anchorClasses}>
                        {option.name}
                    </Nav.Link>
                ))}
            </div>
        </>
    );
};

export default OptionMenu;
