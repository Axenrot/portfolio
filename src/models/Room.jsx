import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Room({ ...props }) {
  const { nodes, materials } = useGLTF("/models/room.glb");
  const wall = new THREE.BoxGeometry(0.2, 2.9, 7.5);
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      {/*wall
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        rotation={[0, Math.PI, 0]}
        position={[6.1, 1.1, 0.3]}
        geometry={wall}
        // material={materials.fireRed_material}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tiles_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_stand_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carpet_A_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carpet_B_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dresser_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bookShelf_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NES_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.railing_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stairs_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_picture_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ambient_occlusion_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.title_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
    </group>
  );
}

useGLTF.preload("/models/room.glb");
