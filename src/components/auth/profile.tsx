import '../../assets/css/login.css';

import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import User from '../../models/user/user';
import UserService from '../../services/user-service';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';

type Props = {
  updateToken: Function
}

const Profile: FunctionComponent<Props> = ({ updateToken }) => {
  const history = useHistory();

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

  const token: string = localStorage.token;
  const UserInfo: any = jwt_decode(token);
  const timeSinceLogedIn: number = new Date().getTime() - new Date(UserInfo.exp * 1000).getTime();
  if (timeSinceLogedIn / 1000 / 3600 > 1) {
    updateToken(token);
    history.push('/logout');
  }

  useEffect(() => {
    UserService.getUser(token, UserInfo.idUser).then((user) => setState(user))
  }, [UserInfo.idUser, token])

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted");

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
      </div>
    </div>
  )
}

export default Profile;


