import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRaycastVehicle } from '@react-three/cannon'
import { Quaternion, Euler, Vector3 } from 'three'
import { useControls } from './utils/useControls'
import Beetle from './Beetle'
import Wheel from './Wheel'

function Vehicle({ targetRef, onPositionChange, ...props }) {
  const chassis = useRef()
  const wheel1 = useRef()
  const wheel2 = useRef()
  const wheel3 = useRef()
  const wheel4 = useRef()
  const controls = useControls()
  const posHelper = useRef(new Vector3())

  const wheelInfo = {
    radius: 0.7,
    directionLocal: [0, -1, 0],
    suspensionStiffness: 30,
    suspensionRestLength: 0.3,
    maxSuspensionForce: 1e4,
    maxSuspensionTravel: 0.3,
    dampingRelaxation: 10,
    dampingCompression: 4.4,
    axleLocal: [-1, 0, 0],
    chassisConnectionPointLocal: [1, 0, 1],
    useCustomSlidingRotationalSpeed: true,
    customSlidingRotationalSpeed: -30,
    frictionSlip: 2
  }

  const [vehicle, api] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [
      { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [-0.6, -0.04, 1.3] },
      { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [0.6, -0.04, 1.3] },
      { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [-0.6, -0.04, -1.15] },
      { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [0.6, -0.04, -1.15] }
    ],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1
  }))

  useFrame(() => {
    const { forward, backward, left, right, brake, reset } = controls.current
    
    // Driving controls
    api.applyEngineForce(forward || backward ? 1800 * (forward && !backward ? -1 : 1) : 0, 2)
    api.applyEngineForce(forward || backward ? 1800 * (forward && !backward ? -1 : 1) : 0, 3)
    api.setSteeringValue(left || right ? 0.75 * (left && !right ? 1 : -1) : 0, 0)
    api.setSteeringValue(left || right ? 0.75 * (left && !right ? 1 : -1) : 0, 1)
    api.setBrake(brake ? 1e10 : 0, 2)
    api.setBrake(brake ? 1e10 : 0, 3)
    
    // Attach chassis to targetRef so camera can follow it
    if (chassis.current && targetRef) {
      targetRef.current = chassis.current
      
      // For text zones (optional)
      if (onPositionChange) {
        posHelper.current.copy(chassis.current.position)
        onPositionChange(posHelper.current)
      }
    }
    
    // Reset
    if (reset && chassis.current?.api) {
      chassis.current.api.position.set(0, 4, 0)
      chassis.current.api.velocity.set(0, 0, 0)
      chassis.current.api.angularVelocity.set(0, 0, 0)
      const q = new Quaternion().setFromEuler(new Euler(0, -Math.PI, 0))
      chassis.current.api.quaternion.set(q.x, q.y, q.z, q.w)
    }
  })

  return (
    <group>
      <Beetle ref={chassis} rotation={[0, -Math.PI, 0]} position={[0, 4, 0]} />
      <Wheel ref={wheel1} radius={0.7} leftSide />
      <Wheel ref={wheel2} radius={0.7} />
      <Wheel ref={wheel3} radius={0.7} leftSide />
      <Wheel ref={wheel4} radius={0.7} />
    </group>
  )
}

export default Vehicle