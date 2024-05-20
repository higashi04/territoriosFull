import React, { useState, useEffect } from "react";
import ReactMapGl from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

import MapLines from "./Lines/MapLines";
import LinesData from "../helpers/LinesData";
import LinesDataGuerr from "../helpers/LinesDataGuerr";

// eslint-disable-next-line import/no-webpack-loader-syntax
//import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

const Map = ({ zoomValue }) => {
  const [viewport, setViewport] = useState({
    latitude: 27.47831211042798,
    longitude: -99.50316097790483,
    zoom: zoomValue,
    width: "100%",
    height: "100%",
  });
  const [map, setMap] = useState(null);

  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      zoom: zoomValue,
    }));
  }, [zoomValue]);

  const handleViewPortChange = (viewportValue) => {
    console.log(map ? "hi" : "bye")
    setViewport(viewportValue.viewState);
  };

  const handleClick = (event) => {
    const { lngLat } = event;
    console.log(lngLat);
  };

  return (
    <div id="showMap">
      <ReactMapGl
        {...viewport}
        ref={(el) => setMap(el)}
        onMove={handleViewPortChange}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle={process.env.REACT_APP_MAP_STYLE}
        transitionDuration="500"
        interactive={true}
        dragPan={true}
        dragRotate={true}
        touchZoom={true}
        touchRotate={true}
        onClick={handleClick}
      >
        {LinesData.map((line, index) => (
          <MapLines
            key={index}
            markerOne={line.lngOne}
            markerTwo={line.latOne}
            markerThree={line.lngTwo}
            markerFour={line.latTwo}
            cong={line.cong}
          />
        ))}
        {LinesDataGuerr.map((line, index) => (
          <MapLines
            key={index}
            markerOne={line.lngOne}
            markerTwo={line.latOne}
            markerThree={line.lngTwo}
            markerFour={line.latTwo}
            cong={line.cong}
          />
        ))}
      </ReactMapGl>
    </div>
  );
};

export default Map;
