import React from "react";
import Model from "./Model";
import {useCylinder} from '@react-three/cannon'
// ******************** GLB OBJECTS *************************
import TreeLimeGlb from "./assets/3D/3D_GLB/Nature/TreeLime.glb";
import TreeLimeGlb1 from "./assets/3D/3D_GLB/Nature/TreeLime1.glb"
import TreeRoundedGlb from "./assets/3D/3D_GLB/Nature/TreeRounded.glb";
import TreeRoundedGlb1 from "./assets/3D/3D_GLB/Nature/TreeRounded1.glb";

function Nature() {
    return(
    <mesh>
        <Tree3 position={[10,0,2]}/>
        <Tree4 position={[-10,0,2]}/>
        
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
  function Pillar({ args = [0.7, 0.7, 5, 16], ...props }) {
    const [ref] = useCylinder(() => ({ mass: 1, args, ...props }))
    return (
      <mesh ref={ref} castShadow>
        <cylinderGeometry args={args} />
        <meshNormalMaterial />
      </mesh>
    )
  }
export default Nature

