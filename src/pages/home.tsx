import React, { FunctionComponent, useState, useEffect } from "react";
import PropertyService from "../services/property-service";
import PropertyList from "../components/property/property-list";

const Home: FunctionComponent = () => {
  const [maisons, setMaisons] = useState([]);
  const [appartements, setAppartements] = useState([]);
  const [garages, setGarages] = useState([]);

  useEffect(() => {
    PropertyService.getProperties("Maison", '', '', '', '3', '').then((properties) =>
      setMaisons(properties)
    );
    PropertyService.getProperties("Appartement", '', '', '', '3', '').then((properties) =>
      setAppartements(properties)
    );
    PropertyService.getProperties("Garage", '', '', '', '3', '').then((properties) =>
      setGarages(properties)
    );
  }, []);

  return (
    <div className="p-3">
      <h1 className="center">Accueil</h1>
      <div className="container">
        <PropertyList
          key="Maisons"
          title="Maisons"
          properties={maisons}
        />
        <PropertyList
          key="Appartements"
          title="Appartements"
          properties={appartements}
        />
        <PropertyList
          key="Garages"
          title="Garages"
          properties={garages}
        />
      </div>
    </div>
  );
};

export default Home;
