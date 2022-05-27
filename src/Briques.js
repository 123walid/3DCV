import {useBox,useCylinder} from '@react-three/cannon'


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

        <Box1 args={[8,2,6]}  position={[20,0,-19.5]} mass={1000}/>
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
  function Pillar({ args = [0.5, 0.5, 1, 25], ...props }) {
    const [ref] = useCylinder(() => ({ mass: 600000, args, ...props }))
    return (
      <mesh ref={ref} castShadow>z
        <cylinderGeometry args={args} />
        <meshStandardMaterial opacity={0} transparent={true} />
      </mesh>
    )
  }
export default Briques