/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 computerDesk.gltf --transform 
Files: computerDesk.gltf [6.73KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\office\computer_desk_office_workstation_desk\computerDesk-transformed.glb [1.13MB] (-16689%)
Author: Abdur Razzak Sawon (https://sketchfab.com/md.abdur.razzak.sawon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/computer-desk-office-workstation-desk-abee23273b934648b565d512677aae8e
Title: Computer Desk Office Workstation Desk
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function ComputerDesk(props) {
  const { nodes, materials } = useGLTF("/computerDesk-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface56_lambert2_0.geometry}
        material={materials.lambert2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/computerDesk-transformed.glb");
