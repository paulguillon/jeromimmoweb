import React, { FunctionComponent, useEffect, useState } from 'react';
import Agency from '../../models/agency/agency';
import '../../assets/css/agency.css';
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
    <div id="containerCardAgency" className="border p-0 ">
      <div className="containerThumbnailCard">
        <img src={image} alt="agencyImage" className="thumbnailCard" />
      </div>
      <div className="card-body">
        <h4>Agence : {agency.nameAgency}</h4>

        <p className="card-text">
          Adresse :  {agency.cityAgency},  {agency.zipCodeAgency}
        </p>
        <div className="d-flex justify-content-end">
          <Btn texte="+ d'infos" push={"/agency/" + agency.idAgency} />
        </div>
      </div>
    </div>
  );
}

export default AgencyCard;