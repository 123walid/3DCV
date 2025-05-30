import React from "react"
import CardText from "./CardText"
function Description() {
    return(
    <mesh>
          <CardText position={[20,1.5,-53]} text={"Engineering Student in ISAMM  10/2021- present"} fontSize={1.2}  maxWidth={20} />
          <CardText position={[58,2,-51]} text={"Applied License in Information Systems Development  ISET KEF  09/2018-07-2021"} fontSize={1} maxWidth={15} />
          <CardText position={[87,2,-49]} text={"Baccalaureate in Mathematics Ibn Zaidoun secondary school  2018"} fontSize={1} maxWidth={15} />
          <CardText position={[0.2,7.2,-39]} text={"Education"} fontSize={1} rotation={[0,-Math.PI/9,0]} />
          <CardText position={[-0.5,8,-35]} text={"Home"} fontSize={1} rotation={[0,Math.PI/2,0]} />
          <CardText position={[1,7.3,-40.5]} text={"Contact"} fontSize={1} rotation={[0,Math.PI/2,0]} />
          <CardText position={[-6,8,-40]} text={"Expercience"} fontSize={1} rotation={[0,-Math.PI/9,0]} />   
          <CardText position={[-15,11,-150]} text={"Click The Icons "} fontSize={2.5} /> 
          <CardText position={[-7.5,0.1,7]} text={" ZQSD to drive, Space to brake and R to reset "} rotation={[-Math.PI/2,0,0]}  fontSize={1}  maxWidth={15} />      
          <CardText position={[-160,7.5,-50]} text={"Expercience "} fontSize={1.2} />  
          <CardText position={[-167,8.5,-49.5]} text={"Projects "} fontSize={1.2} /> 
  </mesh>
    )
}
export default Description
