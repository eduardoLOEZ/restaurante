import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Por que elegirnos?
        </h1>
        <p>
        Elegirnos va más allá de una simple elección gastronómica; es sumergirse en una experiencia culinaria excepcional. Aquí te presentamos algunas razones convincentes para hacernos tu destino favorito:

Autenticidad Italiana: Nos enorgullece ofrecer auténticos sabores italianos preparados por chefs apasionados y respetuosos de las tradiciones culinarias de Italia. Cada plato es una representación genuina de la riqueza gastronómica de este hermoso país.
        </p>
        <p>
        Ven y descubre por qué somos la elección predilecta para aquellos que buscan una experiencia auténtica y deliciosa de la cocina italiana. ¡Esperamos poder deleitarte con nuestro exquisito menú y servicio excepcional!
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;