import React, { useEffect, useState } from "react";
import { Source, Layer } from "react-map-gl";

const MapLines = ({ markerOne, markerTwo, markerThree, markerFour, cong }) => {
    const [rgba, setRgba] = useState("rgba(3, 170, 238, 0.5)");

    useEffect(() => {
        switch (cong) {
            case "juarez":
                setRgba("rgba(240, 35, 35, 0.5)")
                break;
        
            default:
                setRgba("rgba(3, 170, 238, 0.5)")
                break;
        }
    }, [cong, rgba])

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
          "line-color": rgba,
          "line-width": 5,
        }}
      />
    </Source>
  );
};

export default MapLines;
