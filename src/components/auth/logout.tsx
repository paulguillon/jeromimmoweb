
import { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "../../assets/css/logout.css";




type Props = {
    updateToken: Function
}

const Logout: FunctionComponent<Props> = ({ updateToken }) => {
    const history = useHistory();

    updateToken("")
    window.localStorage.removeItem("token");
    history.push('/logout');

    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        if (seconds >= 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
            if (seconds === 0) {
                history.push('/');
            }
        }
    });

    return (
        <div className=" w-50 m-auto d-flex justify-content-center flex-column">
            <div className="shadow-1 p-5 text-center containerLogout">
                <h2 className="colorLogout mb-1">Votre compte à bien été déconnecté</h2>
                <h3 className="mb-1">Vous serez redirigé dans</h3>
                <h2 className="colorLogout"> - {seconds}s - </h2>
            </div>
        </div>
    )
}
export default Logout;