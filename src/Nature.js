import React from "react";
import Model from "./Model";
// ******************** GLB OBJECTS *************************
import TreeLimeGlb from "./assets/3D/3D_GLB/Nature/TreeLime.glb"
import TreeLimeGlb1 from "./assets/3D/3D_GLB/Nature/TreeLime1.glb"
import TreeLimeGlb2 from "./assets/3D/3D_GLB/Nature/TreeLime2.glb"
import TreeLimeGlb3 from "./assets/3D/3D_GLB/Nature/TreeLime3.glb"
import TreeLimeGlb4 from "./assets/3D/3D_GLB/Nature/TreeLime4.glb"
import TreeLimeGlb5 from "./assets/3D/3D_GLB/Nature/TreeLime5.glb"
import TreeRoundedGlb from "./assets/3D/3D_GLB/Nature/TreeRounded.glb"
import TreeRoundedGlb1 from "./assets/3D/3D_GLB/Nature/TreeRounded1.glb"
import TreeRoundedGlb2 from "./assets/3D/3D_GLB/Nature/TreeRounded2.glb"
import TreeRoundedGlb3 from "./assets/3D/3D_GLB/Nature/TreeRounded3.glb"
import TreeRoundedGlb4 from "./assets/3D/3D_GLB/Nature/TreeRounded4.glb"
import TreeRoundedGlb5 from "./assets/3D/3D_GLB/Nature/TreeRounded5.glb"
import grass from './assets/3D/Done/Grass_M/grass.glb'
import grass1 from './assets/3D/Done/Grass_M/grass1.glb'
import grass2 from './assets/3D/Done/Grass_M/grass2.glb'
import grass3 from './assets/3D/Done/Grass_M/grass3.glb'
import grass4 from './assets/3D/Done/Grass_M/grass-long.glb'
import grass5 from './assets/3D/Done/Grass_M/grass-long1.glb'
import grass6 from './assets/3D/Done/Grass_M/grass-long2.glb'
import grass7 from './assets/3D/Done/Grass_M/grass-long3.glb'
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

function Tree12(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeRoundedGlb5} />
    </mesh>
  )
}
function Tree11(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeRoundedGlb4} />
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
function Tree8(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeLimeGlb5} />
    </mesh>
  )
}
function Tree7(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeLimeGlb4} />
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
function Tree5(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={TreeLimeGlb2} />
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

