import React, { Suspense,useRef,useState} from 'react'
import { useFrame } from '@react-three/fiber'
import { Physics, useCylinder, usePlane,useBox} from '@react-three/cannon'
import {  Environment,PerspectiveCamera,Sky} from '@react-three/drei'
import Vehicle from './Vehicle'
import Textp from "./Text"
import { Vector3 } from 'three'
import { DoubleSide } from 'three'
import Briques from './Briques'
import Name from'./Name'
import Nature from './Nature'
import House from './House'



export default function App() {
    const camera = useRef(null)
    const pos=useRef(null)
    const  [vehiclepos, setvehiclepos] = useState(new Vector3( 0, -5, -8 ))
    useFrame(() => {    
     if(camera.current){
      camera.current.position.lerp(new Vector3(-vehiclepos.x.toFixed(0),-vehiclepos.y.toFixed(0)-10,-vehiclepos.z.toFixed(0)-15),0.03)
    //  setpos([-vehiclepos.x.toFixed(0),vehiclepos.y.toFixed(0)+2,-vehiclepos.z.toFixed(0)])
    if(pos){
      //console.log(pos)
    }
      
    }
      
    })
  return (
    <>
     
        <PerspectiveCamera 
        ref={camera}>
        <fog attach="fog" args={['#171720', 10, 50]} />
        <color attach="background" args={['#171720']} />
        <ambientLight color={0xffffff} intensity={0.5} />
        <directionalLight position={[200, 500, 300]} color={0xffffff} intensity={0.5} castShadow penumbra={1} />
        <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
          <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }}/>
          <Vehicle setvehiclepos={setvehiclepos}
          position={[0,4, 0]} camera={camera} rotation={[0,-Math.PI, 0]} angularVelocity={[0, 0.5, 0]} wheelRadius={0.3} />
          <Textp/>
          <Name />
          <Briques/>
          
        </Physics>
        <Suspense fallback={null}>
          <Environment preset="park" />
          <Sky ref={pos} />
          <Nature/>
          <House/>
        </Suspense>
        </PerspectiveCamera>
     
    </>
  )
}

function Plane(props) {
  const [ref] = usePlane(() => ({ type: 'Static', material: 'ground', ...props }))
  return (
    <group ref={ref}>
      <mesh receiveShadow  >
        <planeGeometry args={[10000, 10000]} />
        <meshStandardMaterial color="#696969"  side={DoubleSide} friction={0}/>
      </mesh>
    </group>
  )
}

function Pillar({ args = [0.4, 0.4, 1, 25], ...props }) {
  const [ref] = useCylinder(() => ({ mass: 600000, args, ...props }))
  return (
    <mesh ref={ref} castShadow>
      <cylinderGeometry args={args} />
      <meshNormalMaterial />
    </mesh>
  )
}


