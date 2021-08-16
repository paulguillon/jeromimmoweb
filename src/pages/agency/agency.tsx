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
      <header className="text-center text-white bg-black">
        <h2> Texte Présentation + image de fond</h2>
        <h4>Contactez-nous btn</h4>
      </header>

      <div className="container mt-5">
        <h3>Liste de nos agences en France :</h3>
        {agencies ? (
          <div className="row justify-content-between flex-wrap">
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