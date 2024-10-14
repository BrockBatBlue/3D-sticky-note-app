/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Sofa_01_4k.gltf --transform 
Files: Sofa_01_4k.gltf [2.64KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\living room\Sofa_01_4k.gltf\Sofa_01_4k-transformed.glb [698.78KB] (-26369%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Sofa_01_4k-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sofa_01.geometry} material={materials.Sofa_01} />
    </group>
  )
}

useGLTF.preload('/Sofa_01_4k-transformed.glb')
