import React from 'react'
import { Marker } from "react-map-gl";

const Number = ({num, text}) => {
  return (
    <>
     <Marker latitude={num.lat} longitude={num.lng} > {text} </Marker> 
    </>
  )
}

export default Number
