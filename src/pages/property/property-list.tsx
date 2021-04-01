import React, { FunctionComponent, useState, useEffect } from 'react';
import Property from '../models/property/property';
import PropertyCard from '../components/property/property-card';
import PropertyService from '../services/property-service';
// import PropertySearch from '../components/property-search';
import Loader from '../components/loader';

const PropertyList: FunctionComponent = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties().then(properties => setProperties(properties));
  }, []);

  return (
    <div className="p-3">
      <h1 className="center">Biens immobiliers</h1>
      <div className="container"> 
      { properties ? (
        <div className="row justify-content-center">
            {/* <PropertySearch /> */}
            {properties.map(property => (
                <PropertyCard key={property.idProperty} property={property}/>
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