/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 food_pomegranate_01_4k.gltf --transform 
Files: food_pomegranate_01_4k.gltf [2.76KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\kitchen\food_pomegranate_01_4k.gltf\food_pomegranate_01_4k-transformed.glb [501.06KB] (-18054%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Pomegranate(props) {
  const { nodes, materials } = useGLTF(
    "/food_pomegranate_01_4k-transformed.glb"
  );
  return (
    <group {...props} dispose={null} scale={0.85}>
      <mesh
        geometry={nodes.food_pomegranate_01.geometry}
        material={materials.food_pomegranate_01}
      />
    </group>
  );
}

useGLTF.preload("/food_pomegranate_01_4k-transformed.glb");
