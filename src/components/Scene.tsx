"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import Load from "./Load";
import Room from "../models/Room";
import { OrbitControls } from "@react-three/drei";
import Button from "./Button";
import Popup from "./Popup";
import { FileCode, FileJs, FilePdf, At } from "@phosphor-icons/react/dist/ssr";
import PokedexClosed from "../models/PokedexClosed";

const Scene = () => {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const desktopPosition = new THREE.Vector3(-2.7, 0.85, -1.3);
  const shelfPosition = new THREE.Vector3(-0.55, 0.8, -1.3);
  const framePosition = new THREE.Vector3(3.2, 0.78, -1.75);
  const cameraPosition = new THREE.Vector3(0, 1.3, 3);
  const pokedexPosition = new THREE.Vector3(-1.45, 0.72, -1.5);
  const pokedexBtnPosition = new THREE.Vector3(-1.55, 0.95, -1.5);

  const camera = new THREE.Camera();

  // useEffect(() => {
  // if(camera.position)  {
  //   camera.position = cameraPosition
  // }
  // }, []);

  return (
    <span className="w-full h-screen">
      <Popup selectedOption={hoveredBtn} />
      <Canvas camera={{ near: 0.01, far: 1000, position: cameraPosition }}>
        <Suspense fallback={<Load />}>
          <Button
            placeholder={<FileJs size={20} weight="bold" />}
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
            placeholder={<At size={20} weight="bold" />}
            fn={() => console.log(pokedexBtnPosition)}
            position={pokedexBtnPosition}
            onMouseEnter={() => {
              setHoveredBtn("pokedex");
            }}
            onMouseLeave={() => {
              setHoveredBtn(null);
            }}
          />
          <Button
            placeholder={<FileCode size={20} weight="bold" />}
            fn={() => console.log(shelfPosition)}
            position={shelfPosition}
            onMouseEnter={() => {
              setHoveredBtn("shelf");
            }}
            onMouseLeave={() => {
              setHoveredBtn(null);
            }}
          />
          <Button
            placeholder={<FilePdf size={20} weight="bold" />}
            fn={() => console.log(framePosition)}
            position={framePosition}
            onMouseEnter={() => {
              setHoveredBtn("frame");
            }}
            onMouseLeave={() => {
              setHoveredBtn(null);
            }}
          />

          <OrbitControls />
          <ambientLight intensity={0.7} />
          <directionalLight intensity={2} />
          {/* <pointLight /> */}
          {/* <hemisphereLight /> */}
          <PokedexClosed
            position={pokedexPosition}
            rotation={[0, 0.2, 0]}
            scale={[2, 2, 2]}
          />
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
