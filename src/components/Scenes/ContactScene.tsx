"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bulbasaur from "@/models/Bulbasaur";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useEffect, useRef } from "react";

interface IContactScene {
  formState: string;
}

const ContactScene = ({ formState }: IContactScene) => {
  const { width } = useWindowDimensions();
  const size = useRef<number>(width < 768 ? 200 : 300);

  useEffect(() => {
    size.current = width < 768 ? 200 : 300;
  }, [width]);

  return (
    <span
      style={{
        width: Number(size.current),
        height: Number(size.current),
      }}
      className={`overflow-hidden flex items-center justify-center`}
    >
      <div
        style={{
          width: Number(size.current),
          height: Number(size.current),
        }}
      >
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
            position={[0, -1.2, 0]}
            rotation={[0, 0.7, 0]}
          />
        </Canvas>
      </div>
    </span>
  );
};

export default ContactScene;
