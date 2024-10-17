/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 food_lime_01_4k.gltf --transform 
Files: food_lime_01_4k.gltf [2.7KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\kitchen\food_lime_01_4k.gltf\food_lime_01_4k-transformed.glb [605.53KB] (-22327%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/food_lime_01_4k-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.food_lime_01.geometry} material={materials.food_lime_01} />
    </group>
  )
}

useGLTF.preload('/food_lime_01_4k-transformed.glb')