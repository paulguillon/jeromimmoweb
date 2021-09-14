import { FunctionComponent, useState, useEffect } from "react";
import PropertyService from "../services/property-service";
import PropertyList from "../components/property/property-list";
import Properties from "../models/property/properties";

const Home: FunctionComponent = () => {
  const [maisons, setMaisons] = useState<Properties>({ total: 0, properties: [] });
  const [appartements, setAppartements] = useState<Properties>({ total: 0, properties: [] });
  const [garages, setGarages] = useState<Properties>({ total: 0, properties: [] });
  const [terrains, setTerrains] = useState<Properties>({ total: 0, properties: [] });

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
    PropertyService.getProperties("Terrain", "", "", "", [], "3", "").then(
      (properties) => setTerrains(properties)
    );
  }, []);

  return (
    <div>
      <header className="text-center p-5 mb-5">
        <h1>Bienvenue chez Jeromimmo </h1>
      </header>


      <div className="container">
        <PropertyList key="Appartements" title="Appartements" data={appartements} />
        <PropertyList key="Maisons" title="Maisons" data={maisons} />
        <PropertyList key="Terrains" title="Terrains" data={terrains} />
        <PropertyList key="Garages" title="Garages" data={garages} />
      </div>
    </div>
  );
};

export default Home;
