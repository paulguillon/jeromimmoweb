import React, { FunctionComponent, useState, useEffect } from 'react';
import Property from '../models/property';
import PropertyCard from '../components/property-card';
import PropertyService from '../services/property-service';
import Loader from '../components/loader';

const PropertyList: FunctionComponent = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties('').then(properties => setProperties(properties));
  }, []);

  return (
    <div className="p-3">
      <h1 className="center">Accueil</h1>
      <div className="container">
        {properties ? (
          <div className="row justify-content-center">
            <h1>Maisons</h1>
            {properties.map(property => (
              (property.typeProperty === 'Maison' &&
                <PropertyCard key={property.idProperty} property={property} />
              )
            ))}
            <h1>Appartements</h1>
            {properties.map(property => (
              (property.typeProperty === 'Appartement' &&
                <PropertyCard key={property.idProperty} property={property} />
              )
            ))}
          </div>
        ) : (
          <h4 className="center"><Loader /></h4>
        )}
      </div>
    </div>
  );
}

export default PropertyList;