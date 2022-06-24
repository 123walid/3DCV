import React,{useState,useCallback,useEffect} from "react";
import Model from "./Model";
// ******************** GLB OBJECTS *************************
import H1 from './assets/3D/3D_GLB/house/house1.glb'
import H2 from './assets/3D/Done/building/building-school.glb'
import H3 from './assets/3D/Done/building/museam.glb'
import H4 from './assets/3D/Done/building/building-bank.glb'
import company from './assets/3D/Done/building/company.glb'
import company1 from './assets/3D/Done/building/building-office-rounded.glb'
import company2 from './assets/3D/Done/building/building-office-pyramid.glb'
import CardText from "./CardText"
import fence from './assets/3D/Done/fence/fence.glb'
import fence1 from './assets/3D/Done/fence/fence1.glb'
import fence2 from './assets/3D/Done/fence/fence2.glb'
import fence3 from './assets/3D/Done/fence/fence3.glb'
import fence4 from './assets/3D/Done/fence/fence4.glb'
import fence5 from './assets/3D/Done/fence/fence5.glb'
import fence6 from './assets/3D/Done/fence/fence6.glb'
import fence7 from './assets/3D/Done/fence/fence7.glb'
import fence8 from './assets/3D/Done/fence/fence8.glb'
import fence9 from './assets/3D/Done/fence/fence9.glb'
import fence10 from './assets/3D/Done/fence/fence10.glb'
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

    return(
    <mesh>
        <House2 position={[30,0,-60]} />
        <House3 position={[65,0,-62]} />
        <House4 position={[95,0,-60]}/>
       <ImageLoader img={img} scaleX={7} scaleY={5} position={[-57,16,-56.7]} />
        <ImageLoader img={prologic} scaleX={7} scaleY={5} position={[-100,16,-56]} />
        <ImageLoader img={telecome} scaleX={7} scaleY={5} position={[-140,15,-56.7]} />
        <Fence position={[-62,0,-20]}  scale={[4,3,1]} />
        <Fence1 position={[-70,0,-20]}  scale={[4,3,1]} />
        <Fence2 position={[-78,0,-20]}  scale={[4,3,1]} />
        <Fence3 position={[-86,0,-20]}  scale={[4,3,1]} />
        <Fence4 position={[-94,0,-20]}  scale={[4,3,1]} />
        <Fence5 position={[-60,0,-10]}  scale={[3,2.5,1]}  rotation={[0,Math.PI,0]} />
        <Fence6 position={[-66,0,-10]}  scale={[3,2.5,1]}  rotation={[0,Math.PI,0]} />
        <Fence7 position={[-72,0,-10]}  scale={[3,2.5,1]}  rotation={[0,Math.PI,0]} />
        <Fence8 position={[-78,0,-10]}  scale={[3,2.5,1]}  rotation={[0,Math.PI,0]} />
        <Fence9 position={[-84,0,-10]}  scale={[3,2.5,1]}  rotation={[0,Math.PI,0]} />
        <Fence10 position={[-90,0,-10]}  scale={[3,2.5,1]}  rotation={[0,Math.PI,0]} />
        <Goal position={[-105,0,-19]} rotation={[0,-Math.PI/2,0]} scale={[0.04,0.05,0.05]} />
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
function Fence10(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence10} />
    </mesh>
  )
}
function Fence9(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence9} />
    </mesh>
  )
}
function Fence8(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence8} />
    </mesh>
  )
}
function Fence7(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence7} />
    </mesh>
  )
}
function Fence6(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence6} />
    </mesh>
  )
}
function Fence5(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence5} />
    </mesh>
  )
}

function Fence4(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence4} />
    </mesh>
  )
}

function Fence3(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence3} />
    </mesh>
  )
}
function Fence2(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence2} />
    </mesh>
  )
}
function Fence1(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence1} />
    </mesh>
  )
}
function Fence(props ) {
  return (
      
    <mesh  {...props}  >
     <Model obj={fence} />
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
