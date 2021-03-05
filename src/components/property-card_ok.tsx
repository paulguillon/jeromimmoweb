import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Property from '../models/property';

type Props = {
  property: Property
};

const PropertyCard: FunctionComponent<Props> = ({property}) => {

const history = useHistory();

const goToProperty = (idProperty: number) => {
    history.push(`/property/${idProperty}`);
  }
 
  return (
    <div className="col s6 m4" onClick={() => goToProperty(property.idProperty)}>
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <p>{property.typeProperty}</p>
            <p><small>{property.zipCodeProperty}</small></p>
          </div>
        </div>
      </div> 
    </div>
  );
}
 
export default PropertyCard;