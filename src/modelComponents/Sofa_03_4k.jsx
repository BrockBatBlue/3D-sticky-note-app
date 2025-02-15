/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 sofa_03_4k.gltf --transform 
Files: sofa_03_4k.gltf [4.47KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\living room\sofa_03_4k.gltf\sofa_03_4k-transformed.glb [482.5KB] (-10694%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function SofaA(props) {
  const { nodes, materials } = useGLTF("/sofa_03_4k-transformed.glb");
  return (
    <group {...props} dispose={null} scale={0.95}>
      <mesh geometry={nodes.Mesh009.geometry} material={materials.sofa_03} />
      <mesh
        geometry={nodes.Mesh009_1.geometry}
        material={materials.sofa_03_fringe}
      />
    </group>
  );
}

useGLTF.preload("/sofa_03_4k-transformed.glb");
