import React from 'react';
import logo from '../../../assets/logo/sky-dog-logo.png';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <>
            <img className="logo__sky-dog" onClick={() => navigate("/")} src={logo} alt="logo" />
        </>
    );
};

export default Logo;
