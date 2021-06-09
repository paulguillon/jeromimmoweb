import React, { FunctionComponent } from 'react';
import Agency from '../../models/agency/agency';

type Props = {
  property: Agency
};

const AgencyCardDetail: FunctionComponent<Props> = ({ property }) => {

  return (
    <div className="card border p-0 m-5">
      {property.data.length > 0 && (
        property.data.map(data => (
          data.keyAgencyData === 'thumbnail' && (
            <img key={data.idAgencyData} src={data.valueAgencyData} alt="agencyImage" className="card-img-top" />
          )
        ))
      )}
      <div className="card-body">
        <h5 className="card-title">{property.nameAgency}</h5>
        <p className="card-text">

        </p>
        <tr>
          <td>Ville</td>
          <td><strong>{property.cityAgency}</strong></td>
        </tr>
      </div>
    </div>
  );
}

export default AgencyCardDetail;