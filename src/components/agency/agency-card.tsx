import React, { FunctionComponent } from 'react';
import Agency from '../../models/agency/agency';
import '../../assets/css/agency-card.css';
import Btn from '../../components/btn';

type Props = {
  agency: Agency,
};

const AgencyCard: FunctionComponent<Props> = ({ agency }) => {
  return (
    <div className="card border p-0">
      {agency.data.length > 0 && (
        agency.data.map(data => (
          data.keyAgencyData === 'thumbnail' && (
            <img key={data.idAgencyData} src={data.valueAgencyData} alt="agencyImage" className="card-img-top" />
          )
        ))
      )}
      <div className="card-body">
        <h4>{agency.nameAgency}</h4>

        <p className="card-text">
          Adresse :  {agency.cityAgency},  {agency.zipCodeAgency}
        </p>
        <Btn texte="Voir les détails" push={"/agency/" + agency.idAgency} />
      </div>
    </div>
  );
}

export default AgencyCard;