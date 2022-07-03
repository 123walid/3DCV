import {useBox,useCylinder,useSphere,useConeTwistConstraint} from '@react-three/cannon'
import * as THREE from "three"
import football from './assets/football.jpg'
import cone from './assets/cone.jpg'
function Briques() {

  
    return(
    <group>
        <Box position={[15,1,4]} />
        <Box position={[15,1,2]} />
        <Box position={[15,1,0]} />
        <Box position={[15,1,-2]} />
        <Box position={[15,2,4]} />
        <Box position={[15,2,2]} />
        <Box position={[15,2,0]} />
        <Box position={[15,2,-2]} />
        <Box position={[14.5,1,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[14.5,2,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[12.5,1,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[12.5,2,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[10.5,1,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[10.5,2,5.5]} rotation={[0,Math.PI/2,0]} />

        <Box position={[-15,1,-2]} />
        
        <Box position={[-15,1,4]} />
       
        <Box position={[-15,1,2]} />
     
        <Box position={[-15,1,0]} />
       
        <Box position={[-15,2,0]} />
        
        <Box position={[-15,2,2]} />
       
        <Box position={[-15,2,4]} />
        
        <Box position={[-15,2,-2]} />
        <Box position={[-14.5,1,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[-14.5,2,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[-12.5,1,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[-12.5,2,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[-10.5,1,5.5]} rotation={[0,Math.PI/2,0]} />
        <Box position={[-10.5,2,5.5]} rotation={[0,Math.PI/2,0]} />
        <Pillar position={[10,2,2]}/>
        <Pillar position={[-10,2,2]}/>
        <Pillar position={[20,2,3]}/>
        <Pillar position={[22,2,-3]}/>
        <Pillar position={[40,2,-7]}/>
        <Pillar position={[-20,2,-1]}/>
        <Pillar position={[-27,2,1]}/>

       
        <Box1 args={[25,2,10]} position={[30,1,-60]} mass={10000} />
        <Box1 args={[6,1,2]}  position={[5,1,-150]} mass={10000} />
        <Box1 args={[5,1,2]}  position={[-20,1,-150]} mass={10000} />
        <Box1 args={[5,1,2]}  position={[-7,0,-150]} mass={10000} />
        <Box1 args={[5,1,3]}  position={[30,1,-125.5]} mass={10000} />
        <Box1 args={[20,2,10]} position={[65,1,-60]} mass={10000} />
        <Box1 args={[7,2,3]} position={[65,1,-54]} mass={10000} />
        <Box1 args={[11,2,7.5]} position={[-60,1,-60]} mass={10000} />
        <Box1 args={[17,2,20]} position={[95,1,-60]}  mass={10000} />
        <Box1 args={[10,2,7]} position ={[-140,0,-60]} mass={10000}/>
        <Box1 args={[9,2,9]} position ={[-100,0,-60]} mass={10000}/>

        <Box1 args={[3,2,5]} position ={[50,1,-18]} mass={10000}/>
        <Box1 args={[3,2,5]} position ={[60,1,-18]} mass={10000}/>
        <Box1 args={[3,2,5]} position ={[70,1,-18]} mass={10000}/>

        <Box1 args={[1,2,1]} position ={[54,1,-18]} mass={10000}/>
        <Box1 args={[1,2,1]} position ={[64,1,-18]} mass={10000}/>
        <Box1 args={[1,2,1]} position ={[74,1,-18]} mass={10000}/>

        
        <Box1 args={[8,2,1]} position ={[-92,1,-6]} mass={10000} rotation={[0,Math.PI/2,0]} />
        <Box1 args={[3,2,1]} position ={[-90,1,-10]} mass={10000}  />
        <Box1 args={[3,2,1]} position ={[-90,1,-2]} mass={10000}  />

        <Pillar args={[2,2,2,25]} position={[30,0.1,-18]} />
        <Pillar position={[18,0,-121]}/>
        <Pillar position={[0,0,-40]} />
        <Ball position={[-55, 5, -4]} />

        <Cone position={[-54,5,-11]}  mass={0.4} />
        <Cone position={[-66,5,-11]} mass={0.4} />
        <Cone position={[-78,5,-11]} mass={0.4} />
        <Cone position={[-54,5,2]}  mass={0.4} />
        <Cone position={[-66,5,2]} mass={0.4} />
        <Cone position={[-78,5,2]} mass={0.4} />
        <Pillar args = {[0.5, 0.5, 1, 25]} position={[-160,0.1,-50.8]} />
        <Box1 args={[5.5,2,1]} position ={[-217.3,1,-44.5]} mass={10000} rotation={[0,Math.PI/2,0]}  />
        <Box1 args={[5.5,2,1]} position ={[-217.3,1,-64.5]} mass={10000} rotation={[0,Math.PI/2,0]}  />
    </group>
    )
}

function Box({ args = [1, 0.8, 2],rotation, ...props }) {
    const [ref] = useBox(() => ({ mass: 1, args, rotation,...props }))
    return (
      <mesh
      ref={ref}  castShadow >
        <boxBufferGeometry args={args} />
        <meshStandardMaterial  color="#FFFFFF" />
      </mesh>
    )
  }
  function Box1({ args, ...props }) {
    const [ref] = useBox(() => ({ args,...props }))
    return (
      <mesh
      ref={ref}  castShadow >
        <boxBufferGeometry args={args} />
        <meshStandardMaterial opacity={0} transparent={true} />
      </mesh>
    )
  }
  function Cone({ ...props }) {
    const [ref] = useBox(() => ({...props }))
    const texture = new THREE.TextureLoader().load(cone)
    return (
      <mesh
      ref={ref}  castShadow >
        <coneGeometry args={[1,3,32]} />
        <meshStandardMaterial opacity={1} transparent={true} map={texture}/>
      </mesh>
    )
  }
  function Pillar({ args = [0.5, 0.5, 1, 25], ...props }) {
    const [ref] = useCylinder(() => ({ mass: 600000, args, ...props }))
    return (
      <mesh ref={ref} castShadow>
        <cylinderGeometry args={args} />
        <meshStandardMaterial opacity={0} transparent={true} />
      </mesh>
    )
  }
   function Ball(props) {
    const [ref] = useSphere(() => ({
      mass: 1,
      args: 0.5, ...props
    }))
    const texture = new THREE.TextureLoader().load(football)
    return (
      <mesh  castShadow receiveShadow ref={ref}>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshLambertMaterial color="white" map={texture}/>
      </mesh>
    )
  }
export default Briques