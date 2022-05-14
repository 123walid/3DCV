import {useBox} from '@react-three/cannon'
import Text3d from './Text3d'
function Name() {
    return(
    <group>
            <Jumbo position={[-25,15,-10]} children="M"/>
            <Jumbo position={[-21,15,-10]} children="E"/>
            <Jumbo position={[-18,15,-10]} children="D"/>
            <Jumbo position={[-12.5,15,-10]} children="W"/>
          <Jumbo position={[-8.5,15,-10]} children="A"/>
          <Jumbo position={[-5,15,-10]} children="L"/>
          <Jumbo position={[-2,15,-10]} children="I"/>
          <Jumbo position={[0,15,-10]} children="D"/>
          <Jumbo position={[5,15,-10]} children="M"/>
          <Jumbo position={[9,15,-10]} children="E"/>
          <Jumbo position={[12,15,-10]} children="N"/>
          <Jumbo position={[15.5,15,-10]} children="S"/>
          <Jumbo position={[18.5,15,-10]} children="I"/>
    </group>
    )
}

function Jumbo({position,children}) {
    const [ref, api] = useBox(() => ({ mass: 1,position}))
    return (
      <mesh friction={0}
      onload={() => {
        api.velocity.set(0, 2, 0)
      }}ref={ref} >
      <group  >
        <Text3d hAlign="right"   children={children}/>
      </group>
      </mesh>
    )
  }
export default Name