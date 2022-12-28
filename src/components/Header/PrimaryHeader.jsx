import React from 'react';
import Logo from '../Logos/Primary Logo/Logo';
import OptionMenu from '../Menus/OptionMenu';

const PrimaryHeader = () => {
    const optionMenu = [
        {
            name: 'Option 1',
            nav: 'www.google.com'
        },
        {
            name: 'Option 2',
            nav: 'www.facebook.com'
        },
        {
            name: 'Option 2',
            nav: 'www.twitter.com'
        }
    ]
    return (
        <div className='container__header--sticky'>
            <Logo></Logo>
            <div className="option__menu">
                <OptionMenu displayOptions={optionMenu} />
            </div>
        </div>
    );
};

export default PrimaryHeader;
