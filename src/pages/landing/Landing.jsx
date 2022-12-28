import React from 'react';
import Logo from '../../components/Logos/Primary Logo/Logo';
import OptionMenu from '../../components/Menus/OptionMenu';

const Landing = () => {
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
    ];

    return (
        <div className="container">
            <Logo />
            <OptionMenu displayOptions={optionMenu} />
        </div>
    );
};

export default Landing;
