import React, { Suspense,useRef,useState} from 'react'
import { useFrame } from '@react-three/fiber'
import { Physics, usePlane} from '@react-three/cannon'
import {  Environment,PerspectiveCamera,Sky} from '@react-three/drei'
import Vehicle from './Vehicle'
import { Vector3 } from 'three'
import { DoubleSide } from 'three'
import Briques from './Briques'
import Name from'./Name'
import Nature from './Nature'
import House from './House'
import Stone from './Stone'
import Description from './Description'
import Contact from './Contact'
import ImageLoader from './ImageLoader'

export default function App() {
    const camera = useRef(null)
    const  [vehiclepos, setvehiclepos] = useState(new Vector3( 0, -5, -8 ))
    useFrame(() => {    
     if(camera.current){
     camera.current.position.lerp(new Vector3(-vehiclepos.x.toFixed(0),-vehiclepos.y.toFixed(0)-10,-vehiclepos.z.toFixed(0)-20),0.03)
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
          <Description/>
          <Name />
          <Briques/>
          
        </Physics>
        <Suspense fallback={null}>
          <Environment preset="park" />
          <Sky sunPosition={[0,100,1000]} distance={1000000}  />
          <Nature/>
          <House/>
          <Stone/>
          <Contact/>
          
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



