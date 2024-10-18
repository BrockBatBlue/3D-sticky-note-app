import { MeshTransmissionMaterial } from "@react-three/drei";
const OuterWallFour = () => {
  return (
    <>
      <mesh rotation-y={1.571} position={[0, 0.68, 5.7]}>
        <boxGeometry args={[0.4, 3, 8]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
    </>
  );
};

export default OuterWallFour;
