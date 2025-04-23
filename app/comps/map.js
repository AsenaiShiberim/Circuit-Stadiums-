"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import events from "./events";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Map() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on first render
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Update localStorage when favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites)
  }, [favorites]);

  const handleSavedFavorites = (eventId) => {
    if (favorites.includes(eventId)) {
      setFavorites(favorites.filter((id) => id !== eventId));
    } else {
      setFavorites([...favorites, eventId]);
    }
  };

  const handleRemoveFavorites = (eventId) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== eventId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  

  const icon = new Icon({
    iconUrl: "./darkmarker.png",
    iconSize: [41, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="content">
      <div className="flex flex-col w-full h-full">
        <div className="h-20" />

        <MapContainer center={[51.505, -0.09]} zoom={13} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {events.map((event) => (
            <Marker key={event.id} position={event.location} icon={icon}>
              <Popup>
                <div className="card-container">
                  <h1 className="event-title">{event.title}</h1>

                  <div className="event-desc-wrapper">
                    <h2 className="event-desc">{event.description}</h2>
                  </div>

                  <div className="bottom-card-elements">
                    <h3>{event.date}</h3>
                    <Link
                      href={event.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/youtube.png"
                        alt="watch the video"
                        width={25}
                        height={25}
                      />
                    </Link>
                  </div>

                  {/* fav icon */}
                  <div
                    className="fav-icon cursor-pointer"
                    onClick={() => handleSavedFavorites(event.id)}
                  >
                    <Image
                      src={
                        favorites.includes(event)
                          ? "/starfilled.png"
                          : "/staroutline.png"
                      }
                      width={25}
                      height={25}
                      alt="Saved icon"
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="fav-container">
  <h1 className="fav-section">Saved Section</h1>
  {favorites
    .map((id) => events.find((event) => event.id === id))
    .filter(Boolean) // remove undefined in case id not found
    .map((event) => (
      <ul key={event.id}>
        <li>
          <h1>{event.title}</h1>
          <h2>{event.description}</h2>
        </li>
      </ul>
    ))}
</div>


        </div>
      </div>
    
  );
}
