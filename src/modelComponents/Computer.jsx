/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/office/desktop_computer/computer.gltf --transform 
Files: public/models/office/desktop_computer/computer.gltf [14.37KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\computer-transformed.glb [211.54KB] (-1372%)
Author: Tyler P Halterman (https://sketchfab.com/tylerhalterman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/desktop-computer-561abc2fc95941609fc7bc6f232895c2
Title: Desktop Computer
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF("/computer-transformed.glb");
  return (
    <group {...props} dispose={null} scale={0.8}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials["01___Default"]}
        scale={0.501}
      />
    </group>
  );
}

useGLTF.preload("/computer-transformed.glb");
