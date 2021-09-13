import React, { FunctionComponent, useState, useEffect } from 'react';
import AgencyCard from '../../components/agency/agency-card';
import AgencyService from '../../services/agency-service';
import Loader from '../../components/loader';
import Agency from '../../models/agency/agency';

const AgencyList: FunctionComponent = () => {
  const [agencies, setAgencies] = useState<Agency[]>();

  useEffect(() => {
    AgencyService.getAgencies().then(agencies => setAgencies(agencies));
  }, []);
  return (
    <div>
      <header className="text-center p-5 mb-5">
        <h2>Découvrir nos agences en France </h2>
      </header>

      <div className="container mt-5">
        {agencies ? (
          <div className="row justify-content-center flex-wrap">
            {agencies.map(agency => (
              <AgencyCard key={agency.idAgency} agency={agency} />
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