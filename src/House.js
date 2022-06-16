import React from "react";
import Model from "./Model";
// ******************** GLB OBJECTS *************************
import H1 from './assets/3D/3D_GLB/house/house1.glb'
import H2 from './assets/3D/Done/building/building-school.glb'
import H3 from './assets/3D/Done/building/museam.glb'
import H4 from './assets/3D/Done/building/building-bank.glb'
import company from './assets/3D/Done/building/company.glb'


function House() {
    return(
    <mesh>
        <House2 position={[30,0,-60]} />
        <House3 position={[65,0,-62]} />
        <House4 position={[95,0,-60]}/>
        <Company position={[-30,0,-60]} scale={0.5} />
        
    </mesh>
    )
}
export default House
function Company(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={company} />
    </mesh>
  )
}

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
  function House4(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={H4} />
      </mesh>
    )
  }
 