import { useState } from 'react';
import '../../assets/css/login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function Login() {

    const [user, setUser] = useState({});
    const history = useHistory();

    const handleChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post("http://jeromimmo.fr/public/index.php/api/v1/login", user)
            .then(data => {
                localStorage.setItem('token', data.data.token);
                if (data.data.status === "success" && (data.data.token_type === "bearer")) {
                    localStorage.token = data.data.token;
                    console.log(localStorage.token);
                    history.push("/");
                }
                if (data.data.message === "Unauthorized") {
                    history.push("/login?=Unauthorized");
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="m-auto w-25 container-form">
            <div className="w-100 d-flex flex-column justify-content-between ">
                <form action="" onChange={handleChange} onSubmit={handleSubmit}>
                    <h1>Se connecter</h1>
                    <div className="inputForm">
                        <input type="email" name="emailUser" placeholder="E-mail" ></input>
                    </div>
                    <div>
                        <input type="password" name="passwordUser" placeholder="Mot de passe" />
                    </div>
                    <button type="submit" className="center buttonForm">Connexion</button>
                </form>
                <a className="mt-4 text-decoration-underline">Mot de passe oublié ?  </a>
                <a href="/register" className="mt-2 text-decoration-underline" >S'inscrire</a>
            </div >
        </div >
    )
}

export default Login;


