import React, { FunctionComponent, useState, useEffect } from "react";

import PropertyList from "../../components/property/property-list";
import PropertyFilter from "../../components/property/property-filter";
import TypeProperties from "../../models/property/properties";
import PropertyService from "../../services/property-service";
import Pagination from "../../components/pagination";

type Filters = {
  type: string;
  min: string;
  max: string;
  zipCode: string;
  limit: string;
  offset: string;
};

const Properties: FunctionComponent = () => {
  const [properties, setProperties] = useState<TypeProperties>({
    total: 0,
    properties: []
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const perPage = 5;

  const offset = (currentPage - 1) * perPage;

  useEffect(() => {
    PropertyService.getProperties("", "", "", "", perPage.toString(), offset.toString()).then((properties) =>
      setProperties(properties)
    );
  }, [offset]);

  const updateFilters = (filtersFromChild: Filters) => {
    const { type, min, max, zipCode, limit, offset } = filtersFromChild;

    PropertyService.getProperties(type, min, max, zipCode, limit, offset).then(
      (properties) => setProperties(properties)
    );
  };

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <PropertyFilter updateFilters={updateFilters} />
      <PropertyList properties={properties.properties} title="Liste des biens" />
      {properties ? (
        <Pagination perPage={perPage} nbProperties={properties.total} currentPage={currentPage} paginate={paginate} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Properties;
