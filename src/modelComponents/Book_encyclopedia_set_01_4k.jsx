/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 book_encyclopedia_set_01_4k.gltf --transform 
Files: book_encyclopedia_set_01_4k.gltf [55.01KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\readingRoom\book_encyclopedia_set_01_4k.gltf\book_encyclopedia_set_01_4k-transformed.glb [701.53KB] (-1175%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Books(props) {
  const { nodes, materials } = useGLTF(
    "/book_encyclopedia_set_01_4k-transformed.glb"
  );
  return (
    <group {...props} dispose={null} scale={0.8}>
      <group position={[0, 0, 0.101]}>
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials.book_encyclopedia_set_01_cover}
        />
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials.book_encyclopedia_set_01_paper}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/book_encyclopedia_set_01_4k-transformed.glb");
