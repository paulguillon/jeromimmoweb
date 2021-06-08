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
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState({
    type: "",
    min: "",
    max: "",
    zipCode: ""
  });

  const perPage = 5;

  useEffect(() => {
    PropertyService.getProperties(filters.type, filters.min, filters.max, filters.zipCode, perPage.toString(), offset.toString()).then((properties) =>
      setProperties(properties)
    );
  }, [filters.max, filters.min, filters.type, filters.zipCode, offset]);

  const updateFilters = (filtersFromChild: Filters) => {
    const { type, min, max, zipCode } = filtersFromChild;

    setFilters({
      type, min, max, zipCode
    })
    setCurrentPage(1);
    setOffset(0);
  };

  const paginate = (page: number) => {
    setCurrentPage(page);
    setOffset((page - 1) * perPage);
  };

  return (
    <div>
      <PropertyFilter updateFilters={updateFilters} />
      <PropertyList properties={properties.properties} title="Liste des biens" />
      <Pagination perPage={perPage} nbProperties={properties.total} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Properties;
