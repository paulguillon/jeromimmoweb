import { FunctionComponent } from "react";
import FavoriteList from "../../components/favorite/favorite-list";
import Property from "../../models/property/property";
import "../../assets/css/general.css";
type Props = {
    property: Property
}
const Favorites: FunctionComponent<Props> = ({ property }) => {

    return (
        <div>
            <header className="text-center p-5 mb-5">
                <h2>Mes Favoris</h2>
            </header>

            <div>
                <FavoriteList />
            </div>
        </div>
    )
};

export default Favorites;
