import React from 'react';
import Logo from '../Logos/Primary Logo/Logo';
import OptionMenu from '../Menus/OptionMenu';

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
        <div className="container__header--sticky d-flex flex-column align-items-center">
            <Logo></Logo>
            <div className="container option__menu">
                <OptionMenu displayOptions={optionMenu} />
            </div>
        </div>
    );
};

export default PrimaryHeader;
