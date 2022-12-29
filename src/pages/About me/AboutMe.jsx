import React from 'react';
import PrimaryCarousel from '../../components/Carousel/PrimaryCarousel';
import PrimaryHeader from '../../components/Header/PrimaryHeader';
import Steps from '../../components/Steps/Steps';

const AboutMe = () => {
    const stepsInformation = [
        {
            number: '1',
            stepTitle: 'Consultas de comportamiento canino',
            description: 'Consulta de evaluación, en esta consulta evaluamos sus necesidades actuales, sus rutinas, convivencia, paseos, comida, etc., todo lo relacionado a tu perro.',
            textLink: '¡Más información!',
            additionalClasses: 'd-flex flex-column align-items-center col-12 col-md-6'
        },
        {
            number: '2',
            stepTitle: 'Curso para cachorritos',
            description: 'Si no entiendes el porqué tu cachorro es inquieto, te pone de nervios debido a que no sabes que hacer ese nuevo miembro de la familia o, porque simplemente no conoces muy bien y/o quieres aprender más acerca de las necesidades de los cachorros, ¡este curso es para ustedes!',
            textLink: '¡Más información!',
            additionalClasses: 'd-flex flex-column align-items-center col-12 col-md-6'
        },
        {
            number: '3',
            stepTitle: 'Te ayudamos a encontrar la mejor opción para tu perrito',
            description: 'Agendar cita',
            textLink: '¡Agenda conmigo!',
            additionalClasses: 'd-flex flex-column align-items-center col-12'
        }
    ];
    return (
        <>
            <PrimaryHeader />
            <div className="container">
                <div className="row">
                    <PrimaryCarousel />
                </div>
                <div className="row justify-content-center children__elements--mt-15-mb-15">
                    <h1 className="col-12">¡Hola soy Ivonne Gonzalez!</h1>
                    <h6 className="col-12">Soy médico veterinario zootecnista, egresada de la UAM y máster en etología en animales de compañía, por la UAB.</h6>
                    <p className="col- 12 p__align-left">Cuento con más de 7 años dedicándome a educación canina, colaborando estrechamente con cada familia para mejorar los problemas de comportamiento de sus perros y mejorando su vínculo afectivo. Educación canina brindada mediante entrenamiento positivo, buscando reforzar el vínculo afectivo que cada tutor tiene con su perro</p>
                </div>
                <div className="row">
                    {stepsInformation.map((step, index) => (
                        <Steps customCss={step.additionalClasses} key={index} stepNumber={step.number} stepTitle={step.stepTitle} stepDescription={step.description} stepLinkText={step.textLink} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutMe;
