/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf --transform 
Files: scene.gltf [13.92KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\emptyHouse\home_floor_plan_empty\scene-transformed.glb [107.81KB] (-674%)
Author: colinmansfield (https://sketchfab.com/colinmansfield)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/home-floor-plan-empty-658c1aa87c1f4ddabd318c898ecef497
Title: Home Floor Plan (empty)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Scene(props) {
  const { nodes, materials } = useGLTF("/scene-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.089}
      />
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
