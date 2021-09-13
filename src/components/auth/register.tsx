import React, { useState } from 'react';

const Register = () => {

    const [lastnameUser, setLastName] = useState('');
    const [firstnameUser, setFirstName] = useState('');
    const [emailUser, setMail] = useState('');
    const [passwordUser, setPassword] = useState('');
    const [passwordUser_confirmation, setPasswordUser_confirmation] = useState('');

    const submit = async (e: any) => {
        e.preventDefault();
        const response = await fetch("http://jeromimmo.fr/public/index.php/api/v1/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    lastnameUser,
                    firstnameUser,
                    emailUser,
                    passwordUser,
                    passwordUser_confirmation,
                    idRoleUser: 2,
                })
            });
        const content = await response.json();
        console.log(content);
    }

    return (
        <div className="m-auto w-25 container-form">
            <div className="w-100 d-flex flex-column justify-content-between ">
                <h1>S'inscrire</h1>
                <form action="" onSubmit={submit}>
                    <div className="inputForm">
                        <input type="text" name="lastnameUser" placeholder="Nom" onChange={e => setLastName(e.target.value)} />
                        <input type="text" name="firstnameUser" placeholder="Prénom" onChange={e => setFirstName(e.target.value)} />
                        <input type="email" name="emailUser" placeholder="E-mail" onChange={e => setMail(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" name="passwordUser" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
                        <input type="password" name="passwordUser_confirmation" placeholder="Vérification mot de passe " onChange={e => setPasswordUser_confirmation(e.target.value)} />

                    </div>
                    <button type="submit" className="center buttonForm">S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Register;