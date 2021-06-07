import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import Property from "../../models/property/property";
import PropertyCardDetail from "../../components/property/property-card-detail";
import PropertyService from "../../services/property-service";
import Loader from "../../components/loader";
import BackBtn from "../../components/back-btn";

type Params = { idProperty: string };

const PropertyDetail: FunctionComponent<RouteComponentProps<Params>> = ({
  match,
}) => {
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    PropertyService.getProperty(+match.params.idProperty).then((property) =>
      setProperty(property)
    );
  }, [match.params.idProperty]);

  return (
    <div>
      {property ? (
        <div>
          <PropertyCardDetail key={property.idProperty} property={property} />
          <BackBtn />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PropertyDetail;
