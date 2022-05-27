import React from "react";
import Model from "./Model";
// ******************** GLB OBJECTS *************************
import H1 from './assets/3D/3D_GLB/house/house1.glb'

function House() {
    return(
    <mesh>
        <House1  position={[20,0,-20]} rotation={[0,-Math.PI/2,0]} />
    </mesh>
    )
}
export default House
function House1(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={H1} />
      </mesh>
    )
  }