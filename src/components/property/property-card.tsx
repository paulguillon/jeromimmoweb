import { FunctionComponent } from "react";

import Property from "../../models/property/property";
import "../../assets/css/property-card.css";
import Btn from "../../components/btn";

type Props = {
  property: Property
}
const PropertyCard: FunctionComponent<Props> = ({ property }) => {

  const getTags = () => {
    const tags = property.data.filter((data) => data.valuePropertyData === "true")
    const lastItem = tags[tags.length - 1];
    console.log(lastItem);
    return (
      <div className="mt-3">
        {
          tags.slice(0, 6).map((tag) => (<span style={{ backgroundColor: '#495464', padding: ".2rem 1rem", fontSize: "12px", margin: "0.2rem" }} className="text-white rounded-pill d-inline-flex mb-2">{tag.keyPropertyData}</span>))
        }
      </div >
    )
  }

  return (
    <div className="card d-flex flex-row border p-0 w-100" style={{ height: "200px" }}>
      {property.data.length > 0 &&
        property.data.map(
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
          <Btn texte="Voir le bien" push={"/property/" + property.idProperty} />
        </div>
      </div>
    </div >
  );
};

export default PropertyCard;
