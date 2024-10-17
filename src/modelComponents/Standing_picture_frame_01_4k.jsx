/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 standing_picture_frame_01_4k.gltf --transform 
Files: standing_picture_frame_01_4k.gltf [6.94KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\readingRoom\standing_picture_frame_01_4k.gltf\standing_picture_frame_01_4k-transformed.glb [217.22KB] (-3030%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function StandingPicture(props) {
  const { nodes, materials } = useGLTF(
    "/standing_picture_frame_01_4k-transformed.glb"
  );
  return (
    <group {...props} dispose={null} scale={0.8}>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.standing_picture_frame_01_glass}
      />
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={materials.standing_picture_frame_01_artwork}
      />
      <mesh
        geometry={nodes.Cube001_2.geometry}
        material={materials.standing_picture_frame_01}
      />
    </group>
  );
}

useGLTF.preload("/standing_picture_frame_01_4k-transformed.glb");