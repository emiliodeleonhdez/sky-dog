import React from 'react';
import logo from '../../../assets/logo/main_logo.svg';
import whiteLogo from '../../../assets/logo/main_logo-white.svg';
import { useNavigate } from 'react-router-dom';

const Logo = (props) => {
    const navigate = useNavigate();
    const {customClass, isWhite} = props
    return (
        <div className='logo__container'>
            <img className={customClass} onClick={() => navigate("/")} src={isWhite ? whiteLogo : logo} alt="logo" />
        </div>
    );
};

export default Logo;
