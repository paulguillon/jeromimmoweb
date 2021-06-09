import React, { FunctionComponent, useState, useEffect } from "react";
import PropertyService from "../services/property-service";
import PropertyList from "../components/property/property-list";
import Properties from "../models/property/properties";

const Home: FunctionComponent = () => {
  const [maisons, setMaisons] = useState<Properties | null>(null);
  const [appartements, setAppartements] = useState<Properties | null>(null);
  const [garages, setGarages] = useState<Properties | null>(null);

  useEffect(() => {
    PropertyService.getProperties("Maison", "", "", "", [], "3", "").then(
      (properties) => setMaisons(properties)
    );
    PropertyService.getProperties("Appartement", "", "", "", [], "3", "").then(
      (properties) => setAppartements(properties)
    );
    PropertyService.getProperties("Garage", "", "", "", [], "3", "").then(
      (properties) => setGarages(properties)
    );
  }, []);

  return (
    <div className="container">
      <PropertyList key="Maisons" title="Maisons" data={maisons} />
      <PropertyList
        key="Appartements"
        title="Appartements"

        data={appartements}
      />
      <PropertyList key="Garages" title="Garages" data={garages} />
    </div>
  );
};

export default Home;
