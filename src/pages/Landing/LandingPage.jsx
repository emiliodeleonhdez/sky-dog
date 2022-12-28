//imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import LandingCard from '../../components/Cards/Landing Product Card/LandingCard';
import PrimaryCarousel from '../../components/Carousel/PrimaryCarousel';
import Logo from '../../components/Logos/Primary Logo/Logo';
import OptionMenu from '../../components/Menus/OptionMenu';

const LandingPage = () => {
    //hooks
    const navigate = useNavigate();

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

    const landingCards = [
        {
            img: '',
            title: 'Start with step 1',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        },
        {
            img: '',
            title: 'Then step 2',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        },
        {
            img: '',
            title: 'Finally, step 3',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
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
            <div className="row justify-content-center">
                <h1 className="col-12">No es lo mismo educar, que entrenar</h1>
                <h6 className="col-12">¿Quieres esaber cuál es la diferencia?</h6>
                <PrimaryButton variant="secondary" text="¡Explorar!" size="sm" customCss="button__landing--100w my-1" action={() => navigate('/about')} />
            </div>
            <div className="row my-5">
                <h2 className="col-12">¿Como empezar?</h2>
                <h6 className="col-12">Nosotros te guiamos 😉</h6>
            </div>
            <div className="row justify-content-center">
                {landingCards.map((card, index) => (
                    <LandingCard key={index} cardImg={card.img} cardTitle={card.title} cardDescription={card.description} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
