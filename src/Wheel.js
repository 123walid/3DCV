import { forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCylinder } from '@react-three/cannon'

useGLTF.preload('/wheel.glb')

const Wheel = forwardRef(({ radius = 0.7, leftSide, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/wheel.glb')
  
  const [meshRef, api] = useCylinder(() => ({ 
    mass: 1, 
    type: 'kinematic', 
    material: 'wheel', 
    collisionFilterGroup: 0, 
    args: [radius, radius, 0.5, 16], 
    ...props 
  }))
  
  // Forward mesh ref directly (useRaycastVehicle needs the mesh, not wrapped object)
  useImperativeHandle(ref, () => meshRef.current)

  return (
    <mesh ref={meshRef}>
      <mesh rotation={[0, 0, ((leftSide ? 1 : -1) * Math.PI) / 2]}>
        <mesh material={materials.Rubber} geometry={nodes.wheel_1.geometry} />
        <mesh material={materials.Steel} geometry={nodes.wheel_2.geometry} />
        <mesh material={materials.Chrom} geometry={nodes.wheel_3.geometry} />
      </mesh>
    </mesh>
  )
})

export default Wheel