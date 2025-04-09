import React, { useState } from "react";
import { Marker } from "react-map-gl";

import "./Marker.css";
import { FaMapMarkerAlt } from "react-icons/fa";



const MarkerCasas = ({ latitude, longitude, nombre, direccion }) => {
    const [showInfo, setShowInfo] = useState(false);
    
    const handleClick = () => {
        console.log(direccion)
        setShowInfo(!showInfo);
    };

    const Modal = () => {
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2 className="modal-header">{nombre}</h2>
                    <button className="modal-close" onClick={() => setShowInfo(false)}>
                      &times;
                    </button>
                    <p className="modal-data">{direccion}</p>
                </div>
            </div>
        );
    }
    
    return (
        <div>
        <Marker latitude={latitude} longitude={longitude}>
            <FaMapMarkerAlt className="marker" onClick={handleClick} />
        </Marker>
        {showInfo && Modal()}
        </div>
    );
}

export default MarkerCasas;