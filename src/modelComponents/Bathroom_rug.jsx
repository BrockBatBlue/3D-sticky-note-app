/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 bathroom_rug.gltf --transform 
Files: bathroom_rug.gltf [4.97KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\bathroom\bathroom_rug_two\bathroom_rug-transformed.glb [97.21KB] (-1856%)
Author: robfitzy (https://sketchfab.com/robfitzy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bathroom-rug-two-3481214361e94161b6108ed9bd127aba
Title: Bathroom Rug Two
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/bathroom_rug-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['ChamferBox002_01_-_Default_0'].geometry} material={materials['01_-_Default']} position={[0.937, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.025, 0.017, 0.007]} />
    </group>
  )
}

useGLTF.preload('/bathroom_rug-transformed.glb')
