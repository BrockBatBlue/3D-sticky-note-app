/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/bathroom/shower_cabin/shower.gltf --transform 
Files: public/models/bathroom/shower_cabin/shower.gltf [12.16KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\shower-transformed.glb [775.42KB] (-6277%)
Author: Heliona (https://sketchfab.com/Heliona)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shower-cabin-e2c6a8dd490e4e4398378e1f6c9121a8
Title: Shower Cabin
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Shower(props) {
  const { nodes, materials } = useGLTF("/shower-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <lineSegments
        geometry={nodes.Object_5.geometry}
        material={materials.m_walls_frame_handle_drain}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.bottom}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.m_glass_door}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.m_shower}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.m_walls_frame_handle_drain}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/shower-transformed.glb");