import React from "react";
import Model from "./Model";
// ******************** GLB OBJECTS *************************
import H1 from './assets/3D/3D_GLB/house/house1.glb'
import H2 from './assets/3D/Done/building/building-school.glb'
import H3 from './assets/3D/Done/building/museam.glb'

function House() {
    return(
    <mesh>
        <House1  position={[20,0,-20]} rotation={[0,-Math.PI/2,0]} />
        <House2 position={[30,0,-60]} />
        <House3 position={[65,0,-62]} />
        
    </mesh>
    )
}
export default House
function House3(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={H3} />
    </mesh>
  )
}
function House1(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={H1} />
      </mesh>
    )
  }
  function House2(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={H2} />
      </mesh>
    )
  }
 