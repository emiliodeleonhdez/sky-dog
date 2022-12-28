import React from 'react';
import PrimaryCarousel from '../../components/Carousel/PrimaryCarousel';
import Logo from '../../components/Logos/Primary Logo/Logo';
import OptionMenu from '../../components/Menus/OptionMenu';

const AboutMe = () => {
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
            <div className="option__menu">
                <OptionMenu displayOptions={optionMenu} />
            </div>
            <div className="row">
                <PrimaryCarousel />
            </div>
        </div>
    );
};

export default AboutMe;
