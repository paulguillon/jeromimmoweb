import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Property from '../../models/property/property';
import PropertyService from '../../services/property-service';

const PropertySearch: FunctionComponent = () => {

  const [term, setTerm] = useState<string>('');
  const [properties, setProperties] = useState<Property[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);

    if (term.length <= 1) {
      setProperties([]);
      return;
    }

    PropertyService.searchProperty(term).then(properties => setProperties(properties));
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input type="text" placeholder="Rechercher un bien" value={term} onChange={e => handleInputChange(e)} />
            </div>
            <div className='collection'>
              {properties.map((property) => (
                <Link key={property.idProperty} to={`/property/${property.idProperty}`} className="collection-item">
                  {property.typeProperty}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySearch;