
import { FunctionComponent, useState } from "react";
import { MapContainer, TileLayer, Marker, CircleMarker } from 'react-leaflet'
import L from "leaflet";
import "../../assets/css/leaflet.css"
import axios from "axios";
import Loader from "../loader";
import Property from "../../models/property/property";

type Props = {
    localisation: Property,
}

const PropertyMap: FunctionComponent<Props> = ({ localisation }) => {

    const [coor, setCoor] = useState<L.LatLngExpression>();
    const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${localisation.cityProperty}&postcode=${localisation.zipCodeProperty}&type=municipality`;

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
                    <Marker position={coor}> </Marker>
                    <CircleMarker center={coor} radius={40}></CircleMarker>
                </MapContainer>
            ) : (
                <Loader />
            )}

        </div>
    )
};

export default PropertyMap;