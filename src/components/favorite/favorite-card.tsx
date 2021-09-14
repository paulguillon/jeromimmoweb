
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
import ImgNotFound from "../../assets/img/imgNotFound.jpg";

type Props = {
    idProperty: number
}

const FavoriteCard: FunctionComponent<Props> = ({ idProperty }) => {

    const [properties, setProperties] = useState<Property>();
    const [allData, setAllData] = useState<Array<PropertyData> | null>(null);
    const [favorite, setFavorite] = useState<string>("");
    const [Data, setData] = useState<PropertyData>();

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
        PropertyService.getData(idProperty, "thumbnail").then((data) => setData(data));

        if (token) {
            FavoriteService.getFavorite(token, UserInfo.idUser, idProperty).then(data => setFavorite(data ? "true" : "false"));
        }
    }, [idProperty])

    return (
        <div id="containerFavoriteCard" className="m-auto bg-white mb-4 shadow-1">
            <div className="containerThumbnailCard position-relative">
                {Data ? (
                    <img
                        key={Data.idPropertyData}
                        src={Data.valuePropertyData}
                        alt="image_bien"
                        className="thumbnailCard"
                    />
                ) : (
                    <img
                        src={ImgNotFound}
                        alt="image_bien"
                        className="thumbnailCard"
                    />
                )
                }
                {
                    token &&
                    <FavBtn toggleFavorite={() => toggleFavorite()} favorite={favorite} />
                }
            </div>

            <div className="containerCardInformation card-body d-flex justify-content-around flex-column position-relative">
                <h4>{properties?.typeProperty} <br /></h4>
                <h4>{properties?.cityProperty} <br /></h4>
                <h4>{properties?.zipCodeProperty} <br /></h4>
                <div id="container-button" className="d-flex justify-content-end">
                    <Btn texte="Voir le bien" push={"/property/" + idProperty} />
                </div>

            </div>


        </div>
    )
}

export default FavoriteCard;


