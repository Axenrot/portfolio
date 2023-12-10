"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Load from "./Load";
import Room from "../models/Room";
import { OrbitControls } from "@react-three/drei";
import Button from "./Button";
import Dialog from "./Dialog";

import Pokedex from "../models/Pokedex";
import Menu from "./Menu";
import { useCallback, useRef } from "react";
import { buttons, cameraPosition, pokedexPosition } from "@/utils/buttons";
import { lookAtControl } from "@/utils/cameraMovement";
import { playSound } from "@/utils/playSound";

const Scene = () => {
  const [currentOption, setCurrentOption] = useState<string | null>("home");
  const [openPokedex, setOpenPokedex] = useState<boolean>(false);
  const controlRef = useRef<any>();

  const isCooldown = useRef(false);

  const setOptionCD = useCallback(
    (option: string) => {
      if (!isCooldown.current) {
        setCurrentOption(null);

        setTimeout(() => setCurrentOption(option), 200);
        isCooldown.current = true;

        setTimeout(() => {
          isCooldown.current = false;
        }, 500); // Set the cooldown duration in milliseconds
      }
    },
    [isCooldown]
  );

  const toggleOpenPokedex = useCallback(() => {
    if (!isCooldown.current) {
      setOpenPokedex((prevOpenPokedex) => !prevOpenPokedex);
      isCooldown.current = true;

      setTimeout(() => {
        isCooldown.current = false;
      }, 1000); // Set the cooldown duration in milliseconds
    }
  }, [isCooldown]);

  useEffect(() => {
    //  Look at the current option when it changes
    if (currentOption != null && typeof currentOption == "string") {
      let currentOptionInButtons = Object.entries(buttons).find((btn) => {
        if (btn[0] == currentOption) {
          return btn;
        }
      });
      let target =
        currentOptionInButtons?.length == 2
          ? currentOptionInButtons[1].pos
          : cameraPosition;

      playSound("/assets/sounds/btn.wav");
      lookAtControl(controlRef.current, target);
    }
  }, [currentOption]);

  return (
    <span className="w-full h-screen">
      {currentOption && <Dialog currentOption={currentOption} />}
      <Menu
        currentOption={currentOption}
        setCurrentOption={(value) => setCurrentOption(value)}
      />
      <Canvas camera={{ near: 0.01, far: 1000, position: cameraPosition }}>
        <Suspense fallback={<Load />}>
          {Object.entries(buttons).map((btn) => {
            let text = btn[0];
            let { fn, pos, icon } = btn[1];

            return (
              <Button
                key={`btn-${text}`}
                placeholder={icon}
                position={pos}
                onClick={() => {
                  setOptionCD(text);
                }}
              />
            );
          })}
          {/* <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 2, 4]} /> */}

          <OrbitControls
            ref={controlRef}
            enablePan={false}
            minAzimuthAngle={-1.2}
            maxAzimuthAngle={1.2}
            maxDistance={5}
            minPolarAngle={1}
            maxPolarAngle={1.7}
          />
          <ambientLight intensity={0.7} />
          <directionalLight intensity={2.5} />
          {/* <pointLight /> */}
          {/* <hemisphereLight /> */}
          <Pokedex
            opened={openPokedex}
            position={pokedexPosition}
            onClick={() => toggleOpenPokedex()}
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
