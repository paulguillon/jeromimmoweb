import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
        console.log(emailUser, passwordUser);
        let item = { emailUser, passwordUser }
        let result = await fetch('http://jeromimmo.fr/public/index.php/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        history.push("/");
    }
    return (
        <div>
            <h1>Se connecter</h1>
            <input type="email" placeholder="E-mail" onChange={(e) => setEmailUser(e.target.value)}></input>
            <input type="password" placeholder="Mot de passe" onChange={(e) => setUserPassword(e.target.value)}></input>
            <button type="submit" onClick={login}>Connexion</button>
        </div>
    )
}

export default Login