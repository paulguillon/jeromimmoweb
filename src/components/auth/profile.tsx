import '../../assets/css/login.css';

import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import User from '../../models/user/user';
import UserService from '../../services/user-service';

// import Visits from '../../models/visit/visits';
// import VisitService from '../../services/visit-service';
// import VisitDetail from '../visit/visit-detail';

import jwt_decode from "jwt-decode";
import Loader from '../loader';



const Profile: FunctionComponent = () => {


  const token: string = localStorage.token;
  const UserInfo: any = jwt_decode(token);

  useEffect(() => {
    UserService.getUser(token, UserInfo.idUser).then(data => setUser(data))
    // VisitService.getVisits(token, UserInfo.idUser).then(visits => setVisits(visits))
  }, [UserInfo.idUser, token])

  // const [visits, setVisits] = useState<Visits>({ total: 0, visits: [] });

  const [user, setUser] = useState<User>({
    idUser: UserInfo.idUser,
    lastnameUser: '',
    firstnameUser: '',
    emailUser: '',
    passwordUser: '',
    passwordUser_confirmation: '',
    created_at: '',
    created_by: 0,
    updated_at: '',
    updated_by: 0,
    idRoleUser: 0,
    data: []
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.target.forEach((input: HTMLInputElement) => {
      setUser({ ...user, [input.name]: input.value })
    });
    UserService.updateUser(token, user).then(resp => setUser(resp));

  };

  const handleChangePassword = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const handleSubmitPassword = (e: any) => {
    e.preventDefault();
    e.target.forEach((input: HTMLInputElement) => {
      setUser({ ...user, [input.name]: input.value })
    });
    UserService.updateUser(token, user).then(resp => setUser(resp));
  };


  return (
    <div>
      <header className="text-center p-5 mb-5">
        <h2>Votre Profil</h2>
      </header>

      <div className="d-flex flex-column">
        <div className="w-50 mb-5 m-auto">
          <div className="w-100 d-flex flex-column justify-content-start  container-form ">
            {user ? (
              <form action="" onChange={handleChange} onSubmit={handleSubmit}>
                <div id="profilChange" className="d-flex flex-column">
                  <label>Nom
                    <input type="text" name="lastnameUser" defaultValue={user.lastnameUser} />
                  </label>
                  <label>Prénom
                    <input type="text" name="firstnameUser" defaultValue={user.firstnameUser} />
                  </label>
                  <label>Mail
                    <input type="email" name="emailUser" defaultValue={user.emailUser} />
                  </label>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="center buttonForm w-25">Modifier</button>
                  </div>
                </div>
              </form>
            ) : (

              <Loader />

            )}

          </div>
        </div>

        <div className="w-50 mb-5 m-auto">
          <div className="w-100 d-flex flex-column justify-content-start container-form">
            {user ? (
              <form action="" onChange={handleChangePassword} onSubmit={handleSubmitPassword}>
                <div className="d-flex flex-column">
                  <label className="mb-3">
                    Nouveau mot de passe
                    <input type="password" name="passwordUser" defaultValue={user.passwordUser} />
                  </label>
                  <label> Confirmation nouveau mot de passe
                    <input type="password" name="passwordUser_confirmation" defaultValue={user.passwordUser_confirmation} />
                  </label>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="center buttonForm w-25">Modifier</button>
                  </div>
                </div>
              </form>
            ) : (

              <Loader />

            )}
          </div>
        </div>
        {/* 
        <div className="m-auto w-50 container-form  mb-5">
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

        </div> */}
      </div>


    </div>
  )
}

export default Profile;


