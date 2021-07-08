
import { array } from "prop-types";
import { FunctionComponent, useState } from "react";
import Property from "../../models/property/property";

type Props = {
    favoris: Property,
}

const PropertyFav: FunctionComponent<Props> = ({ favoris }) => {

     let FavArray: any = [];
    localStorage.setItem("FavArray", JSON.stringify(FavArray));


    const [elementFav, setFav] = useState();

    const handleClick = (e: any) => {
        setFav(e.target.value);
        console.log(e.target.value);
        FavArray.push('test')
    };



    return (
        <div>
            <form action="">
                <button onClick={handleClick}>
                    {favoris.idProperty}
                </button>
            </form>
        </div>
    )
}

export default PropertyFav;