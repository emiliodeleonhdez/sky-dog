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
            <OffCanvas anchorClasses="text-center w-100 off-canvas__anchor-text--32px" />
            <Logo/>
            <div className="option__menu d-none d-md-flex">
                <OptionMenu displayOptions={optionMenu} customClasses="d-flex align-items-center container__header-options" anchorClasses="text-center px-3" />
            </div>
        </div>
    );
};

export default PrimaryHeader;
