import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import { extend, useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import boldUrl from './assets/bold.blob'
extend({ TextGeometry })

export default  function Text3d({ children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }) {
  const font =  useLoader(FontLoader, boldUrl)
  const config = useMemo(
    () => ({ font, size: 18, height: 5, curveSegments: 10, bevelEnabled: true, bevelThickness: 10, bevelSize: 0.5, bevelOffset: 0, bevelSegments: 0 }),
    [font]
  )
  const mesh= useRef()
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
  }, [children])
 
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]} >
      <mesh 
      ref={mesh} 
      
      >
        <textGeometry args={[children, config]} />
        <meshStandardMaterial attach="material" color="#E0FFFF" geometry={useLayoutEffect} />
      </mesh>
    </group>
  )
}