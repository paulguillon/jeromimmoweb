import React, { FunctionComponent, useEffect, useState } from 'react';
import Agency from '../../models/agency/agency';
import AgencyService from '../../services/agency-service';

type Props = {
  agency: Agency
};

const AgencyCardDetail: FunctionComponent<Props> = ({ agency }) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    AgencyService.getData(agency.idAgency, "thumbnail").then(data => setImage(data?.valueAgencyData));
  }, [agency.idAgency])

  return (
    <div className=" container border p-0 m-5">
      <h4> Agence {agency.nameAgency}</h4>
      <img src={image} alt="agencyImage" className="card-img-top" />

      <ul>
        <li>Adresse :  Lorem ipsum dolor sit amet.</li>
        <li>Ville : {agency.cityAgency}</li>
        <li>Code Postal : {agency.zipCodeAgency}</li>
        <li>Numéro de téléphone : </li>
      </ul>

      <button>Contact L'agence</button>
    </div>
  );
}

export default AgencyCardDetail;