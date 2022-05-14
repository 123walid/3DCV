import {useBox} from '@react-three/cannon'

function Briques() {
    return(
    <group>
        <Box position={[5,0,3]} />
        
        <Box position={[5,0,2]} />
        
        <Box position={[5,0,1]} />
        
        <Box position={[5,0,0]} />
      
        <Box position={[5,0,-1]} />
      
        <Box position={[5,0,-2]} />
     
        <Box position={[5,0,-3]} />
       
        <Box position={[5,0,-4]} />
       

        <Box position={[-5,0,3]} />
        
        <Box position={[-5,0,2]} />
       
        <Box position={[-5,0,1]} />
     
        <Box position={[-5,0,0]} />
       
        <Box position={[-5,0,-1]} />
        
        <Box position={[-5,0,-2]} />
       
        <Box position={[-5,0,-3]} />
        
        <Box position={[-5,0,-4]} />
        

     
    </group>
    )
}

function Box({ args = [1, 0.8, 1], ...props }) {
    const [ref] = useBox(() => ({ mass: 1, args, ...props }))
    return (
      <mesh ref={ref} castShadow>
        <boxBufferGeometry args={args}  />
        <meshStandardMaterial  color="#FFFFFF"/>
      </mesh>
    )
  }
export default Briques