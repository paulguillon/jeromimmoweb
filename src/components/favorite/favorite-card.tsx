
import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';

import Property from '../../models/property/property';
import PropertyData from '../../models/property/propertyData';
import PropertyService from '../../services/property-service';
import Btn from '../btn';
import jwt_decode from "jwt-decode";

import "../../assets/css/favoris.css";
import FavoriteService from '../../services/favorite-service';
import FavBtn from './favorite-btn';

type Props = {
    idProperty: number
}

const FavoriteCard: FunctionComponent<Props> = ({ idProperty }) => {

    const [properties, setProperties] = useState<Property>();
    const [allData, setAllData] = useState<Array<PropertyData> | null>(null);
    const [favorite, setFavorite] = useState<string>("");

    const token = localStorage.token;
    const UserInfo: any = token ? jwt_decode(token) : "";

    const toggleFavorite = () => {
        if (token) {
            FavoriteService.toggleFavorite(token, UserInfo.idUser, idProperty);
            setFavorite(favorite === "true" ? "false" : "true");
        }
    }

    useEffect(() => {
        PropertyService.getProperty(idProperty).then(data => setProperties(data));
        PropertyService.getAllData(idProperty).then((data) => setAllData(data));
        if (token) {
            FavoriteService.getFavorite(token, UserInfo.idUser, idProperty).then(data => setFavorite(data ? "true" : "false"));
        }
    }, [idProperty])

    return (
        <div className="m-auto bg-white mb-4 shadow-1 d-flex">

            <div className="w-25 containerCardImg">
                {allData && (
                    allData?.map(data => (
                        data.keyPropertyData === 'thumbnail' && (
                            <img key={data.idPropertyData} src={data.valuePropertyData} alt="propertyImage" className="cardImg" />
                        )
                    ))
                )}
            </div>

            <div className="w-75 containerCardInformation">
                <h4>{properties?.typeProperty} <br /></h4>
                <h4>{properties?.cityProperty} <br /></h4>
                <h4>{properties?.zipCodeProperty} <br /></h4>
                <div id="container-button" className="d-flex justify-content-end">
                    <Btn texte="Accéder au bien" push={"/property/" + idProperty} />
                </div>
                {/* <div className="position-relative">
                    < FavBtn toggleFavorite={() => toggleFavorite()} favorite={favorite} />
                </div> */}
            </div>


        </div>
    )
}

export default FavoriteCard;


