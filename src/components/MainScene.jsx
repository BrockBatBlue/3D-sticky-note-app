import { EmptyHouse } from "../modelComponents/EmptyHouse";
import { Kiwi } from "../modelComponents/Food_kiwi_01_4k";
import { PaintedTable } from "../modelComponents/Painted_wooden_table_4k";

const MainScene = () => {
  return (
    <>
      <EmptyHouse />
      <Kiwi />
      <PaintedTable position={[-2.85, -0.821, -0.57]} />
    </>
  );
};

export default MainScene;
