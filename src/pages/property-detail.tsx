import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Property from '../models/property';
import PropertyService from '../services/property-service';
import Loader from '../components/loader';
 
type Params = { idProperty: string };
 
const PropertyDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
   
  const [property, setProperty] = useState<Property|null>(null);
 
  useEffect(() => {
    PropertyService.getProperty(+match.params.idProperty).then(property => setProperty(property));
  }, [match.params.idProperty]);
   
  return (
    <div>
      { property ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ property.typeProperty }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <Link to={`/`} className="btn-floating halfway-fab waves-effect waves-light"><i className="material-icons">edit</i></Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Type</td> 
                        <td><strong>{ property.typeProperty }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Prix</td> 
                        <td><strong>{ property.priceProperty }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Code postal</td> 
                        <td><strong>{ property.zipCodeProperty }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Ville</td> 
                        <td><strong>{ property.cityProperty }</strong></td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
}
 
export default PropertyDetail;