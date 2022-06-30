import React,{useState,useCallback,useEffect} from "react"
import Model from "./Model";
import email from './assets/3D/Done/contact/email.glb'
import git from './assets/3D/Done/contact/github.glb'
import link from './assets/3D/Done/contact/linked.glb'
import tunis from './assets/3D/Done/contact/Tunis.glb'
import sign from './assets/3D/Done/contact/sign.glb'
import sign1 from './assets/3D/Done/contact/sign1.glb'
import flag from './assets/3D/Done/contact/alam2.glb'
import balloon from './assets/3D/Done/balloon-spotter.glb'
import sign2 from './assets/3D/Done/contact/sign2.glb'
function Contact() {
  const [hovered, setHover] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  const onPointerOver = useCallback(() => setHover(true), [])
   const onPointerOut = useCallback(() => setHover(false), [])
    return(
    <mesh>
      <Email  onPointerOver={onPointerOver} onPointerOut={onPointerOut} position={[5,2.5,-150]} scale={2} rotation={[0,Math.PI/2,0]} />
        <Git  onPointerOver={onPointerOver} onPointerOut={onPointerOut} position={[-3,0,-150]} rotation={[Math.PI/2,0,0]}/>
        <Link  onPointerOver={onPointerOver} onPointerOut={onPointerOut} position={[-20,2.5,-150]} scale={1} rotation={[0,0,0]}/>
        <Tunisie position={[30,-2.28,-120]} scale={0.5} rotation={[0,-Math.PI/2,0]} />
        <Sign position={[-0.2,-8,-40]} scale={2} />
        <Sign1 position={[0,-8,-40]} rotation={[0,Math.PI/2,0]}  scale={2}/>
        <Sign2 position={[-160,-15,-50]} scale={3}  rotation={[0,Math.PI/10,0]}/>
        <Flag position={[5,-1,-115]}  />
        <Ballonn position={[-7,13,-150]} />
    </mesh>
    )
}
export default Contact
function Ballonn(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={balloon} />
    </mesh>
  )
}
function Flag(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={flag} />
    </mesh>
  )
}
function Sign2(props ) {
  return (
      
    <mesh {...props} >
     <Model obj={sign2} />
    </mesh>
  )
}
function Sign1(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={sign1} />
      </mesh>
    )
  }
function Sign(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={sign} />
      </mesh>
    )
  }

function Tunisie(props ) {
    return (
        
      <mesh {...props} >
       <Model obj={tunis} />
      </mesh>
    )
  }
function Link(props ) {
    return (
        
      <mesh  onClick={()=>{window.open( "https://www.linkedin.com/in/mohamed-walid-mensi-bb702b149" , '_blank').focus();}} {...props} 
     
      >
       <Model obj={link} />
      </mesh>
    )
  }
function Git(props ) {
    return (
        
      <mesh   onClick={()=>{window.open( "https://github.com/123walid" , '_blank').focus();}} {...props} >
       <Model obj={git} />
      </mesh>
    )
  }
function Email(props ) {
    return (
        
      <mesh  onClick={()=>{window.open('mailto:walid12mensi@hotmail.com?subject=subject&body=body');}} {...props} >
       <Model obj={email} />
      </mesh>
    )
  }