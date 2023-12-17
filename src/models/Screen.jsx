import React from "react";
import { useGLTF } from "@react-three/drei";

export function Screen(props) {
  const { nodes, materials } = useGLTF("/models/old_monitor.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box001__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[10, 0, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.041, 1, 1.011]}
      />
    </group>
  );
}

useGLTF.preload("/models/old_monitor.glb");
