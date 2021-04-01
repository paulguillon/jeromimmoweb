import React, { FunctionComponent, useState, useEffect } from 'react';
import Property from '../models/property';
import PropertyCard from '../components/property-card';
import PropertyService from '../services/property-service';
<<<<<<< HEAD
// import PropertySearch from '../components/property-search';
import Loader from '../components/loader';
=======
import PropertySearch from '../components/property-search';
// import { Link } from 'react-router-dom';
>>>>>>> 65fdafdb9bda1b35fc7dd129e2909e29b7bbcc65

const PropertyList: FunctionComponent = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties().then(properties => setProperties(properties));
  }, []);

  return (
<<<<<<< HEAD
    <div className="p-3">
      <h1 className="center">Biens immobiliers</h1>
      <div className="container"> 
      { properties ? (
        <div className="row justify-content-center">
            {/* <PropertySearch /> */}
            {/* {properties.filter(property => property.typeProperty == 'Maison').map(property => (
                <PropertyCard key={property.idProperty} property={property}/>
            ))} */}
=======
    <div>
      <h1 className="center">Biens immobiliers</h1>
      <div className="container"> 
        <div className="row">
            <PropertySearch />
>>>>>>> 65fdafdb9bda1b35fc7dd129e2909e29b7bbcc65
            {properties.map(property => (
                <PropertyCard key={property.idProperty} property={property}/>
            ))}
        </div>
<<<<<<< HEAD
        ) : (
            <h4 className="center"><Loader /></h4>
          )}
=======
>>>>>>> 65fdafdb9bda1b35fc7dd129e2909e29b7bbcc65
      </div>
    </div> 
  );
}

export default PropertyList;