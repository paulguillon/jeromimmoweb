import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Property from "../../models/property/property";
import PropertyCardDetail from "../../components/property/property-card-detail";
import PropertyService from "../../services/property-service";
import Loader from "../../components/loader";
import Btn from "../../components/btn";

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
          <Btn texte="Retour à la liste" go={-1}/>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PropertyDetail;
