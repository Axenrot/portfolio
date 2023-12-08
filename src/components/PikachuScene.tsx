"use client";
import { Canvas } from "@react-three/fiber";
import Pikachu from "../models/Pikachu";
import { OrbitControls } from "@react-three/drei";
import Bulbasaur from "@/models/Bulbasaur";

interface IPikachuScene {
  width: number;
}

const PikachuScene = ({ width = 200 }: IPikachuScene) => {
  return (
    <div className={`w-[${width}px] h-[300px] border border-red-500`}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight intensity={2.5} />
        <OrbitControls />
        <Bulbasaur
          scale={[300, 300, 300]}
          position={[0, 0, 0]}
          rotation={[0.1, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default PikachuScene;
