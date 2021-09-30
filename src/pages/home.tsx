import { FunctionComponent, useState, useEffect } from "react";

import PropertyService from "../services/property-service";
import Properties from "../models/property/properties";
import PropertyCard from "../components/property/property-card";
import "../assets/css/property.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";

const Home: FunctionComponent = () => {
  const [maisons, setMaisons] = useState<Properties>({ total: 0, properties: [] });
  const [appartements, setAppartements] = useState<Properties>({ total: 0, properties: [] });

  useEffect(() => {
    PropertyService.getProperties("Maison", "", "", "", [], "6", "").then(
      (properties) => setMaisons(properties)
    );
    PropertyService.getProperties("Appartement", "", "", "", [], "6", "").then(
      (properties) => setAppartements(properties)
    );
  }, []);

  const getMaisons = () => {
    return (
      maisons.properties.map((maison) =>
      (
        <div className="m-2">
          <PropertyCard property={maison} />
        </div>
      ))
    )
  }

  const getAppartements = () => {
    return (
      appartements.properties.map((appartement) =>
      (
        <div className="m-2">
          <PropertyCard property={appartement} />
        </div>
      ))
    )
  }


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <header className="header-info  text-center   d-flex justify-content-center" >
        <div className="filter"></div>
        <div className="container-info w-75 m-auto text-center">
          <h1 className="mb-5">1300 agences immobilières partout,<br /> rien que pour vous !</h1>
          <Link to="/properties" className="btn-info">Découvir nos biens</Link>
        </div>
      </header>


      <div className="container">

        <div className="mb-5 mt-5">
          <Carousel responsive={responsive} draggable={false}>
            {getMaisons()}
          </Carousel>
        </div>

        <div className="mb-5 mt-5">
          <Carousel responsive={responsive} draggable={false}>
            {getAppartements()}
          </Carousel>
        </div>
      </div>

      <div className="newsletter">
        <div className="container m-auto w-lg-50">
          <h2>Ne manquez plus nos actualités et conseils ! </h2>
          <p>Conseils, chiffres clés, marché… Notre équipe met tout en oeuvre <br /> pour que vous ne ratiez aucune opportunité business !</p>
          <div className="input-info m-auto d-flex justify-content-center align-items-center">
            <input type="text" className="inputmail-info"  />
            <button type="submit" className="inputbtn-info">Envoyer</button>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Home;
