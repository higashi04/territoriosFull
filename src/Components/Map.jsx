import React, { useState, useEffect } from "react";
import ReactMapGl from "react-map-gl";
import Papa from 'papaparse';

import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

import MarkerCasas from "./Marker/MarkerCasas";
import CSVUploader from "./CSVUploader/CSVUploader";
/* import MapLines from "./Lines/MapLines";
import LinesDataGuerr from "../helpers/LinesDataGuerr";

import Number from "./Number/Number";
import Numbers from "../helpers/Numbers"; */

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
  const [coordinates, setCoordinates] = useState([]);
  const [csv, setCsv] = useState(null);

  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      zoom: zoomValue,
    }));
  }, [zoomValue]);

  useEffect(() => {
    const fetchCSV = async () => {
        const parsedData = Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            
            const coordinatesArray = results.data.map(row => {
              console.log(row)
              const [lat, lng] = row.Coordenadas.split(",").map(coord => parseFloat(coord.trim()));
              return {
                nombre: row.Nombre,
                direccion: row.Direccion,
                latitude: lat,
                longitude: lng,
              };
            });
            setCoordinates(coordinatesArray);
          },
        });
        console.log(parsedData);
    }
    if(csv) {
      fetchCSV();
    }
  }, [csv])

  const handleViewPortChange = (viewportValue) => {
    setViewport(viewportValue.viewState);
  };

  const handleClick = (event) => {
    const { lngLat } = event;
    console.log(lngLat);
    console.log(map)
  };

  return (
    <div id="showMap">
      <CSVUploader setFile={setCsv} />
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
        touchZoom={false}
        scrollZoom={true}
        touchRotate={true}
        onClick={handleClick}
      >
       {
        coordinates.map(marker => {
          return (
            <MarkerCasas
              key={marker.nombre}
              latitude={marker.latitude}
              longitude={marker.longitude}
              nombre={marker.nombre}
              direccion={marker.direccion}
            />
          )
        })
       } 
{/*         {map && LinesDataGuerr.map((line, index) => (
          <MapLines
            key={index}
            markerOne={line.lngOne}
            markerTwo={line.latOne}
            markerThree={line.lngTwo}
            markerFour={line.latTwo}
          />
        ))} */}

{/*         {
          map && Numbers.map((num, index) => <Number key={index} num={num} text={index + 1} />)
        } */}

      </ReactMapGl>
    </div>
  );
};

export default Map;
