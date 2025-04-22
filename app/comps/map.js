'use client';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import events from './events';

export default function Map() {
  const position = [51.505, -0.09];
  const zoom = 13;

  const icon = new Icon({
    iconUrl: './marker.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="content">
      <div className="flex flex-col w-full h-full">
        <div className="h-20" />

        <MapContainer center={position} zoom={zoom} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {events.map((event) => (
            <Marker key={event.id} position={event.location} icon={icon}>
              <Popup>{event.description}</Popup>
            </Marker>
          ))}
        </MapContainer>
        
      </div>
    </div>
  );
}
