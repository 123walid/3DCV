import React, { Suspense,useEffect,useRef,useState} from 'react'
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
import CardText from './CardText'
export default function App() {
    const camera = useRef(null)

    const  [vehiclepos, setvehiclepos] = useState(new Vector3( 0, -5, -8 ))
    useFrame(() => {    
     if(camera.current){
     camera.current.position.lerp(new Vector3(-vehiclepos.x.toFixed(0),-vehiclepos.y.toFixed(0)-10,-vehiclepos.z.toFixed(0)-20),0.03)
     
    }
    ShowText(0)
    })
 const [tt,setText]= useState(-1)
 const ShowText=(key)=>{
  if(vehiclepos.x.toFixed(0)<=-50 && vehiclepos.x.toFixed(0)>=-170 && vehiclepos.z<=-20 && vehiclepos.z>-70){
    setText(key)
  }else{
    setText(-1)
  }
 }
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
        {tt=== 0 && <CardText position={[-59,22,-55]} text={" Click me "} fontSize={1.5} maxWidth={25} />}
        {tt=== 0 && <CardText position={[-102,25,-55]} text={" Click me "} fontSize={1.5} maxWidth={25} />}
        {tt=== 0 && <CardText position={[-142,20,-55]} text={" Click me "} fontSize={1.5} maxWidth={25} />}

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



