import React, { FunctionComponent, useState, useEffect } from "react";

import Property from "../../models/property/property";
import PropertyCard from "../../components/property/property-card";

import Loader from "../../components/loader";

import "../../assets/css/property-card.css";

type Props = {
  properties: Array<Property>;
  title: string;
};

const PropertyList: FunctionComponent<Props> = ({ properties, title }) => {
  //s'il n'y a pas de réponse on retourne rien
  if (!properties || !Array.isArray(properties)) return null;

  return (
    <div className="p-3">
      <div className="container">
        {properties.length > 0 ? (
          <div className="row justify-content-center">
            <h1>{title}</h1>
            {properties.map((property) => (
              <PropertyCard key={property.idProperty} property={property} />
            ))}
          </div>
        ) : (
          <h4 className="center">Aucun résultat</h4>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
