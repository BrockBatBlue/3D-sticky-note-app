import { MeshTransmissionMaterial } from "@react-three/drei";
const OuterWallTwo = () => {
  return (
    <>
      <mesh position={[4.13, 0.68, 0.44]}>
        <boxGeometry args={[0.4, 3, 10.9]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
    </>
  );
};

export default OuterWallTwo;
