
import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';

import jwt_decode from "jwt-decode";
import FavoriteService from '../../services/favorite-service';
import Favorite from '../../models/favorite/favorite';
import PropertyService from '../../services/property-service';
import Property from '../../models/property/property';
import FavoriteCard from './favorite-card';


const FavoriteList: FunctionComponent = () => {


    const [favorites, setFavorites] = useState<Favorite[]>([]);
    const [property, setProperties] = useState<Property>();

    const token: string = localStorage.token;
    const UserInfo: any = jwt_decode(token);

    useEffect(() => {
        FavoriteService.getFavorites(token, UserInfo.idUser).then(dataFavorites => setFavorites(dataFavorites));
        favorites.forEach(favoris => {
            PropertyService.getProperty(favoris.idProperty).then(dataProperty => setProperties(dataProperty));
        })
    }, [UserInfo.idUser, token])

    return (
        <div>
            <div className="m-auto w-50 mt-5  mb-5 container-form flex-column">
                <div>
                    {favorites.map((favoris) => (
                        <FavoriteCard key={favoris.idProperty} idProperty={favoris.idProperty} />
                    ))}
                </div >
            </div>
        </div>
    )
}

export default FavoriteList;


