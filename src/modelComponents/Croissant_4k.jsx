/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 croissant_4k.gltf --transform 
Files: croissant_4k.gltf [2.68KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\kitchen\croissant_4k.gltf\croissant_4k-transformed.glb [908.5KB] (-33799%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/croissant_4k-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.croissant.geometry} material={materials.croissant} />
    </group>
  )
}

useGLTF.preload('/croissant_4k-transformed.glb')
