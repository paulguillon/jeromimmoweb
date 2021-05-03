import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/login.css';
import imageForm from '../../assets/img/imageForm.jpg';


function Login() {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setUserPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/")
        }
    }, [])


    async function login() {

        let item = { emailUser, passwordUser }
        let result = await fetch('http://jeromimmo.fr/public/index.php/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        let data = await result.json();

        if (data.status == "success" && data.token_type == "bearer") {
            localStorage.token = data.token;
            history.push("/");
        }
        if (data.message == "Unauthorized") {
            history.push("/login");
        }
    }
    return (
        <div className="m-auto w-25 container-form">
            <div className="w-100 d-flex flex-column justify-content-between ">
                <h1>Se connecter</h1>
                <div className="inputForm">
                    <input type="email" placeholder="E-mail" onChange={(e) => setEmailUser(e.target.value)}></input>
                </div>
                <div>
                    <input type="password" placeholder="Mot de passe" onChange={(e) => setUserPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="center buttonForm" onClick={login}>Connexion</button>
            </div>
        </div>
    )
}

export default Login


