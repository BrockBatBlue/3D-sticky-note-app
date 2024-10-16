/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 carved_wooden_plate_4k.gltf --transform 
Files: carved_wooden_plate_4k.gltf [2.84KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\kitchen\carved_wooden_plate_4k.gltf\carved_wooden_plate_4k-transformed.glb [484.96KB] (-16976%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function WoodenPlate(props) {
  const { nodes, materials } = useGLTF(
    "/carved_wooden_plate_4k-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.carved_wooden_plate.geometry}
        material={materials.carved_wooden_plate}
      />
    </group>
  );
}

useGLTF.preload("/carved_wooden_plate_4k-transformed.glb");
