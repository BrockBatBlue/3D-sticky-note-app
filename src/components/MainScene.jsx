import { EmptyHouse } from "../modelComponents/EmptyHouse";
import { Kiwi } from "../modelComponents/Food_kiwi_01_4k";
import { PaintedTable } from "../modelComponents/Painted_wooden_table_4k";
import { PaintedChair } from "../modelComponents/Painted_wooden_chair_01_4k";
import { WoodenPlate } from "../modelComponents/Carved_wooden_plate_4k";

const MainScene = () => {
  return (
    <>
      <EmptyHouse />
      <PaintedTable position={[-2.85, -0.821, -0.57]} />
      <PaintedChair position={[-2.6, -0.821, -0.1]} rotation-y={[2.8]} />
      <group position={[-2.5, -0.032, -0.5]}>
        <WoodenPlate />
        <Kiwi position-y={[0.02]} rotation-x={-1} />
        <Kiwi position={[0.03, 0.02, 0.01]} rotation-x={1} />
      </group>
    </>
  );
};

export default MainScene;
