import React from 'react';
import Logo from '../Logos/Primary Logo/Logo';
import OptionMenu from '../Menus/OptionMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

const PrimaryHeader = () => {
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
        <div className="container__header--sticky d-flex align-items-center justify-content-around">
            <FontAwesomeIcon icon={faBars} className="d-md-none" onClick={() => alert("yes")}/>
            <Logo></Logo>
            <div className="option__menu d-none d-md-flex">
                <OptionMenu displayOptions={optionMenu} />
            </div>
        </div>
    );
};

export default PrimaryHeader;
