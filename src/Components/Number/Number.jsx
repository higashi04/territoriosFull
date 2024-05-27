import React from "react";
import { Marker } from "react-map-gl";
import "./Number.css";

const Number = ({ num, text }) => {
  return (
    <>
      <Marker latitude={num.lat} longitude={num.lng}>
        <span className="markerNumber"> {text} </span>
      </Marker>
    </>
  );
};

export default Number;
