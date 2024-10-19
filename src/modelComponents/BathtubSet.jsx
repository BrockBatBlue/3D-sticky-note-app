/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/bathroom/bathroom_asset_part_4/bathtubSet.gltf --transform 
Files: public/models/bathroom/bathroom_asset_part_4/bathtubSet.gltf [57.79KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\bathtubSet-transformed.glb [2.77MB] (-4688%)
Author: SofiaWolfie (https://sketchfab.com/SofiaWolfie)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bathroom-asset-part-4-44d511ea01f84e719a83e476de75b7fc
Title: Bathroom asset part 4
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import ColliderBox from "../components/ColliderBox";
import { Physics } from "@react-three/cannon";

export function BathtubSet(props) {
  const { nodes, materials } = useGLTF("/bathtubSet-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial001}
        position={[1.485, -0.146, 3.524]}
        rotation={[-Math.PI, 0.01, -Math.PI]}
        scale={0.043}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials["flaska.005"]}
        position={[1.454, -0.272, 3.53]}
        rotation={[-Math.PI, 0.01, -Math.PI]}
        scale={0.043}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials["Materiahandduk.001"]}
        position={[1.428, -0.089, 4.441]}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials["doftljus_utsida.001"]}
        position={[1.485, -0.276, 2.642]}
        rotation={[-Math.PI, -0.025, -Math.PI]}
        scale={0.045}
      />
      <mesh
        geometry={nodes.Object_43.geometry}
        material={materials.PaletteMaterial002}
        position={[1.385, -0.962, 3.157]}
        scale={1.995}
      />
      <Physics>
        <ColliderBox position={[1.2, -1.2, 3.1]} scale={[1, 0.6, 1.53]} />
        <ColliderBox
          position={[1.48, -0.745, 3.13]}
          scale={[0.25, 1.5, 1.27]}
        />
      </Physics>
    </group>
  );
}

useGLTF.preload("/bathtubSet-transformed.glb");
