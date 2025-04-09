import React, { useState } from "react";
import Map from "../Components/Map";
import "./Body.css";

const Body = () => {
    //const [zoom, setZoom] = useState(13);

    /* const lowerZoom = () => {
        if (zoom > 1) {
            setZoom(value => value - 1);
        }
    }

    const increaseZoom = () => {
        if (zoom < 18) {
            setZoom(value => value + 1);
        }
    }

    useEffect(() => { console.log(zoom) }, [zoom]); */

  return (
    <>
    
{/*     <div id="buttonsHolder">
        <button id="btnIncrease" onClick={increaseZoom}>+</button>
        <button id="btnDecrease" onClick={lowerZoom}>-</button>
    </div>*/}
    <div id="mapHolder">
      <Map zoomValue={13} />
    </div> 
    </>
  );
};

export default Body;
