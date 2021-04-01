import React, { FunctionComponent, useState, useEffect } from 'react';
import Property from '../models/property/property';
import PropertyCard from '../components/property/property-card';
import PropertyService from '../services/property-service';
import PropertyList from '../components/property/property-list';
import Loader from '../components/loader';

const Home: FunctionComponent = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties().then(properties => setProperties(properties));
  }, []);

  return (
    <div className="p-3">
      <h1 className="center">Accueil</h1>
      <div className="container">
        <PropertyList key={'Maisons'} title="Maisons" typeProperty="Maison" />
        <PropertyList key={'Appartements'} title="Appartements" typeProperty="Appartement" />
        <PropertyList key={'Garages'} title="Garages" typeProperty="Garage" />
      </div>
    </div>
  );
}

export default Home;