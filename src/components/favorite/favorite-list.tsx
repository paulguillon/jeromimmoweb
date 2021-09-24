
import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';

import jwt_decode from "jwt-decode";
import FavoriteService from '../../services/favorite-service';
import Favorite from '../../models/favorite/favorite';
import PropertyService from '../../services/property-service';
import Property from '../../models/property/property';
import FavoriteCard from './favorite-card';
import PropertyCard from '../property/property-card';


const FavoriteList: FunctionComponent = () => {

    const [favorites, setFavorites] = useState<Favorite[]>([]);
    const [property, setProperties] = useState<Property>();

    const token: string = localStorage.token;
    const UserInfo: any = jwt_decode(token);

    useEffect(() => {
        FavoriteService.getFavorites(token, UserInfo.idUser).then(dataFavorites => setFavorites(dataFavorites));
        favorites.forEach((favoris: any) => {
            PropertyService.getProperty(favoris.idProperty).then(dataProperty => setProperties(dataProperty));
        })
    }, [UserInfo.idUser, token])


    return (
        <div className="container p-5 m-auto">
            <div className="m-auto mt-5 mb-5  ">
                <div className="d-flex flex-wrap">
                    {Object.keys(favorites).map((favoris: any) => (
                        <FavoriteCard key={favorites[favoris].idProperty} idProperty={favorites[favoris].idProperty} />
                    ))}

                    {/* {favorites.map((favoris: any) => (
                        <FavoriteCard key={favorites[favoris].idProperty} idProperty={favorites[favoris].idProperty} />
                    ))} */}
                </div >
            </div>
        </div>
    )
}

export default FavoriteList;


