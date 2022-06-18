import * as THREE from "three"

const ImageLoader=(props)=>{
  const {img,rotation=[0,0,0],scaleX=1,scaleY=1,position=[0,0,0]}=props;
  const base = new THREE.TextureLoader().load(img);
  return(
    <>
   
    <mesh  position={position} rotation={rotation} >
         <boxGeometry args={[scaleX, scaleY, 0.1]} />
         <meshBasicMaterial attach="material" color={"lightblue"} map={base} lightMapIntensity={1} />
      </mesh>
      </>
  )
}

export default ImageLoader;
