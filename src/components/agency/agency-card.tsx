import React, { FunctionComponent, useEffect, useState } from 'react';
import Agency from '../../models/agency/agency';
import '../../assets/css/agency-card.css';
import Btn from '../../components/btn';
import AgencyService from '../../services/agency-service';

type Props = {
  agency: Agency,
};

const AgencyCard: FunctionComponent<Props> = ({ agency }) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    AgencyService.getData(agency.idAgency, "thumbnail").then(data => setImage(data.valueAgencyData))
  }, [agency.idAgency])

  return (
    <div className="card border p-0">
      <img src={image} alt="agencyImage" className="card-img-top" />
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