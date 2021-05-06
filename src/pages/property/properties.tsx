import React, { FunctionComponent, useState, useEffect } from "react";

import PropertyList from "../../components/property/property-list";
import PropertyFilter from "../../components/property/property-filter";
import Property from "../../models/property/property";
import PropertyService from "../../services/property-service";

type Filters = {
  type: string;
  min: string;
  max: string;
  zipCode: string;
  limit: string;
  offset: string;
};

const Properties: FunctionComponent = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.getProperties().then((properties) =>
      setProperties(Array.from(properties))
    );
  }, []);

  const updateFilters = (filtersFromChild: Filters) => {
    const { type, min, max, zipCode, limit, offset } = filtersFromChild;
    
    PropertyService.getProperties(
      type,
      min,
      max,
      zipCode,
      limit,
      offset
    ).then((properties) => setProperties(Array.from(properties)));
  };

  return (
    <div className="p-3">
      <PropertyFilter updateFilters={updateFilters} />
      <PropertyList properties={properties} title="Liste des biens" />
    </div>
  );
};

export default Properties;
