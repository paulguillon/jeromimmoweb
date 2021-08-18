import { FunctionComponent, useEffect, useState } from "react";

import Property from "../../models/property/property";
import "../../assets/css/property-card.css";
import Btn from "../../components/btn";
import PropertyData from "../../models/property/propertyData";
import PropertyService from "../../services/property-service";
import jwt_decode from "jwt-decode";
import FavoriteService from "../../services/favorite-service";
import FavBtn from "../favorite/fav-btn";

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
    FavoriteService.getFavorite(token, UserInfo.idUser, property.idProperty).then(data => setFavorite(data ? "♥" : "○"));
  }, [UserInfo.idUser, property.idProperty, token]);

  const getTags = () => {
    const tags = allData?.filter((data) => data.valuePropertyData === "true")
    return (
      <div className="mt-3">
        {
          tags?.slice(0, 6).map(
            (tag) => (
              <span style={{ backgroundColor: '#495464', padding: ".2rem 1rem", fontSize: "12px", margin: "0.2rem" }} className="text-white rounded-pill d-inline-flex mb-2">{tag.keyPropertyData}</span>
            )
          )
        }
      </div >
    )
  }

  const toggleFavorite = () => {
    if (!token) {
      alert('Vous devez être connecté.e pour avoir accés aux favoris');
      return;
    }
    FavoriteService.toggleFavorite(token, UserInfo.idUser, property.idProperty);
    setFavorite(favorite === "♥" ? "○" : "♥");
  }

  return (
    <div id="containerPropertyCard" className="card d-flex flex-row border p-0 w-auto" style={{ height: "200px" }}>
      {
        allData &&
        allData.map(
          (data) =>
            data.keyPropertyData === "thumbnail" && (
              <div style={{ maxWidth: "250px" }}>
                <img
                  key={data.idPropertyData}
                  src={data.valuePropertyData}
                  alt="image_bien"
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "100%", backgroundPosition: "center" }}
                />
              </div>
            )
        )
      }
      <div className="card-body d-flex justify-content-around flex-column">
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
        <div id="container-button" className="d-flex justify-content-between align-items-center">
          {getTags()}
        </div>
        <div id="container-button" className="d-flex justify-content-end">
          <FavBtn toggleFavorite={() => toggleFavorite()} favorite={favorite} />
          <Btn texte="Voir le bien" push={"/property/" + property.idProperty} />
        </div>
      </div>
    </div >
  );
};

export default PropertyCard;
