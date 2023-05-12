import React from 'react';
// import logo from '../../../assets/logo/sky-dog-logo.png';
import logo from '../../../assets/logo/main_logo.svg';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className='logo__container mx-5'>
            <img className="logo__sky-dog" onClick={() => navigate("/")} src={logo} alt="logo" />
        </div>
    );
};

export default Logo;
