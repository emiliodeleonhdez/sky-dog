import React from 'react';

import Logo from '../Logos/Primary Logo/Logo';
import OptionMenu from '../Menus/OptionMenu';
import OffCanvas from '../Sidebars/PrimaryOffCanvas';

const PrimaryHeader = () => {
    const optionMenu = [
        {
            name: 'Home',
            nav: '/'
        },
        {
            name: '¡Soy Ivonne!',
            nav: '/about'
        },
        {
            name: 'Productos',
            nav: '/products'
        }
    ];

    return (
        <div className="container__header--sticky d-flex align-items-center justify-content-around">
            <OffCanvas />
            <Logo></Logo>
            <div className="option__menu d-none d-md-flex">
                <OptionMenu displayOptions={optionMenu} customClasses="d-flex container__header-options" anchorClasses="col-4 text-center" />
            </div>
        </div>
    );
};

export default PrimaryHeader;
