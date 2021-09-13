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
  tags: Array<string>;
  limit: string;
  offset: string;
};

const Properties: FunctionComponent = () => {
  const perPage = 9;
  
  const [properties, setProperties] = useState<TypeProperties>({ total: 0, properties: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState<Filters>({
    type: "",
    min: "",
    max: "",
    zipCode: "",
    tags: [],
    limit: perPage.toString(),
    offset: ""
  });


  useEffect(() => {
    PropertyService.getProperties(filters.type, filters.min, filters.max, filters.zipCode, filters.tags, perPage.toString(), offset.toString()).then((properties) =>
      setProperties(properties)
    );
  }, [filters.max, filters.min, filters.tags, filters.type, filters.zipCode, offset]);

  const updateFilters = (filtersFromChild: Filters) => {
    const { type, min, max, zipCode, tags } = filtersFromChild;

    setFilters({
      ...filters,
      type, min, max, zipCode, tags
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
      <PropertyList data={properties} title="Liste des biens" />
      <Pagination perPage={perPage} data={properties} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Properties;
