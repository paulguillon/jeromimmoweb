import React, { FunctionComponent, useState, useEffect } from 'react';
import Agency from '../../models/agency/agency';
import AgencyCard from '../../components/agency/agency-card';
import AgencyService from '../../services/agency-service';
import Loader from '../../components/loader';

const AgencyList: FunctionComponent = () => {
  const [agencies, setAgencies] = useState<Agency[]>([]);

  useEffect(() => {
    AgencyService.getAgencies().then(agencies => setAgencies(agencies));
  }, []);

  return (
    <div>
      <div className="text-center bg-black">
        <h2> Texte Présentation + image de fond</h2>
        <h4>Contactez-nous btn</h4>
      </div>

      <div className="container mt-5">

        <h3>Liste de nos agences en France :</h3>

        {agencies ? (
          <div className="row justify-content-start flex-wrap">
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