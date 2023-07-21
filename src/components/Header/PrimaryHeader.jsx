import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import Logo from '../Logos/Primary Logo/Logo';
import OptionMenu from '../Menus/OptionMenu';
import OffCanvas from '../Sidebars/PrimaryOffCanvas';

const PrimaryHeader = () => {
    const optionMenu = [
        {
            name: 'Inicio',
            nav: '/'
        },
        {
            name: 'Servicios',
            nav: '/services'
        },
        {
            name: 'Galería',
            nav: '/about'
        }

    ];

    return (
        <div className="container__header--sticky d-flex align-items-center justify-content-between">
            <OffCanvas anchorClasses="text-center w-100 off-canvas__anchor-text--32px" />
            <Logo/>
            <div className="option__menu mx-5 d-none d-md-flex">
                <OptionMenu displayOptions={optionMenu} customClasses="d-flex align-items-center container__header-options" anchorClasses="text-center px-3" />
                <PrimaryButton variant="primary" text="Contacto" customCss="rounded-pill header__contact-button"/>

            </div>
        </div>
    );
};

export default PrimaryHeader;
