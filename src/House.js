import React,{useState} from "react";
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
import ImageLoader from "./ImageLoader";


import img from './assets/elgazela.png';
import prologic from './assets/prol.jpg'
import telecome from './assets/telecome.jpg'
function House() {

  const [txt,setTxt] =useState(-1);
  
  const handleActive=(key)=>{
    setTxt(key===txt ? -1 : key);
  }

    return(
    <mesh>
        <House2 position={[30,0,-60]} />
        <House3 position={[65,0,-62]} />
        <House4 position={[95,0,-60]}/>

        <Company  onClick={()=>handleActive(0)}  position={[-60,0,-60]}  scale={0.5}  />
        <Company1 onClick={()=>handleActive(1)} position ={[-140,0,-60]}   scale={0.5}/>
        <Company2 onClick={()=>handleActive(2)} position ={[-100,0,-60]}   scale={0.5}/>

        <ImageLoader img={img} scaleX={7} scaleY={5} position={[-57,16,-56.7]} />
        <ImageLoader img={prologic} scaleX={7} scaleY={5} position={[-100,16,-56]} />
        <ImageLoader img={telecome} scaleX={7} scaleY={5} position={[-140,15,-56.7]} />

        {txt===0 && <CardText position={[-54,3.3,-57]} text={"Development of agricultural products traceability application with blockchain technology                      03/2021 - 06/2021"} fontSize={1.5} maxWidth={25} />}
        {txt===1 && <CardText position={[-137,3.3,-60]} text={" -Introduction to working life  -Discovering group work  -Maintenance of IT equipments  01/2019 - 02/2019"} fontSize={1.5} maxWidth={25} />}
        {txt===2 && <CardText position={[-97,3.3,-57]} text={" Development of a desktop data managment application           01/2020 - 02/2020  "} fontSize={1.5} maxWidth={25} />}



    </mesh>
    )
}
export default House





function Company2(props ) {
  return (
      
    <mesh   {...props}  >
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
 