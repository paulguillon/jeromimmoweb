import '../../assets/css/login.css';

import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import User from '../../models/user/user';
import UserService from '../../services/user-service';
import Visits from '../../models/visit/visits';
import VisitService from '../../services/visit-service';
import jwt_decode from "jwt-decode";
import VisitDetail from '../visit/visit-detail';
import Loader from '../loader';

const Profile: FunctionComponent = () => {

  const [state, setState] = useState<User>({
    idUser: 0,
    lastnameUser: '',
    firstnameUser: '',
    emailUser: '',
    created_at: '',
    created_by: 0,
    updated_at: '',
    updated_by: 0,
    idRoleUser: 0,
    data: []
  });

  const [visits, setVisits] = useState<Visits>({ total: 0, visits: [] });

  const token: string = localStorage.token;
  const UserInfo: any = jwt_decode(token);

  useEffect(() => {
    UserService.getUser(token, UserInfo.idUser).then(data => setState(data))
    VisitService.getVisits(token, UserInfo.idUser).then(visits => setVisits(visits))
  }, [UserInfo.idUser, token])

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    e.target.forEach((input: HTMLInputElement) => {
      setState({ ...state, [input.name]: input.value })
    });

    UserService.updateUser(token, state).then(resp => console.log(resp));
  };

  return (
    <div className="m-auto w-75 container-form">
      <div className="w-100 d-flex flex-column justify-content-start ">
        <h1>Profil</h1>
        <form action="" onChange={handleChange} onSubmit={handleSubmit}>
          <h2>Mes informations</h2>
          <div className="w-25">
            <label>Nom
              <input type="text" name="lastnameUser" defaultValue={state.lastnameUser} />
            </label>
            <label>Prénom
              <input type="text" name="firstnameUser" defaultValue={state.firstnameUser} />
            </label>
            <label>Mail
              <input type="email" name="emailUser" defaultValue={state.emailUser} />
            </label>
            <button type="submit" className="center buttonForm">Modifier</button>
          </div>
        </form>
        <details>
          <summary>Mes rendez-vous</summary>
          {visits ? (
            visits.visits.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Sujet</th>
                    <th>Agent</th>
                    <th>Agence</th>
                    <th>Commentaire</th>
                    <th>Propiété</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.visits.map(
                    visit => (
                      <VisitDetail key={visit.idVisit} visit={visit} token={token} />
                    ))}
                </tbody>
              </table>
            ) : (
              <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                <h4 className="center">
                  Vous n'avez aucun rendez-vous
                </h4>
              </div>
            )
          ) : (
            <Loader />
          )}
        </details>
      </div>
    </div>
  )
}

export default Profile;


