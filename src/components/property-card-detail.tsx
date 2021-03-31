import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Property from '../models/property';

type Props = {
  property: Property
};

const PropertyCardDetail: FunctionComponent<Props> = ({ property }) => {

  return (
    <div className="card border p-0 m-5">
      {property.data.length > 0 && (
        property.data.map(data => (
          data.keyPropertyData === 'thumbnail' && (
            <img src={data.valuePropertyData} alt="image" className="card-img-top" />
          )
        ))
      )}
      <div className="card-body">
        <h5 className="card-title">{property.typeProperty}</h5>
        <p className="card-text">
          {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(property.priceProperty))}
        </p>
        <tr>
          <td>Type</td>
          <td><strong>{property.typeProperty}</strong></td>
        </tr>
        <tr>
          <td>Prix</td>
          <td><strong>{property.priceProperty}</strong></td>
        </tr>
        <tr>
          <td>Code postal</td>
          <td><strong>{property.zipCodeProperty}</strong></td>
        </tr>
        <tr>
          <td>Ville</td>
          <td><strong>{property.cityProperty}</strong></td>
        </tr>
      </div>
    </div>
  );
}

export default PropertyCardDetail;