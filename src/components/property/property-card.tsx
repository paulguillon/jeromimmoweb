import { FunctionComponent, useEffect, useState } from "react";

import Property from "../../models/property/property";
import "../../assets/css/property.css";
import Btn from "../../components/btn";
import PropertyData from "../../models/property/propertyData";
import PropertyService from "../../services/property-service";
import jwt_decode from "jwt-decode";
import FavoriteService from "../../services/favorite-service";
import FavBtn from "../favorite/favorite-btn";

type Props = {
  property: Property
}
const PropertyCard: FunctionComponent<Props> = ({ property }) => {

  const [allData, setAllData] = useState<Array<PropertyData> | null>(null);
  const [favorite, setFavorite] = useState<string>("");

  const token = localStorage.token;
  const UserInfo: any = token ? jwt_decode(token) : "";


  useEffect(() => {
    PropertyService.getAllData(property.idProperty).then((data) => setAllData(data));
    if (token) {
      FavoriteService.getFavorite(token, UserInfo.idUser, property.idProperty).then(data => setFavorite(data ? "true" : "false"));
    }

  }, [UserInfo.idUser, property.idProperty, token]);


  const toggleFavorite = () => {
    if (token) {
      FavoriteService.toggleFavorite(token, UserInfo.idUser, property.idProperty);
      setFavorite(favorite === "true" ? "false" : "true");
    }
  }

  return (
    <div id="containerPropertyCard" className=" d-flex flex-column  border p-0  mb-3 "  >
      {
        allData &&
        allData.map(
          (data) =>
            data.keyPropertyData === "thumbnail" && (
              <div className="containerThumbnailCard position-relative">
                <img
                  key={data.idPropertyData}
                  src={data.valuePropertyData}
                  alt="image_bien"
                  className="thumbnailCard"
                />
                {
                  token &&
                  <FavBtn toggleFavorite={() => toggleFavorite()} favorite={favorite} />
                }
              </div>
            )
        )
      }
      <div className="card-body d-flex justify-content-around flex-column position-relative">
        <h4 className="card-title font-weight-bold">{property.typeProperty}</h4>
        <h5 className="card-text">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(Number(property.priceProperty))}
        </h5>
        {`${property.cityProperty}, ${property.zipCodeProperty}`}
        <p>
        </p>

        <div id="container-button" className="d-flex justify-content-end">
          <Btn texte="Voir le bien" push={"/property/" + property.idProperty} />
        </div>


      </div>
    </div >
  );
};

export default PropertyCard;
