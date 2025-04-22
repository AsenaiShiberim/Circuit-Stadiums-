'use client';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';
import events from './events'





export default function Map() {
  const position = [51.505, -0.09];
  const zoom = 13;

  const icon = new Icon({
    iconUrl: './marker.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  });

  console.log(events)

  return (
    <div  className="content">
    

      <div className=" flex flex-col w-full h-full"> {/* <-- Outer padding */}
        <div className="h-20"></div>
          <MapContainer 
          center={position} 
          zoom={zoom}
           className="map-container">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon= {icon}>
              <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>

  );
}
