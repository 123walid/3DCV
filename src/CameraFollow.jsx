import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Vector3 } from 'three'

export function CameraFollow({ target }) {
  const { camera } = useThree()
  const currentPos = useRef(new Vector3())
  const targetPos = useRef(new Vector3())
  const desiredPos = useRef(new Vector3())
  
  // Pre-allocated offset - don't recreate every frame
  const offset = useRef(new Vector3(0, 12, 20))
  
  useFrame((state, delta) => {
    if (!target?.current) return
    
    // Get world position (needed for physics bodies)
    target.current.getWorldPosition(targetPos.current)
    
    // Calculate desired position: car + offset
    desiredPos.current.copy(targetPos.current).add(offset.current)
    
    // Frame-rate independent smoothing (2 = speed multiplier)
    const smoothSpeed = Math.min(1, 2 * delta) // Cap at 1 to prevent overshoot
    currentPos.current.lerp(desiredPos.current, smoothSpeed)
    
    camera.position.copy(currentPos.current)
    camera.lookAt(targetPos.current.x, targetPos.current.y + 2, targetPos.current.z)
  })
  
  return null
}