import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  return (
    <span className="w-full h-screen bg-red-500">
      <Canvas camera={camera}>Hey</Canvas>
    </span>
  );
};

export default Scene;
