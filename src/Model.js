import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ obj, scale = 1 ,onClick}) => {
  const gltf = useLoader(GLTFLoader, obj);
  return <primitive onClick={onClick} object={gltf.scene} scale={scale}  />;
};

export default Model;