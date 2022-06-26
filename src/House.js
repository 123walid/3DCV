import React,{useState,useCallback,useEffect,forwardRef,useRef} from "react";
import Model from "./Model";
import * as THREE from 'three'
import {  useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Float, TransformControls, QuadraticBezierLine, Backdrop, ContactShadows } from '@react-three/drei'
// ******************** GLB OBJECTS *************************
import H1 from './assets/3D/3D_GLB/house/house1.glb'
import H2 from './assets/3D/Done/building/building-school.glb'
import H3 from './assets/3D/Done/building/museam.glb'
import H4 from './assets/3D/Done/building/building-bank.glb'
import company from './assets/3D/Done/building/company.glb'
import company1 from './assets/3D/Done/building/building-office-rounded.glb'
import company2 from './assets/3D/Done/building/building-office-pyramid.glb'
import CardText from "./CardText"
import goal from './assets/3D/Done/goal.glb'


import ImageLoader from "./ImageLoader";
import img from './assets/elgazela.png';
import prologic from './assets/prol.jpg'
import telecome from './assets/telecome.jpg'
function House() {
  const [txt,setTxt] =useState(-1);
  
  const handleActive=(key)=>{
    setTxt(key===txt ? -1 : key);
  }
 const [hovered, setHover] = useState(false)
 useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
 const onPointerOver = useCallback(() => setHover(true), [])
  const onPointerOut = useCallback(() => setHover(false), [])
  const Ship = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')
    return (
      <group ref={ref} {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Cube005.geometry} material={materials.Mat0} />
        <mesh castShadow receiveShadow geometry={nodes.Cube005_1.geometry} material={materials.Mat1} material-color="black" />
        <mesh castShadow receiveShadow geometry={nodes.Cube005_2.geometry} material={materials.Mat2} material-envMapIntensity={0.2} material-color="black" />
        <mesh castShadow receiveShadow geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
        <mesh castShadow receiveShadow geometry={nodes.Cube005_5.geometry} material={materials.Mat3} />
        <mesh castShadow receiveShadow geometry={nodes.Cube005_6.geometry} material={materials.Window} />
      </group>
    )
  })
  const Spaceman = forwardRef(({ children, ...props }, ref) => {
    const { nodes, materials } = useGLTF('/Astronaut-transformed.glb')
    return (
      <mesh
        castShadow
        receiveShadow
        ref={ref}
        {...props}
        geometry={nodes.Astronaut_mesh.geometry}
        material={materials.Astronaut_mat}
        material-envMapIntensity={0}
        dispose={null}>
        {children}
      </mesh>
    )
  })
    return(
    <mesh>
        <House2 position={[30,0,-60]} />
        <House3 position={[65,0,-62]} />
        <House4 position={[95,0,-60]}/>
       <ImageLoader img={img} scaleX={7} scaleY={5} position={[-57,16,-56.7]} />
        <ImageLoader img={prologic} scaleX={7} scaleY={5} position={[-100,16,-56]} />
        <ImageLoader img={telecome} scaleX={7} scaleY={5} position={[-140,15,-56.7]} />
        <Goal position={[-90,0,-19]} rotation={[0,-Math.PI/2,0]} scale={[0.05,0.07,0.06]} />
        <Ship position={[-110,8,0]} scale={4} rotation={[0,Math.PI/4,0]} />
        <Spaceman position={[-116,6,3]} />
        <Company onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={()=>handleActive(0)}  position={[-60,0,-60]}  scale={0.5}  />
        <Company1 onPointerOver={onPointerOver} onPointerOut={onPointerOut}  onClick={()=>handleActive(1)} position ={[-140,0,-60]}   scale={0.5}/>
        <Company2 onPointerOver={onPointerOver} onPointerOut={onPointerOut}  onClick={()=>handleActive(2)} position ={[-100,0,-60]}   scale={0.5}/>
        
        {txt===0 && <CardText position={[-54,3.3,-57]} text={"Development of agricultural products traceability application with blockchain technology                      03/2021 - 06/2021"} fontSize={1.5} maxWidth={25} />}
        {txt===1 && <CardText position={[-137,3.3,-60]} text={" -Introduction to working life  -Discovering group work  -Maintenance of IT equipments  01/2019 - 02/2019"} fontSize={1.5} maxWidth={25} />}
        {txt===2 && <CardText position={[-97,3.3,-57]} text={" Development of a desktop data managment application           01/2020 - 02/2020  "} fontSize={1.5} maxWidth={25} />}



    </mesh>
    )
}
export default House
function Goal(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={goal} />
    </mesh>
  )
}
function Company2(props ) {
  return (
      
    <mesh  {...props}  >
     <Model onClick={props.onClick} obj={company2} />
    </mesh>
  )
}
function Company1(props ) {
  return (
      
    <mesh  {...props}  >
     <Model onClick={props.onClick} obj={company1}  />
    </mesh>
  )
}
function Company(props ) {
  return (
      
    <mesh   {...props}  >
     <Model onClick={props.onClick} obj={company}  />
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
