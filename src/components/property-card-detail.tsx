import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Property from '../models/property';

type Props = {
  property: Property
};

const PropertyCardDetail: FunctionComponent<Props> = ({ property }) => {

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
        <tr>
          <td>Type</td>
          <td><strong>{property.typeProperty}</strong></td>
        </tr>
        <tr>
          <td>Prix</td>
          <td><strong>{property.priceProperty}</strong></td>
        </tr>
        <tr>
          <td>Code postal</td>
          <td><strong>{property.zipCodeProperty}</strong></td>
        </tr>
        <tr>
          <td>Ville</td>
          <td><strong>{property.cityProperty}</strong></td>
        </tr>
      </div>
    </div>
    // <div className="row">
    //   <div className="col s12 m8 offset-m2"> 
    //     <h2 className="header center">{ property.typeProperty }</h2>
    //     <div className="card hoverable"> 
    //       <div className="card-image">
    //         <Link to={`/`} className="btn-floating halfway-fab waves-effect waves-light"><i className="material-icons">edit</i></Link>
    //       </div>
    //       <div className="card-stacked">
    //         <div className="card-content">
    //           <table className="bordered striped">
    //             <tbody>
    //               <tr> 
    //                 <td>Type</td> 
    //                 <td><strong>{ property.typeProperty }</strong></td> 
    //               </tr>
    //               <tr> 
    //                 <td>Prix</td> 
    //                 <td><strong>{ property.priceProperty }</strong></td> 
    //               </tr> 
    //               <tr> 
    //                 <td>Code postal</td> 
    //                 <td><strong>{ property.zipCodeProperty }</strong></td> 
    //               </tr> 
    //               <tr> 
    //                 <td>Ville</td> 
    //                 <td><strong>{ property.cityProperty }</strong></td> 
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //         <div className="card-action">
    //           <Link to="/">Retour</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PropertyCardDetail;