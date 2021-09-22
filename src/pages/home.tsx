import { FunctionComponent, useState, useEffect } from "react";

import PropertyService from "../services/property-service";
import Properties from "../models/property/properties";
import PropertyCard from "../components/property/property-card";
import "../assets/css/property.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import { divIcon } from "leaflet";

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
      <header className="text-center p-5 mb-5">
        <h1>Bienvenue chez Jeromimmo </h1>
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


      <div className="bg-danger w-100">
        Découvrir tout nos bien !!!
        <Link to="/properties">Découvir</Link>
      </div>

    </div>
  );
};

export default Home;
