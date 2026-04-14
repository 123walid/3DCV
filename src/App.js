import React, { Suspense, useState, useRef } from 'react'
import { Physics, usePlane } from '@react-three/cannon'
import { Environment, PerspectiveCamera, Sky } from '@react-three/drei'
import { Vector3, DoubleSide } from 'three'
import Vehicle from './Vehicle'
import Briques from './Briques'
import Name from './Name'
import Nature from './Nature'
import House from './House'
import Stone from './Stone'
import Description from './Description'
import Contact from './Contact'
import CardText from './CardText'
import { CameraFollow } from './CameraFollow'

export default function App() {
  const [tt, setText] = useState(-1)
  
  // Create ref to hold the vehicle mesh
  const vehicleTarget = useRef(null)

  // Text logic uses position directly from vehicle in useFrame in Vehicle component
  // OR we can just pass setText to Vehicle
  const checkTextZone = (pos) => {
    if (pos.x <= -50 && pos.x >= -170 && pos.z <= -20 && pos.z > -70) {
      setText(0)
    } else {
      setText(-1)
    }
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 20, 30]} fov={60} />
      
      {/* Camera follows the vehicle ref directly */}
      <CameraFollow target={vehicleTarget} />
      
      <fog attach="fog" args={['#171720', 20, 200]} />
      <color attach="background" args={['#171720']} />
      <ambientLight color={0xffffff} intensity={0.5} />
      <directionalLight position={[200, 500, 300]} color={0xffffff} intensity={0.5} castShadow penumbra={1} />
      
      <Physics broadphase="SAP" defaultContactMaterial={{ contactEquationRelaxation: 4, friction: 1 }}>
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
        
        <Vehicle 
          targetRef={vehicleTarget}  // Pass ref to attach to car
          onPositionChange={checkTextZone}  // For text zones only
          position={[0, 4, 0]} 
          rotation={[0, -Math.PI, 0]} 
        />
        
        <Description />
        <Name />
        <Briques />
      </Physics>
      
      {tt === 0 && (
        <>
          <CardText position={[-59, 22, -55]} text={" Click me "} fontSize={1.5} maxWidth={25} />
          <CardText position={[-102, 25, -55]} text={" Click me "} fontSize={1.5} maxWidth={25} />
          <CardText position={[-142, 20, -55]} text={" Click me "} fontSize={1.5} maxWidth={25} />
        </>
      )}
      
      <Suspense fallback={null}>
        <Environment preset="park" />
        <Sky sunPosition={[0, 100, 1000]} distance={1000000} />
        <Nature />
        <House />
        <Stone />
        <Contact />
      </Suspense>
    </>
  )
}

function Plane(props) {
  const [ref] = usePlane(() => ({ type: 'static', material: 'ground', ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10000, 10000]} />
      <meshStandardMaterial color="#696969" side={DoubleSide} />
    </mesh>
  )
}