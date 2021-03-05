import React, { FunctionComponent, useState, useEffect } from 'react';
import Property from '../models/property';
import PropertyCard from '../components/property-card';
import PropertyService from '../services/property-service';
import PropertySearch from '../components/property-search';
// import { Link } from 'react-router-dom';

const PropertyList: FunctionComponent = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties().then(properties => setProperties(properties));
  }, []);

  return (
    <div>
      <h1 className="center">Biens immobiliers</h1>
      <div className="container"> 
        <div className="row">
            <PropertySearch />
            {properties.map(property => (
                <PropertyCard key={property.idProperty} property={property}/>
            ))}
        </div>
      </div>
    </div> 
  );
}

export default PropertyList;