import '../../assets/css/login.css';

import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import User from '../../models/user/user';
import UserService from '../../services/user-service';
import Visits from '../../models/visit/visits';
import VisitService from '../../services/visit-service';
import jwt_decode from "jwt-decode";
import Loader from '../loader';
import VisitDetail from '../visit/visit-detail';

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

    UserService.updateUser(token, state).then(resp => setState(resp));
  };

  return (
    <div>

      <header className="text-center p-5 mb-5">
        <h2>Img Banniere profil</h2>
      </header>

      <div className="d-flex flex-column">

        <div className="m-auto w-75 container-form mb-5">
          <div className="w-100 d-flex flex-column justify-content-start ">
            <form action="" onChange={handleChange} onSubmit={handleSubmit}>
              <div id="profilChange" className="d-flex flex-column">
                <label>Nom
                  <input type="text" name="lastnameUser" defaultValue={state.lastnameUser} />
                </label>
                <label>Prénom
                  <input type="text" name="firstnameUser" defaultValue={state.firstnameUser} />
                </label>
                <label>Mail
                  <input type="email" name="emailUser" defaultValue={state.emailUser} />
                </label>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="center buttonForm w-25">Mettre à jour </button>
                </div>
              </div>
            </form>

            <div id="passwordChange" className="d-flex flex-column">
              <form action="" onChange={handleChange} onSubmit={handleSubmit}>
                <div id="profilChange" className="d-flex flex-column">
                  <label>Mot de passe
                    <input type="text" name="password" />
                  </label>
                  <label>Confirmation nouveau mot de passe
                    <input type="text" name="confirmPassword" />
                  </label>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="center buttonForm w-25">Mettre à jour </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="m-auto w-75 container-form  mb-5">
          {

            visits ? (
              visits.visits.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Sujet</th>
                      <th>Agent</th>
                      <th>Agence</th>
                      <th>Commentaire</th>
                      <th>Propriété</th>
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

        </div>
      </div>


    </div>
  )
}

export default Profile;


