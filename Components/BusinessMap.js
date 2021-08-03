import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
//import MapMarkers from "./MapMarkers";

const BusinessMap = () => {
  const [selected, setSelected] = useState({});

  const [visible, setVisible] = useState(false);

  const onSelect = (item) => {
    setSelected(item);
    setVisible(true);
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  let iconSize = 50;

  const locations = [
    {
      name: "Location 1",
      title: "Coffee Shop",
      location: {
        lat: 41.3954,
        lng: 2.162,
      },
      icon: {
        url: `https://www.flaticon.com/svg/static/icons/svg/3448/3448415.svg`,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        size: new google.maps.Size(iconSize, iconSize),
        scaledSize: new google.maps.Size(iconSize, iconSize),
      },
    },
    {
      name: "Location 2",
      title: "Fast Food",
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
      icon: {
        url: `https://www.flaticon.com/svg/static/icons/svg/3448/3448499.svg`,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        size: new google.maps.Size(iconSize, iconSize),
        scaledSize: new google.maps.Size(iconSize, iconSize),
      },
    },
    {
      name: "Location 3",
      title: "Hospital",
      location: {
        lat: 41.3773,
        lng: 2.1585,
      },
      icon: {
        url: `https://www.flaticon.com/svg/static/icons/svg/3448/3448513.svg`,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        size: new google.maps.Size(iconSize, iconSize),
        scaledSize: new google.maps.Size(iconSize, iconSize),
      },
    },
    {
      name: "Location 4",
      title: "Restaurant",
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
      icon: {
        url: `https://www.flaticon.com/svg/static/icons/svg/3448/3448653.svg`,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        size: new google.maps.Size(iconSize, iconSize),
        scaledSize: new google.maps.Size(iconSize, iconSize),
      },
    },
    {
      name: "Location 5",
      title: "Restaurant",
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
      icon: {
        url: `https://www.flaticon.com/svg/static/icons/svg/3448/3448447.svg`,
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        size: new google.maps.Size(iconSize, iconSize),
        scaledSize: new google.maps.Size(iconSize, iconSize),
      },
    },
  ];

  return (
    <div className="map-container">
      <Map
        google={window.google}
        containerStyle={containerStyle}
        onClick={() => setVisible(false)}
        initialCenter={{
          lat: 41.3954,
          lng: 2.162,
        }}
        zoom={13}
      >
        {locations.map((item) => {
          return (
            <Marker
              title={item.title}
              position={item.location}
              icon={item.icon}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            visible={visible}
            onCloseClick={() => setSelected({})}
          >
            <div className="business-detail">
              <strong className="name">{selected.name}</strong>
              <strong className="title">{selected.title}</strong>
            </div>
          </InfoWindow>
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCE1d8UvAk-Jj9eW0v4yzMrA3AEozhwEe8",
})(BusinessMap);
