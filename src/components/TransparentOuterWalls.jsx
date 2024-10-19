import { MeshTransmissionMaterial } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useControls } from "leva";
const debug = false;
const OuterWalls = () => {
  useBox(() => ({
    position: [0, 1.5, 0],
    type: "Static",
  }));

  // useControls(outerWall);
  return (
    debug && (
      <mesh>
        <boxGeometry args={[8, 5, 12]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
    )
  );
};

export default OuterWalls;
