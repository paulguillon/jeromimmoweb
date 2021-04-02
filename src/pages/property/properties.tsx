import React, { FunctionComponent } from 'react';
import PropertyList from '../../components/property/property-list';
// import PropertySearch from '../../components/property-search';
import Loader from '../../components/loader';
import { randomInt } from 'node:crypto';

const Properties: FunctionComponent = () => {

  return (
    <div className="p-3">
        <PropertyList title="Liste des biens"/>
    </div> 
  );
}

export default Properties;