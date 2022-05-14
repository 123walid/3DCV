import { Text } from "troika-three-text"
import fonts from "./fonts"
import { extend } from "@react-three/fiber"
import React, { useState } from "react"
extend({ Text })

const text =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  function Textp() {
    // State:
    const [rotation, setRotation] = useState([-Math.PI/2, 0, 0]);
    const [opts] = useState({
      font: "Philosopher",
      fontSize: 25,
      color: "red",
      maxWidth: 300,
      lineHeight: 1,
      letterSpacing: 0,
      textAlign: "justify",
      materialType: "MeshPhongMaterial"
    });
  
    // Handlers:
    const onMouseMove = e => {
      setRotation([
        ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
        ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
        0
      ]);
    }
    return (
        <mesh
        pixelRatio={window.devicePixelRatio}
        onMouseMove={onMouseMove}
        >
             <text
          position-z={-5}
          position-y={0.1}
          rotation={rotation}
          {...opts}
          text={text}
          font={fonts[opts.font]}
          anchorX="center"
          anchorY="middle"
         scale={0.05}
        >
              {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>

        </mesh>
    )
}
export default Textp