"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bulbasaur from "@/models/Bulbasaur";

interface IContactScene {
  width: number;
  formState: string;
}

const ContactScene = ({ width = 200, formState }: IContactScene) => {
  return (
    <div className={`w-[${width}px] h-[300px] border border-red-500`}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight intensity={2.5} />
        <OrbitControls />
        <Bulbasaur
          formState={formState}
          scale={[300, 300, 300]}
          position={[0, 0, 0]}
          rotation={[0.1, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default ContactScene;
