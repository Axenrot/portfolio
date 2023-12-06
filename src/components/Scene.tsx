"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import Load from "./Load";
import Room from "../models/Room";
import { OrbitControls } from "@react-three/drei";
import Button from "./Button";
import Popup from "./Popup";

import Pokedex from "../models/Pokedex";
import { buttons, cameraPosition, pokedexPosition } from "@/utils/buttons";

const Scene = () => {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const [openPokedex, setOpenPokedex] = useState<boolean>(false);

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
          {Object.entries(buttons).map((item) => {
            let text = item[0];
            let { fn, pos, icon } = item[1];

            return (
              <Button
                key={`btn-${text}`}
                placeholder={icon}
                fn={fn}
                position={pos}
                onMouseEnter={() => {
                  setHoveredBtn(text);
                }}
                onMouseLeave={() => {
                  setHoveredBtn(null);
                }}
              />
            );
          })}

          <OrbitControls />
          <ambientLight intensity={0.7} />
          <directionalLight intensity={2.5} />
          {/* <pointLight /> */}
          {/* <hemisphereLight /> */}
          <Pokedex
            opened={openPokedex}
            position={pokedexPosition}
            onClick={() => setOpenPokedex(!openPokedex)}
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
