import * as THREE from "three";
import React from "react";
import { useTexture } from "@react-three/drei";

const WoodLivingFloor = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      "/textures/floors/older-wood-flooring-ue/older-wood-flooring_albedo.png",
      "/textures/floors/older-wood-flooring-ue/older-wood-flooring_height.png",
      "/textures/floors/older-wood-flooring-ue/older-wood-flooring_normal-dx.png",
      "/textures/floors/older-wood-flooring-ue/older-wood-flooring_roughness.png",
      "/textures/floors/older-wood-flooring-ue/older-wood-flooring_ao.png",
    ]);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(3, 3);

  displacementMap.wrapS = THREE.RepeatWrapping;
  displacementMap.wrapT = THREE.RepeatWrapping;
  displacementMap.repeat.set(3, 3);

  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(3, 3);

  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(3, 3);

  aoMap.wrapS = THREE.RepeatWrapping;
  aoMap.wrapT = THREE.RepeatWrapping;
  aoMap.repeat.set(3, 3);

  return (
    <>
      <ambientLight intensity={0.15} />
      <mesh position={[0, -1.4, 0]} rotation-x={-1.57}>
        <planeGeometry args={[8, 12]} />
        <meshStandardMaterial
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
};

export default WoodLivingFloor;
