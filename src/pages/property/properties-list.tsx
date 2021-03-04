import React, { FunctionComponent, useState, useEffect } from 'react';
import Property from '../../models/property';
import PropertyCard from '../../components/property/property-card';
import PropertyService from '../../services/property-service';
import { Link } from 'react-router-dom';
import PropertySearch from '../../components/property/property-search';

const PropertiesList: FunctionComponent = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties().then(properties => setProperties(properties));
  }, []);

  return (
    <div>
      <h1 className="center">Liste de bien</h1>
      <div className="container">
        <div className="row">
          <PropertySearch />
          {properties.map(property => (
            <PropertyCard key={property.idProperty} property={property} />
          ))}
        </div>
      </div>
      <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/property/add">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

export default PropertiesList;