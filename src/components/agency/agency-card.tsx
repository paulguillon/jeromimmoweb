import React, { FunctionComponent } from 'react';
import Agency from '../../models/agency/agency';
import '../../assets/css/agency-card.css';
import Btn from '../../components/btn';

type Props = {
  agency: Agency,
};

const AgencyCard: FunctionComponent<Props> = ({ agency }) => {
  return (
    <div className="card border p-0 m-5">
      {agency.data.length > 0 && (
        agency.data.map(data => (
          data.keyAgencyData === 'thumbnail' && (
            <img key={data.idAgencyData} src={data.valueAgencyData} alt="agencyImage" className="card-img-top" />
          )
        ))
      )}
      <div className="card-body">
        <h5 className="card-title">{agency.nameAgency}</h5>
        <p className="card-text">
          {agency.zipCodeAgency} {agency.cityAgency}
        </p>
        <Btn texte="Détails" push={"/agency/" + agency.idAgency} />
      </div>
    </div>
  );
}

export default AgencyCard;