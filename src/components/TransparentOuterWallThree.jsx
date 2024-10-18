import { MeshTransmissionMaterial } from "@react-three/drei";
const OuterWallThree = () => {
  return (
    <>
      <mesh rotation-y={1.571} position={[0, 0.68, -4.8]}>
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

export default OuterWallThree;
