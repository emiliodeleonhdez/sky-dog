//imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import LandingCard from '../../components/Cards/Landing/LandingCard';
import PrimaryCarousel from '../../components/Carousel/PrimaryCarousel';

//illustrations
import skyDogDoggy from '../../assets/illustrations/sky-dog-doggy.svg';

const LandingPage = () => {
    //hooks
    const navigate = useNavigate();

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
        <>
            <div className="container my-3">
                <div className="row justify-content-center children__elements--mt-15-mb-15">
                    <h1 className="col-12 text-center">No es lo mismo educar, que entrenar</h1>
                    <img className="landing__doggy-illustration" src={skyDogDoggy} alt="" />
                    <h6 className="col-12 text-center">¿Quieres esaber cuál es la diferencia?</h6>
                    <PrimaryButton variant="secondary" text="¡Explorar!" size="sm" customCss="button__landing--100w my-1 text-light" action={() => navigate('/about')} />
                </div>
                <div className="row my-5">
                    <h2 className="col-12 text-center">¿Como empezar?</h2>
                    <h6 className="col-12 text-center">Nosotros te guiamos 😉</h6>
                </div>
                <div className="row justify-content-center">
                    {landingCards.map((card, index) => (
                        <LandingCard key={index} cardImg={card.img} cardTitle={card.title} cardDescription={card.description} />
                    ))}
                </div>
                <div className="row">
                    <PrimaryCarousel />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
