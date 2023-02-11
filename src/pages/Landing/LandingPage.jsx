//imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import PrimaryButton from '../../components/Buttons/PrimaryButton/PrimaryButton';
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
            <div className="container my-3 landing__container">
                <div className="row children__elements--mt-15-mb-15">
                    <h1 className="col-12 font-weight__bold display-1 landing_main-title">
                        No es lo mismo <br />
                        educar que entrenar
                    </h1>
                    <p className="text-justify landing__description">
                        Sí quieres que tú perro aprenda algunna disciplina como agility, dog dancing, búsqueda y rescate, etc., deberás buscar un entrenamiento formal, informado y dirigido. <br /> Si el problema con tú perro es que hace sus necesidades por todos lados, le ladra a personas, es agresivo con otros perros, etc.m lo que necesitas es educar y conocer las necesidades de tú perro y comenzar a trabajarlas.
                    </p>
                    {/* <img className="landing__doggy-illustration" src={skyDogDoggy} alt="" /> */}
                    <h6 className="col-12 landing__know-how">¿Quieres esaber cuál es la diferencia?</h6>
                    <div className="col-12 landing__call-action-button">
                        <PrimaryButton variant="primary" text="¡Explorar!" customCss="landing__buttton ms-2 my-1" action={() => navigate('/about')} />
                    </div>
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
