import React, { FunctionComponent } from "react";

import Properties from "../../models/property/properties";
import PropertyCard from "../../components/property/property-card";

import "../../assets/css/property-card.css";
import Loader from "../loader";

type Props = {
  data: Properties | null;
  title: string;
};

const PropertyList: FunctionComponent<Props> = ({ data, title }) => {
  const { properties } = data ?? { properties: null };

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
                Aucun {title.slice(0, -1).toLowerCase()} disponible
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
