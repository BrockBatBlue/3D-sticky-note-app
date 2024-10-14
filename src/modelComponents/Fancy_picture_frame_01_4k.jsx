/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 fancy_picture_frame_01_4k.gltf --transform 
Files: fancy_picture_frame_01_4k.gltf [5.06KB] > D:\OneDrive\Documents\personalProjects\threejs-and-react-projects\react-three-fiber-note-taking-app\public\models\readingRoom\fancy_picture_frame_01_4k.gltf\fancy_picture_frame_01_4k-transformed.glb [1.08MB] (-21257%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/fancy_picture_frame_01_4k-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.fancy_picture_frame_01.geometry} material={materials.fancy_picture_frame_01} />
      <mesh geometry={nodes.fancy_picture_frame_01_canvas.geometry} material={materials.fancy_picture_frame_01_canvas} />
    </group>
  )
}

useGLTF.preload('/fancy_picture_frame_01_4k-transformed.glb')
