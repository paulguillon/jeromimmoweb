import { FunctionComponent } from "react";
import Property from "../../models/property/property";
import "../../assets/css/property-card.css";
import Btn from "../../components/btn";
import PropertyMap from "../../components/property/property-map";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";

type Props = {
  property: Property

};

const PropertyCardDetail: FunctionComponent<Props> = ({ property }) => {
  const getTags = () => {
    const tags = property.data.filter((data) => data.valuePropertyData === "true")
    return (
      <div className="mt-3">
        {
          tags.map((tag) => (<span style={{ backgroundColor: '#495464', padding: ".2rem 1rem", fontSize: "12px", margin: "0rem 0.2rem" }} className="text-white rounded-pill d-inline-flex mb-2">{tag.keyPropertyData}{tag.valuePropertyData}</span>))
        }
      </div >
    )
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="mt-5 mb-5 p-2 border bg-dark-gray">
        <Btn texte="Liste des biens" go={-1} />
      </div>
      <div className="d-flex w-100 shadow-1 bg-white position-relative">
        <div className="w-75 m-2">
          <div className="d-flex border">
            <div className="w-50">
              {property.data.length > 0 && (
                property.data.map(data => (
                  data.keyPropertyData === 'thumbnail' && (
                    <img key={data.idPropertyData} src={data.valuePropertyData} alt="propertyImage" className="card-img-top" />
                  )
                ))
              )}
            </div>
            <div className="w-50 d-flex align-items-center justify-content-center flex-column ">
              <h4 className="font-weight-bold">{property.typeProperty}</h4>
              <h5 >
                {new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                }).format(Number(property.priceProperty))}
              </h5>
              <p> {`${property.cityProperty}, ${property.zipCodeProperty}`}</p>
            </div>
          </div>
          <div className="border border-top-0 border-bottom-0 pt-3 pb-3 px-3">
            <div>
              <h3 className="mb-2">Description du bien : </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum aliquid dignissimos quo voluptate praesentium dolore iure fugit. Mollitia cupiditate voluptatum ipsam optio officia. Molestiae ipsum quidem molestias quae voluptatibus!</p>
            </div>
            <div id="tag" className="pt-2 pb-2">
              {getTags()}
            </div>
          </div>
          <div id="containerMap" className="border">
            <PropertyMap localisation={property} />
          </div>
        </div>
        <div className="w-25">
          <div className="position-sticky top-0">
            <div className="w-100 m-2 shadow-1 d-flex ">
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
            <div className="w-100 m-2 shadow-1 border">Favoris</div>
            <div className="w-100 m-2 shadow-1 border">Contact Agence</div>
            <div className="w-100 m-2 shadow-1 border">Contact Agent</div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default PropertyCardDetail;