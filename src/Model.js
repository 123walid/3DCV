import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ obj, scale = 1 }) => {
  const gltf = useLoader(GLTFLoader, obj);
  return <primitive object={gltf.scene} scale={scale} />;
};

export default Model;