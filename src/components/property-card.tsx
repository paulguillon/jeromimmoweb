import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Property from '../models/property';
import './property-card.css';

type Props = {
  property: Property,
  borderColor?: string
};

const PropertyCard: FunctionComponent<Props> = ({property, borderColor = '#009688' }) => {

const [color, setColor] = useState<string>();
const history = useHistory();

const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor('#f5f5f5');
  };

const goToProperty = (idProperty: number) => {
    history.push(`/property/${idProperty}`);
  }
 
  return (
    <div className="card border p-0 m-5">
      {property.data.length > 0 && (
            property.data.map(data => (
              data.keyPropertyData === 'thumbnail' && (
                <img src={data.valuePropertyData} alt="image" className="card-img-top" />
              )
            ))
        )}
      <div className="card-body">
        <h5 className="card-title">{property.typeProperty}</h5>
        <p className="card-text">
        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(property.priceProperty))}
        </p>
        <button className="btn btn-primary" onClick={() => goToProperty(property.idProperty)}>Détail</button>
      </div>
    </div>
    // <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToProperty(property.idProperty)}>
    //   <div className="card horizontal" style={{ borderColor: color,maxHeight:'150px' }}>
    //     <div className="card-image" style={{ display: 'flex' }}>
    //       {property.data.length > 0 && (
    //         property.data.map(data => (
    //           data.keyPropertyData === 'thumbnail' && (
    //             <img src={data.valuePropertyData} alt="image" style={{ objectFit: 'cover',width:'100%' }} />
    //           )
    //         ))
    //       )}
    //     </div>
    //     <div className="card-stacked">
    //       <div className="card-content">
    //         <b style={{textTransform:'uppercase',display:'block',color:'#68b0ab'}}>{property.typeProperty}</b>
    //         <b style={{display:'block',color:'#495464'}}>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(property.priceProperty))}</b>
    //         <button className="waves-effect waves-light btn" style={{marginTop:'2rem'}} onClick={() => goToProperty(property.idProperty)}>Détails</button>
    //       </div>
    //     </div>
    //   </div>
    // </div >
  );
}
 
export default PropertyCard;