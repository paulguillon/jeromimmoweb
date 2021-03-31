import React, { FunctionComponent, useState, useEffect } from 'react';
import Agency from '../models/agency';
import AgencyCard from '../components/agency-card';
import AgencyService from '../services/agency-service';
// import PropertySearch from '../components/agency-search';
import Loader from '../components/loader';

const AgencyList: FunctionComponent = () => {
  const [agencies, setAgencies] = useState<Agency[]>([]);

  useEffect(() => {
    AgencyService.getAgencies().then(agencies => setAgencies(agencies));
  }, []);

  return (
    <div className="p-3">
      <h1 className="center">Agences</h1>
      <div className="container"> 
      { agencies ? (
        <div className="row justify-content-center">
            {/* <AgencySearch /> */}
            {agencies.map(agency => (
                <AgencyCard key={agency.idAgency} agency={agency}/>
            ))}
        </div>
        ) : (
            <h4 className="center"><Loader /></h4>
          )}
      </div>
    </div> 
  );
}

export default AgencyList;