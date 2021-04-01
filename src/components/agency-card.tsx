import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Agency from '../models/agency';
import './agency-card.css';

type Props = {
  agency: Agency,
  borderColor?: string
};

const AgencyCard: FunctionComponent<Props> = ({ agency, borderColor = '#009688' }) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor('#f5f5f5');
  };

  const goToAgency = (idAgency: number) => {
    history.push(`/agency/${idAgency}`);
  }

  return (
    <div className="card border p-0 m-5">
      {agency.data.length > 0 && (
        agency.data.map(data => (
          data.keyAgencyData === 'thumbnail' && (
            <img src={data.valueAgencyData} alt="image" className="card-img-top" />
          )
        ))
      )}
      <div className="card-body">
        <h5 className="card-title">{agency.nameAgency}</h5>
        <p className="card-text">
          {agency.zipCodeAgency} {agency.cityAgency}
        </p>
        <button className="btn btn-primary" onClick={() => goToAgency(agency.idAgency)}>Détail</button>
      </div>
    </div>
  );
}

export default AgencyCard;