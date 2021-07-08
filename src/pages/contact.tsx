import { FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
    return (
        <div>

            <header className="bg-black p-5 text-center text-white">
                <h2>Formulaire de contact</h2>
            </header>

            <div className="container pb-5 pt-5">
                <div className="bg-white">
                    <form action="">
                        <div className="d-flex">
                            <div className="w-50 m-2">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" name="nom" placeholder="Nom" />
                            </div>
                            <div className="w-50  m-2">
                                <label htmlFor="prenom">Prénom</label>
                                <input type="text" name="prenom" placeholder="Prénom" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50  m-2">
                                <label htmlFor="mail">E-mail</label>
                                <input type="email" name="mail" placeholder="Mail" />
                            </div>
                            <div className="w-50  m-2">
                                <label htmlFor="telephone">Téléphone</label>
                                <input type="text" name="telephone" placeholder="Numéro de téléphone" />
                            </div>
                        </div>
                        <div>
                            <div className="m-2">
                                <label htmlFor="message">Sujet</label>
                                <input type="text" placeholder="Sujet de votre message" />
                            </div>
                            <div className="m-2">
                                <label htmlFor="">Message</label>
                                <textarea style={{ height: "200px" }} name="message" id=""></textarea>
                            </div>
                        </div>
                        <div className="m-2">
                            <button type="submit" className="center buttonForm">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact