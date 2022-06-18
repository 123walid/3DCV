import React from "react";
import Model from "./Model";
// ******************** GLB OBJECTS *************************
import TreeLimeGlb from "./assets/3D/3D_GLB/Nature/TreeLime.glb"
import TreeLimeGlb1 from "./assets/3D/3D_GLB/Nature/TreeLime1.glb"
import TreeLimeGlb3 from "./assets/3D/3D_GLB/Nature/TreeLime3.glb"
import TreeRoundedGlb from "./assets/3D/3D_GLB/Nature/TreeRounded.glb"
import TreeRoundedGlb1 from "./assets/3D/3D_GLB/Nature/TreeRounded1.glb"
import TreeRoundedGlb2 from "./assets/3D/3D_GLB/Nature/TreeRounded2.glb"
import TreeRoundedGlb3 from "./assets/3D/3D_GLB/Nature/TreeRounded3.glb"
import grass from './assets/3D/Done/Grass_M/grass.glb'
import grass1 from './assets/3D/Done/Grass_M/grass1.glb'
import grass2 from './assets/3D/Done/Grass_M/grass2.glb'
import grass3 from './assets/3D/Done/Grass_M/grass3.glb'
import grass4 from './assets/3D/Done/Grass_M/grass-long.glb'
import grass5 from './assets/3D/Done/Grass_M/grass-long1.glb'
import well from './assets/3D/Done/well.glb'
import f1 from './assets/3D/Done/carnations.glb'
import cannon from './assets/3D/Done/cannon/cannon.glb'
import cannon1 from './assets/3D/Done/cannon/cannon1.glb'
import cannon2 from './assets/3D/Done/cannon/cannon2.glb'
import cballs from './assets/3D/Done/cannon/cannonballs.glb'
import cballs1 from './assets/3D/Done/cannon/cannonballs1.glb'
import cballs2 from './assets/3D/Done/cannon/cannonballs2.glb'

function Nature() {
    return(
    <mesh>
        <Tree3 position={[10,0,2]}/>
        <Tree4 position={[-10,0,2]}/>

        <Tree1 position={[20,0,3]} />
        <Tree2 position={[22,0,-3]} />
        <Grass position={[22,0.1,-3]} />
        <Grass2 position={[22,0.1,-3]} rotation={[0,Math.PI/2,0]}/>

        <Tree9 position ={[40,0,-7]} scale={2} />
        <Grass1 position={[40,0.1,-7]} />
        <Grass3 position={[40,0.1,-7]} rotation={[0,Math.PI/2,0]} />

        <Tree10 position={[-20,0,-1]} scale={2} />
        
        <Tree6 position={[-27,0,1]}  />
        <Grass4 position={[-27,0.1,1]}  />
        <Grass5 position={[-27,0.1,1]} rotation={[0,Math.PI/2,0]} />
        <Well  position={[30,0.1,-18]}  scale={3} rotation={[0,Math.PI/2,0]} />
        <Flower1  position={[27,0.1,-18]}  scale={2} />
        <Cannon position={[50,0.1,-18]} scale={2} />
        <CannonBalls2 position={[54,0.1,-18]} scale={2}   />
        <Cannon1 position={[60,0.1,-18]} scale={2} />
        <CannonBalls1 position={[64,0.1,-18]} scale={2}   />
        <Cannon2 position={[70,0.1,-18]} scale={2} />
        <CannonBalls position={[74,0.1,-18]} scale={2}   />
        
    </mesh>
    )
}
function CannonBalls2(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={cballs2} />
    </mesh>
  )
}
function CannonBalls1(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={cballs1} />
    </mesh>
  )
}
function CannonBalls(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={cballs} />
    </mesh>
  )
}
function Cannon2(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={cannon2} />
    </mesh>
  )
}
function Cannon1(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={cannon1} />
    </mesh>
  )
}
function Cannon(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={cannon} />
    </mesh>
  )
}
function Flower1(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={f1} />
    </mesh>
  )
}
function Well(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={well} />
    </mesh>
  )
}

function Grass5(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={grass5} />
    </mesh>
  )
}
function Grass4(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={grass4} />
    </mesh>
  )
}
function Grass3(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={grass3} />
    </mesh>
  )
}
function Grass2(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={grass2} />
    </mesh>
  )
}
function Grass1(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={grass1} />
    </mesh>
  )
}
function Grass(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={grass} />
    </mesh>
  )
}
function Tree10(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeRoundedGlb3} />
    </mesh>
  )
}
function Tree9(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeRoundedGlb2} />
    </mesh>
  )
}
function Tree6(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeLimeGlb3} />
    </mesh>
  )
}

function Tree1(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={TreeLimeGlb} />
      </mesh>
    )
  }

  function Tree2(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={TreeLimeGlb1} />
      </mesh>
    )
  }
  function Tree3(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={TreeRoundedGlb} />
      </mesh>
    )
  }
  function Tree4(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={TreeRoundedGlb1} />
      </mesh>
    )
  }
export default Nature

