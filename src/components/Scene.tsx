"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import Load from "./Load";
import Room from "../models/Room";
import { OrbitControls } from "@react-three/drei";
import Button from "./Button";
import Popup from "./Popup";

const Scene = () => {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const desktopPosition = new THREE.Vector3(-2.7, 0.85, -1.3);
  const shelfPosition = new THREE.Vector3(-0.55, 0.8, -1.3);
  const framePosition = new THREE.Vector3(3.2, 0.78, -1.75);
  const cameraPosition = new THREE.Vector3(0, 1.3, 3);

  const camera = new THREE.Camera();

  // useEffect(() => {
  // if(camera.position)  {
  //   camera.position = cameraPosition
  // }
  // }, []);

  return (
    <span className="w-full h-screen">
      <Popup />
      <Canvas camera={{ near: 0.01, far: 1000, position: cameraPosition }}>
        <Suspense fallback={<Load />}>
          <Button
            placeholder="1"
            fn={() => console.log(desktopPosition)}
            position={desktopPosition}
            onMouseEnter={() => {
              setHoveredBtn("desktop");
            }}
            onMouseLeave={() => {
              setHoveredBtn(null);
            }}
          />
          <Button
            placeholder="2"
            fn={() => console.log(shelfPosition)}
            position={shelfPosition}
          />
          <Button
            placeholder="3"
            fn={() => console.log(framePosition)}
            position={framePosition}
          />

          <OrbitControls />
          <ambientLight intensity={0.7} />
          <directionalLight intensity={2} />
          {/* <pointLight /> */}
          {/* <hemisphereLight /> */}
          <Room
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
