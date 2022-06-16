import { Text } from "troika-three-text"
import fonts from "../fonts"
import { extend } from "@react-three/fiber"
import React, { useState } from "react"
extend({ Text })


  
  function Expercience() {
   
    const text = 'Expercience'
    const [opts,setopts] = useState({
      font: "Philosopher",
      fontSize: 20,
      color: "black",
      maxWidth: 350,
      lineHeight: 1,
      letterSpacing: 0,
      textAlign: "center",
      materialType: "MeshPhongMaterial"
    });
    return (
        <mesh
        >
             <text
         position={[-3,8,-40]}
         rotation={[0,-Math.PI/9,0]}
          {...opts}
          text={text}
          font={fonts[opts.font]}
          anchorX="center"
          anchorY="middle"
         scale={0.04}
        >
              {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>

        </mesh>
    )
}
export default Expercience