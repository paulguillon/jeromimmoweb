import Favorite from './favorite';

export default class Favorites {
    total: number;
    favorites: Array<Favorite>;

    constructor(
        total: number,
        favorites: Array<Favorite>,
    ) {
        this.total = total;
        this.favorites = favorites;
    }
}