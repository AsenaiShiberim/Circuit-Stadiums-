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
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] =useState(false)



  //filter events by category or id

  

  const [filteredEvents, setFilteredEvents] = useState(events);

useEffect(() => {
  setLoading(true);

  const timeout = setTimeout(() => {
    const filtered = events.filter((event) =>
      event.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
    setLoading(false);
  }, 500); // Simulate delay

  return () => clearTimeout(timeout);
}, [searchQuery]);

console.log(events.link)



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
    console.log(favorites);
  }, [favorites]);

  const handleSavedFavorites = (eventId) => {
    if (favorites.includes(eventId)) {
      setFavorites(favorites.filter((id) => id !== eventId));
    } else {
      setFavorites([...favorites, eventId]);
    }
  };

  

  const icon = new Icon({
    iconUrl: "./location.png",
    iconSize: [41, 41],
    iconAnchor: [12, 41],
  });


  

  return (
    <div className="content">
      {loading && (
            <div className="absolute top-2 left-1/2 transform-translate-x-1/2 z-{10000}">
              <Image src = '/loading.png' alt = 'loading...' width ={60} height = {60} />
            </div>
          )}
      
      <div className="flex flex-col w-4/5 h-full">
      <h1 className="text-4xl font-extrabold ">Circuits & Stadiums</h1>

        


        

        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className="map-container"
          zoomAnimation={true}
        >

          
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          

          {filteredEvents.map((event) => (<Marker key={event.id} position={event.location} icon={icon}>
  <Popup>
    <div className="card-container">
      <h1 className="event-title">{event.title}</h1>

      <div className="event-desc-wrapper">
        <h2 className="event-desc">{event.description}</h2>
      </div>

      <div className="bottom-card-elements">
        <h3>{event.date}</h3>
      </div>

      {/* fav icon and wikipedia link with flexbox */}
      <div className="flex justify-between items-center">
        {/* Fav icon */}
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

        {/* Wikipedia link */}
        <div className="flex justify-center items-center">
          <Link href={event.link} target="_blank" rel="noopener noreferrer">
            <Image
              src="/wikipedia1.png"
              alt="watch the video"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
    </div>
  </Popup>
</Marker>

            
           
          ))}
        </MapContainer>
      </div>
      <div className="fav-container">
      <div className="search-container">
        <input
              type ='text'
              placeholder="Search for an event"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

              className="search-input"
              />

      </div>
        <h1 className="fav-section">Saved Section</h1>
        {favorites
          .map((id) => events.find((event) => event.id === id))
          .filter(Boolean)
          .map((event) => (
            <div
              key={event.id}
              className="fav-card"
              onClick={() => handleSavedFavorites(event.id)}
            >
              <h1 className="fav-title">{event.title}</h1>
              <p className="fav-desc">{event.description}</p>
              <Image
                src="/remove.png"
                width={15}
                height={15}
                alt="remove icon"
              />

              {/* You can add more like event.date, event.category, etc. */}
            </div>
          ))}
      </div>
      
      
    </div>
  );
  };
