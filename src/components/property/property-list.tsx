import React, { FunctionComponent, useState, useEffect } from 'react';

import Property from '../../models/property/property';
import PropertyCard from '../../components/property/property-card';
import PropertyService from '../../services/property-service';

import Loader from '../../components/loader';

import '../../assets/css/property-card.css';

type Props = {
  title: string,
  typeProperty?: string,
  priceProperty?: string,
  zipCodeProperty?: string
};

const PropertyList: FunctionComponent<Props> = ({ title, typeProperty, priceProperty, zipCodeProperty }) => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties(typeProperty, priceProperty, zipCodeProperty).then(properties => setProperties(Array.from(properties)));
  }, []);

  //s'il n'y a pas de réponse on retourne rien
  if (!properties || !Array.isArray(properties) || properties.length == 0)
    return null;

  console.log(properties)

  return (
    <div className="p-3">
      <div className="container">
        <h1>{title}</h1>
        {properties ? (
          <div className="row justify-content-center">
            {properties.map(property => (
              <PropertyCard key={property.idProperty} property={property} />
            ))}
          </div>
        ) : (
          <h4 className="center"><Loader /></h4>
        )}
      </div>
    </div >
  );
}

export default PropertyList;