
import { FunctionComponent, useEffect, useState } from "react";
import Property from "../../models/property/property";

import PropertyMap from "../../components/property/property-map";
import jwt_decode from "jwt-decode";

import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import PropertyData from "../../models/property/propertyData";
import PropertyService from "../../services/property-service";
import ImgNotFound from "../../assets/img/imgNotFound.jpg";
import FavoriteService from "../../services/favorite-service";
import FavBtn from "../favorite/favorite-btn";



type Props = {
  property: Property
};

const PropertyCardDetail: FunctionComponent<Props> = ({ property }) => {

  const [allData, setAllData] = useState<Array<PropertyData> | null>(null);
  const [Data, setData] = useState<PropertyData>();
  const [favorite, setFavorite] = useState<string>("");

  const token = localStorage.token;
  const UserInfo: any = token ? jwt_decode(token) : "";

  useEffect(() => {
    PropertyService.getAllData(property.idProperty).then(
      (data) => setAllData(data)
    );
    PropertyService.getData(property.idProperty, "thumbnail").then((data) => setData(data));

    if (token) {
      FavoriteService.getFavorite(token, UserInfo.idUser, property.idProperty).then(data => setFavorite(data ? "true" : "false"));
    }
  }, [property.idProperty]);

  const toggleFavorite = () => {
    if (token) {
      FavoriteService.toggleFavorite(token, UserInfo.idUser, property.idProperty);
      setFavorite(favorite === "true" ? "false" : "true");
    }
  }

  const getTags = () => {
    const tags = allData?.filter((data) => data.valuePropertyData === "true")
    return (
      <div className="mt-3">
        {
          tags?.map((tag) => (<span style={{ backgroundColor: '#495464', padding: ".2rem 1rem", fontSize: "12px", margin: "0rem 0.2rem", borderRadius: "5px " }} className="text-white  d-inline-flex mb-2">{tag.keyPropertyData}</span>))
        }
      </div >
    )
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex w-100 position-relative">
        <div id="PropertyInformations" className="w-75 m-2 bg-white">
          <div className="d-flex">
            <div className="w-50">
              {Data ? (
                <img
                  key={Data.idPropertyData}
                  src={Data.valuePropertyData}

                  alt="propertyImage" className="img-fluid" width="100%"
                />
              ) : (
                <img
                  src={ImgNotFound}
                  alt="image_bien"
                  className="img-fluid" width="100%"
                />
              )
              }

            </div>
            <div className="w-50 d-flex align-items-center justify-content-center flex-column position-relative">
              <h3 className="font-weight-bold" >
                {new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                }).format(Number(property.priceProperty))}
              </h3>
              <h4 >{property.typeProperty}</h4>
              <p> {`${property.cityProperty}, ${property.zipCodeProperty}`}</p>
              {
                token &&
                <FavBtn toggleFavorite={() => toggleFavorite()} favorite={favorite} />
              }
            </div>
          </div>

          <div className="informationProperty my-5 mx-2">
            <h3>Détails du bien : </h3>
            {
              allData?.map(data => (
                data.keyPropertyData === 'Description' && (
                  <p>
                    {data.valuePropertyData}
                  </p>
                )
              ))}
            <h4>Informations supplémentaires : </h4>
            <ul>
              {allData && (
                allData?.map(data => (
                  data.keyPropertyData === 'Chambres' && (
                    <li>
                      {data.valuePropertyData}
                    </li>
                  )
                )))}
              {allData && (
                allData?.map(data => (
                  data.keyPropertyData === 'Nombre de pièces' && (
                    <li>
                      {data.valuePropertyData}
                    </li>
                  )
                )))}
              {allData && (
                allData?.map(data => (
                  data.keyPropertyData === 'Surface' && (
                    <li>
                      {data.valuePropertyData}
                    </li>
                  )
                )))}
            </ul>
            <div id="tag" className="pt-2 pb-2">
              {getTags()}
            </div>

          </div>

          <div id="containerMap" className="border">
            <PropertyMap localisation={property} />
          </div>
        </div>


        <div id="propertyWidgets" className="w-25 m-2 bg-white">
          <div className="position-sticky  propertyWidgetsPosition">
            <div className=" mb-2   bhutan">
              <h4>Contacter l'agence</h4>
              <a href="/contact" className="button">Contact</a>
            </div>
            <div className="w-100 mb-2 d-flex ">
              <div className="socialBtn">
                <FacebookShareButton url={"https://www.facebook.com/"}>
                  <FacebookIcon></FacebookIcon>
                </FacebookShareButton>
              </div>
              <div className="socialBtn">
                <TwitterShareButton url={"https://twitter.com/home"}>
                  <TwitterIcon></TwitterIcon>
                </TwitterShareButton>
              </div>
            </div>

          </div>
        </div>
      </div >
    </div >
  );

}

export default PropertyCardDetail;