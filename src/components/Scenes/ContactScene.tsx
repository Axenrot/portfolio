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
    <span className="w-[250px] h-[250px] overflow-hidden">
      <div className={`w-[300px] h-[300px]`}>
        <Canvas>
          <ambientLight intensity={0.7} />
          <directionalLight intensity={2.5} />
          <OrbitControls
            // enablePan={false}
            minDistance={4.5}
            maxDistance={4.5}
            minAzimuthAngle={0.8}
            maxAzimuthAngle={1.2}
            minPolarAngle={1}
            maxPolarAngle={1.8}
          />
          <Bulbasaur
            formState={formState}
            scale={[500, 500, 500]}
            position={[-0.5, -1, 0]}
            rotation={[0, 0.7, 0]}
          />
        </Canvas>
      </div>
    </span>
  );
};

export default ContactScene;
