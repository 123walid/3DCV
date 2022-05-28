import React from "react";
import Model from "./Model";
// ******************** GLB OBJECTS *************************
import rocks1 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks2 from './assets/3D/Done/rocks/rocks-small1.glb'
import rocks3 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks4 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks5 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks6 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks7 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks8 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks9 from './assets/3D/Done/rocks/rocks-small.glb'
import rocks10 from './assets/3D/Done/rocks/rocks-small.glb'
import gc from './assets/3D/Done/rocks/ground-cracked.glb'
import gc1 from './assets/3D/Done/rocks/ground-cracked1.glb'
function Stone() {
    return(
    <mesh>
        <Stone1  position={[10,0.1,2]}  />
        <Stone2 position={[-10,0.1,2]}/>
        <Ground_Cracked1 position={[20,0.1,3]}  rotation={[0,-Math.PI/2,0]} />
        <Ground_Cracked2 position={[-20,0.1,-1]} />
    </mesh>
    )
}
export default Stone
function Stone1(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={rocks1} />
      </mesh>
    )
  }
  function Stone2(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={rocks2} />
      </mesh>
    )
  }
  function Ground_Cracked1(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={gc} />
      </mesh>
    )
  }
  function Ground_Cracked2(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={gc1} />
      </mesh>
    )
  }