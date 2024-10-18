import { MeshTransmissionMaterial } from "@react-three/drei";
const OuterWalls = () => {
  return (
    <>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[8, 5, 12]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
    </>
  );
};

export default OuterWalls;
