import React from "react";
import { Source, Layer } from "react-map-gl";

const MapLines = ({ markerOne, markerTwo, markerThree, markerFour }) => {

  const dataOne = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [markerOne, markerTwo],
        [markerThree, markerFour],
      ],
    },
  };

  return (
    <Source
      id={`line-source-${markerOne}-${markerTwo}`}
      type="geojson"
      data={dataOne}
    >
      <Layer
        id={`line-layer-${markerOne}-${markerTwo}`}
        type="line"
        source={`line-source-${markerOne}-${markerTwo}`}
        layout={{
          "line-join": "round",
          "line-cap": "round",
        }}
        paint={{
          "line-color": "rgba(3, 170, 238, 0.5)",
          "line-width": 5,
          "line-dasharray": [2, 2] 
        }}
      />
    </Source>
  );
};

export default MapLines;
