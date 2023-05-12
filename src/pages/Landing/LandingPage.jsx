//imports
import React from "react";
import { useNavigate } from "react-router-dom";

//components
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import LandingCard from "../../components/Cards/Landing/LandingCard";
import PrimaryCarousel from "../../components/Carousel/PrimaryCarousel";

//illustrations
import skyDogDoggy from "../../assets/illustrations/sky-dog-doggy.svg";

const LandingPage = () => {
  //hooks
  const navigate = useNavigate();

  const landingCards = [
    {
      img: "",
      title: "Start with step 1",
      description: "Nunc mattis feugiat ex scelerisque congue.",
    },
    {
      img: "",
      title: "Then step 2",
      description: "Nunc mattis feugiat ex scelerisque congue.",
    },
    {
      img: "",
      title: "Finally, step 3",
      description: "Nunc mattis feugiat ex scelerisque congue.",
    },
  ];

  return (
    <>
      <div className="container-fluid landing__container">
        <div className="row landing__merli-container p-2 p-sm-3 p-md-5">
          <h1 className="col-12 font-weight__bold display-1 landing_main-title text-center text-md-start">
            No es lo mismo <br />
            educar que <br /> entrenar
          </h1>
          <p className="landing__description text-md-start">
            Si quieres que tu perro aprenda alguna disciplina como agility, dog
            dancing, búsqueda y rescate, etc., deberás de buscar un
            entrenamiento formal, informado y dirigido. Si el problema con tu
            perro es que hace sus necesidades por todos lados, le ladra a
            personas, es agresivo con otros perros, etc., lo que necesitas es
            educar y conocer las necesidades de tu perro y comenzar a trabajar.
          </p>
          <p className="landing__question text-center text-md-start">
            ¿Cómo puedo comenzar a trabajar un tema de comportamiento?
          </p>
        </div>
        <section className="container-fluid d-flex flex-nowrap flex-column flex-md-row align-items-center justify-content-center justify-content-md-around p-2 p-sm-3 p-md-5 landing__hello-container">
          <article className="container m-0 me-md-5 hello__my-name-container">
            <h2 className="text-center text-md-start">¡Hola!</h2>
            <h3 className="text-center text-md-start">Soy Ivonne González</h3>
            <p className="hello__description">
              Soy médico veterinario zootecnista, egresada de la UAM y máster en
              etología en animales de compañía, por la UAB.
            </p>
          </article>
          <article className="container m-0 ms-md-5 hello__experience">
            <p className="experience__description">
              Cuento con más de 7 años dedicándome a educación canina,
              colaborando estrechamente con cada familia para mejorar los
              problemas de comportamiento de sus perros y mejorando su vínculo
              afectivo. Educación canina brindada mediante entrenamiento
              positivo, buscando reforzar el vínculo afectivo que cada tutor
              tiene con su perro.
            </p>
          </article>
        </section>
        <section className="contact-me__container container-fluid d-flex flex-column justify-content-center align-items-center my-5">
          <PrimaryButton
            variant="primary"
            text="¡Contáctame!"
            customCss="text-white rounded-pill contact-me__button"
          />
          <div className="call-to-action__container my-5">
            <p className="m-0 text-primary call-to-action__text">
              MÁS D E 7 AÑOS DE EXPERIENCIA
            </p>
            <p className="m-0 text-primary call-to-action__text">
              CUIDANDO Y EDUCANDO PELUDOS
            </p>
          </div>
        </section>
        <section className="services__container container-fluid p-2 p-sm-3 p-md-5">
          <h2 className="my-3 text-center text-md-start text-center text-md-start">
            Servicios
          </h2>
          <div className="d-flex justify-content-center justify-content-md-start my-3">
            <div className="service__display rounded-4"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
