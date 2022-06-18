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

        <Pillar args={[2,2,2,25]} position={[30,0.1,-18]} />
        <Pillar position={[18,0,-121]}/>
        <Pillar position={[0,0,-40]} />
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