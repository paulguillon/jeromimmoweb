
import { FunctionComponent, useState } from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from "leaflet";
import "../../assets/css/leaflet.css"
import axios from "axios";
import Loader from "../loader";


import Property from "../../models/property/property";

type Props = {
    property: Property,
}

const PropertyMap: FunctionComponent<Props> = ({ property }) => {

    let cityName = property.cityProperty;
    let postCode = property.zipCodeProperty;
    console.log(cityName);
    console.log(postCode);


    const [coor, setCoor] = useState<L.LatLngExpression>();

    const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${cityName}&postcode=${postCode}&type=municipality`;

    axios.get(apiUrl)
        .then((response) => response.data.features[0].geometry.coordinates)
        .then(localisationGPS => {
            setCoor([localisationGPS[1], localisationGPS[0]]);
        }).catch(err => {
            console.log(err);
        })

    return (
        <div id='leafletMap' style={{ maxHeight: "500px", overflow: "hidden" }}>
            {coor ? (
                <MapContainer center={coor} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={coor} > </Marker>
                </MapContainer>
            ) : (
                <Loader />
            )}
        </div>
    )
};

export default PropertyMap;