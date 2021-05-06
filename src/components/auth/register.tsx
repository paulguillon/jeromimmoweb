function Register() {
    return (
        <div className="m-auto w-25 container-form">
            <div className="w-100 d-flex flex-column justify-content-between ">
                <h1>S'inscrire</h1>
                <div className="inputForm">
                    <input type="text" placeholder="Nom"></input>
                    <input type="text" placeholder="Prénom"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="tel" placeholder="Téléphone"></input>
                    <input type="date" placeholder="Date de naissance"></input>
                </div>
                <div>
                    <input type="password" placeholder="Mot de passe"></input>
                    <input type="password" placeholder="Verification Mot de passe"></input>
                </div>
                <button type="submit" className="center buttonForm">S'inscrire</button>
            </div>
        </div>
    )
}

export default Register;
