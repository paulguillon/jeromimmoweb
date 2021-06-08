import React, { FunctionComponent } from "react";

import Property from "../../models/property/property";
import PropertyCard from "../../components/property/property-card";

import "../../assets/css/property-card.css";
import Loader from "../loader";

type Props = {
  properties: Array<Property> | null;
  title: string;
};

const PropertyList: FunctionComponent<Props> = ({ properties, title }) => {
  return (
    <div style={{ minHeight: "400px", backgroundColor: 'whitesmoke' }}>
      <div className="container">
        <h2>{title}</h2>

        {properties ? (
          properties.length > 0 ? (
            <div className="d-flex flex-wrap justify-content-around">
              {properties.map((property) => (
                <PropertyCard key={property.idProperty} property={property} />
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
              <h4 className="center">
                Aucun résultat
              </h4>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PropertyList;
