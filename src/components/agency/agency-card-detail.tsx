import React, { FunctionComponent } from 'react';
import Agency from '../../models/agency/agency';

type Props = {
  agency: Agency
};

const AgencyCardDetail: FunctionComponent<Props> = ({ agency }) => {

  return (
    <div className=" container border p-0 m-5">

      <h4> Agence {agency.nameAgency}</h4>
      {agency.data.length > 0 && (
        agency.data.map(data => (
          data.keyAgencyData === 'thumbnail' && (
            <img key={data.idAgencyData} src={data.valueAgencyData} alt="agencyImage" className="card-img-top" />
          )
        ))
      )}
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