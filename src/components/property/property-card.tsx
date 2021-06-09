import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import Property from "../../models/property/property";
import "../../assets/css/property-card.css";
type Props = {
  property: Property
}
const PropertyCard: FunctionComponent<Props> = ({ property }) => {
  const history = useHistory();

  const goToProperty = (idProperty: number) => {
    history.push(`/property/${idProperty}`);
  };

  const getTags = () => {
    const tags = property.data.filter((data) => data.valuePropertyData === "true")
    return (
      <div>
        {tags.map((tag) => (<span style={{ backgroundColor: 'lightgray', padding:".3rem 1rem" }} className="text-white rounded-pill d-inline-block mt-2 me-2">{tag.keyPropertyData}</span>))
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
      <div className="card-body">
        <h5 className="card-title">{property.typeProperty}</h5>
        <p className="card-text">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(Number(property.priceProperty))}
        </p>
        {`${property.cityProperty}, ${property.zipCodeProperty}`}
        <p>
        </p>
        <button
          className="btn btn-primary"
          onClick={() => goToProperty(property.idProperty)}
        >
          Détail
        </button>
        {getTags()}
      </div>
    </div>
  );
};

export default PropertyCard;
