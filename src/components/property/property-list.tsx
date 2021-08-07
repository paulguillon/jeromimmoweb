import React, { FunctionComponent } from "react";

import Properties from "../../models/property/properties";
import PropertyCard from "../../components/property/property-card";

import "../../assets/css/property-card.css";
import Loader from "../loader";

type Props = {
  title: string;
  data: Properties;
};

const PropertyList: FunctionComponent<Props> = ({ title, data }) => {
  const { properties } = data;
  return (
    <div style={{ minHeight: "400px", backgroundColor: 'whitesmoke' }}>
      <div className="container p-5">
        <h2 className="my-4">{title} :</h2>

        {data ? (
          properties ? (
            <div className="d-flex flex-column flex-wrap justify-content-around">
              {properties.map((property) => (
                <PropertyCard key={property.idProperty} property={property} />
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
              <h4 className="center">
                Aucun bien de disponible pour le moment
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
