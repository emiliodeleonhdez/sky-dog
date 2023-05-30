//imports
import React from "react";
// import { useNavigate } from "react-router-dom";

//components
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import Recomendation from "../../components/Cards/Recomendations/Recomendation";

//illustrations
import ServiceCard from "../../components/Cards/Services/ServiceCard";

const LandingPage = () => {
  //hooks
  // const navigate = useNavigate();

  // const landingCards = [
  //   {
  //     img: "",
  //     title: "Start with step 1",
  //     description: "Nunc mattis feugiat ex scelerisque congue.",
  //   },
  //   {
  //     img: "",
  //     title: "Then step 2",
  //     description: "Nunc mattis feugiat ex scelerisque congue.",
  //   },
  //   {
  //     img: "",
  //     title: "Finally, step 3",
  //     description: "Nunc mattis feugiat ex scelerisque congue.",
  //   },
  // ];

  return (
    <>
      <div className="container-fluid landing__container">
        <div className="row landing__merli-container p-2 p-sm-3 p-md-5 flex-nowrap">
          <div className="container m-0 merli-container__description my-5">
            <h1 className="col-12 font-weight__bold display-1 landing_main-title text-center text-md-start">
              No es lo mismo <br />
              educar que <br /> entrenar
            </h1>
            <p className="landing__description text-md-start">
              Si quieres que tu perro aprenda alguna disciplina como agility,
              dog dancing, búsqueda y rescate, etc., deberás de buscar un
              entrenamiento formal, informado y dirigido. Si el problema con tu
              perro es que hace sus necesidades por todos lados, le ladra a
              personas, es agresivo con otros perros, etc., lo que necesitas es
              educar y conocer las necesidades de tu perro y comenzar a
              trabajar.
            </p>
            <p className="landing__question text-center text-md-start">
              ¿Cómo puedo comenzar a trabajar un tema de comportamiento?
            </p>
          </div>
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
        <section className="contact-me__container container-fluid d-flex flex-column justify-content-center align-items-center  p-2 p-sm-3 p-md-5">
          <PrimaryButton
            variant="primary"
            text="¡Contáctame!"
            customCss="text-white rounded-pill contact-me__button"
          />
          <div className="call-to-action__container my-5">
            <p className="m-0 text-primary call-to-action__text">
              MÁS DE 7 AÑOS DE EXPERIENCIA
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
          <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-md-between my-3 services__main-container">
            <div className="service__display rounded-4"></div>
            <section className="d-flex flex-column align-items-end service__card-container ms-md-3">
              <ServiceCard
                id="1"
                cardTitle="Consultas de comportamiento"
                cardBody="Si no entiendes el porqué tu cachorro es inquieto, te pone
              de nervios debido a que no sabes que hacer ese nuevo
              miembro de la familia o, porque simplemente no conoces
              muy bien y/o quieres aprender más acerca de las
              necesidades de los cachorros, ¡este curso es para ustedes"
              />
              <ServiceCard
                id="2"
                cardTitle="Curso para cachorritos"
                cardBody="Si no entiendes el porqué tu cachorro es inquieto, te pone
              de nervios debido a que no sabes que hacer ese nuevo
              miembro de la familia o, porque simplemente no conoces
              muy bien y/o quieres aprender más acerca de las
              necesidades de los cachorros, ¡este curso es para ustedes"
              />
              <ServiceCard
                id="3"
                cardTitle="Consulta y asesoría para
              manejo Fear Free®"
                cardBody="Te ayudamos a encontrar la mejor opción para tu perrito."
              />
            </section>
          </div>
        </section>
        <div className="d-flex justify-content-center my-5">
          <PrimaryButton
            variant="primary"
            text="¡Agenda una cita!"
            customCss="text-white rounded-pill book__button"
          />
        </div>
        <section>
          <h2 className="my-3 text-center py-5">Recomendaciones</h2>
          <div className="recomendation__container d-flex flex-column flex-md-row justify-content-center align-items-center my-5 mx-md-5">
            <Recomendation
              owner="Miguel Castillo"
              review="Sin duda un espacio seguro que recomiendo con toda confianza."
            />
            <Recomendation
              owner="Daniela Mata"
              review="La Dogtora Ivonne es una profesional, comprometida, preparada, empática."
            />
            <Recomendation
              owner="Jimena Campoy"
              review="Mi perrita Merlina y yo llegamos con la Dra Ivonne a Sky-Dog® Educación Canina hace casi 2 años..."
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
