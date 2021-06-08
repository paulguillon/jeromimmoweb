import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import Property from "../../models/property/property";
import "../../assets/css/property-card.css";

type Props = {
  property: Property;
  borderColor?: string;
};

const PropertyCard: FunctionComponent<Props> = ({
  property,
}) => {
  const history = useHistory();

  const goToProperty = (idProperty: number) => {
    history.push(`/property/${idProperty}`);
  };

  return (
    <div className="card border p-0 sm:w-100" style={{ width: "calc(33.333% - 20px)" }}>
      {property.data.length > 0 &&
        property.data.map(
          (data) =>
            data.keyPropertyData === "thumbnail" && (
              <img
                key={data.idPropertyData}
                src={data.valuePropertyData}
                alt="image_bien"
                className="card-img-top"
                height="200px"
                style={{ objectFit: "cover" }}
              />
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
        <button
          className="btn btn-primary"
          onClick={() => goToProperty(property.idProperty)}
        >
          Détail
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
