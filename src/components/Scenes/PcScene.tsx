"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { Screen } from "@/models/Screen";
import * as THREE from "three";
import { Phone } from "@/models/Phone";
import { useRef } from "react";

interface IPcScene {
  index?: number;
}

const PcScene = ({ index = 1 }: IPcScene) => {
  const cameraPosition = new THREE.Vector3(0, 1.3, 10);
  const dirLight = useRef<THREE.DirectionalLight>(null);

  return (
    <span className="h-[80vh] w-full flex flex-col">
      <Canvas camera={{ near: 0.01, far: 1000, position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <directionalLight ref={dirLight} intensity={2} position={[-4, 7, 10]} />
        <OrbitControls
          enablePan={false}
          // minDistance={10}
          // maxDistance={10}
          minAzimuthAngle={-0.3}
          maxAzimuthAngle={0.3}
          minPolarAngle={1}
          maxPolarAngle={1.8}
        />

        <Screen scale={[0.1, 0.1, 0.1]} position={[-0.5, -2.5, 0]} />
        <Phone position={[-4, -1.2, 2.9]} rotation={[1.2, Math.PI, 0]} />
        {/* HELLOW */}
      </Canvas>
    </span>
  );
};

export default PcScene;
