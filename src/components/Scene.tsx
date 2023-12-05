"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Load from "./Load";
import Room from "../models/Room";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const desktopRef = useRef();
  const frameRef = useRef();
  const shelfRef = useRef();

  const camera = new THREE.PerspectiveCamera(150, 0.6, 0.1, 1000);
  return (
    <span className="w-full h-screen">
      <Canvas camera={{ near: 0.01, far: 1000, position: [0, 1.3, 3] }}>
        <Suspense fallback={<Load />}>
          <OrbitControls />
          <ambientLight intensity={0.7} />
          <directionalLight intensity={2} />
          {/* <pointLight /> */}
          {/* <hemisphereLight /> */}
          <Room
            desktopRef={desktopRef}
            shelfRef={shelfRef}
            frameRef={frameRef}
            position={[0, 0, 0]}
            scale={[0.6, 0.6, 0.6]}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </span>
  );
};

export default Scene;
