import React from "react";
import "./CSVUploader.css";

const CSVUploader = ({ setFile }) => {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(!file) return;

        setFile(file);
    }

    return (
        <div className="csv-main">
            <label htmlFor="csvInput" className="csv-label">Cargar Archivo CSV: </label>
            <input type="file" name="csvInput" accept=".csv" onChange={handleFileChange} />
        </div>
    )
}

export default CSVUploader;