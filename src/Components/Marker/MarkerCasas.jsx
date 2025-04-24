import React, { useEffect, useState } from "react";
import { Marker } from "react-map-gl";

import "./Marker.css";
import { FaMapMarkerAlt } from "react-icons/fa";



const MarkerCasas = ({ latitude, longitude, nombre, direccion, grupo }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [color, setColor] = useState("rgb(238, 99, 82)");
    const [colorShadow, setColorShadow] = useState("rgba(238, 99, 82, 0.3)");
    const [colorHover, setColorHover] = useState("rgba(238, 99, 82, 0.3)");
    
    const handleClick = () => {
        setShowInfo(!showInfo);
    };

    useEffect(() => {
        switch (grupo) {
            case "1":
                setColor("rgb(238, 99, 82)"); // Rojo
                setColorShadow("rgba(238, 99, 82, 0.3)"); // Rojo
                setColorHover("rgba(238, 99, 82, 0.8)");
                break;
            case "2":
                setColor("rgb(63, 102, 52)"); // HUNTER GREEN
                setColorShadow("rgba(63, 102, 52, 0.3)"); // HUNTER GREEN
                setColorHover("rgba(63, 102, 52, 0.8)");
                break;
            case "3":
                setColor("rgb(21, 5, 120)"); //navy blue
                setColorShadow("rgba(21, 5, 120, 0.3)"); //navy blue
                setColorHover("rgba(21, 5, 120, 0.8)");
                break;
            case "4":
                setColor("rgb(203, 72, 183)"); // steel pink
                setColorShadow("rgba(203, 72, 183, 0.3)"); // steel pink
                setColorHover("rgba(203, 72, 183, 0.8)");
                break;
            case "5":
                setColor("rgb(89, 79, 59)"); // walnut brown
                setColorShadow("rgba(89, 79, 59, 0.3)"); // walnut brown
                setColorHover("rgba(89, 79, 59, 0.8)");
                break;
            case "6":
                setColor("rgb(15, 139, 141)"); // dark cyan
                setColorShadow("rgba(15, 139, 141, 0.3)"); // dark cyan
                setColorHover("rgba(15, 139, 141, 0.8)");
                break;
            case "7":
                setColor("rgb(71, 168, 189)"); // moonstone blue
                setColorShadow("rgba(71, 168, 189, 0.3)"); // moonstone blue
                setColorHover("rgba(71, 168, 189, 0.8)");
                break;
            default:
                setColor("rgb(238, 99, 82)"); // Rojo por defecto
                setColorShadow("rgba(238, 99, 82, 0.3)"); // Rojo por defecto
                setColorHover("rgba(238, 99, 82, 0.8)");
                break;
        }
    }, [grupo]);

    const Modal = () => {
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2 className="modal-header">{nombre}</h2>
                    <h3> Grupo {grupo} </h3>
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
            <FaMapMarkerAlt 
                className="marker" 
                style={
                    {
                        '--color' : color,
                        '--colorHover': colorHover,
                        '--colorShadow': colorShadow
                    }
                } 
                onClick={handleClick}
            />
        </Marker>
        {showInfo && Modal()}
        </div>
    );
}

export default MarkerCasas;