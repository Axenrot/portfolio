import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Screen({ selectedOption, ...props }) {
  const radius = 32;
  const widthSegments = 31;
  const heightSegments = 31;
  const phiStart = 0;
  const phiLength = 0.4;
  const thetaStart = (5 * Math.PI) / 11;
  const thetaLength = Math.PI / 11;

  const geometry = new THREE.SphereGeometry(
    radius,
    widthSegments,
    heightSegments,
    phiStart,
    phiLength,
    thetaStart,
    thetaLength
  );

  // Load an image texture
  const textureLoader = new THREE.TextureLoader();
  const texture = useRef(null);
  texture.current = textureLoader.load(
    `/assets/screens/${selectedOption}-web.png`
  );
  useEffect(() => {
    texture.current = textureLoader.load(
      `/assets/screens/${selectedOption}-web.png`
    );

    //eslint-disable-next-line
  }, [selectedOption]);

  // Create a material with the loaded texture
  const bodyMaterial = new THREE.MeshBasicMaterial({
    map: texture.current,
    opacity: 0.9,
    transparent: true,
  });

  const { nodes, materials } = useGLTF("/models/old_monitor.glb");

  return (
    <group {...props} dispose={null}>
      {/* <SemiSphere />
      <sphereGeometry args={[5, 32, 16, 0, Math.PI, 0, Math.PI / 2]} /> */}
      {/* <mesh castShadow receiveShadow geometry={geometry} material={material} /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={bodyMaterial}
        scale={5.9}
        position={[19, 35, -169.8]}
        rotation={[0, Math.PI / 2 - 0.25, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box001__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[10, 0, 10]}
        rotation={[-Math.PI / 2, 0, -0.045]}
        scale={[1.041, 1, 1.011]}
      />
    </group>
  );
}

useGLTF.preload("/models/old_monitor.glb");
