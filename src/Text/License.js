import { Text } from "troika-three-text"
import fonts from "../fonts"
import { extend } from "@react-three/fiber"
import React, { useState } from "react"
extend({ Text })


  
  function Textp() {
   
    const text = 'Applied License in Information Systems Development  ISET KEF  09/2018-07-2021'
    const [opts,setopts] = useState({
      font: "Philosopher",
      fontSize: 25,
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
         position={[65,2,-51]}
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