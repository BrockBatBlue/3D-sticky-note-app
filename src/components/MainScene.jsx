import { EmptyHouse } from "../modelComponents/EmptyHouse";
import { Kiwi } from "../modelComponents/Food_kiwi_01_4k";
import { PaintedTable } from "../modelComponents/Painted_wooden_table_4k";
import { PaintedChair } from "../modelComponents/Painted_wooden_chair_01_4k";
import { WoodenPlate } from "../modelComponents/Carved_wooden_plate_4k";
import { Pomegranate } from "../modelComponents/Food_pomegranate_01_4k";
import { Cake } from "../modelComponents/Strawberry_chocolate_cake_4k";
import { KitchenPlant } from "../modelComponents/Potted_plant_04_4k";
import { Shelf } from "../modelComponents/Shelf_01_4k";
import { Books } from "../modelComponents/Book_encyclopedia_set_01_4k";
import { ShelfPlant } from "../modelComponents/Potted_plant_02_4k";
import { VintageCamera } from "../modelComponents/Camera_01_4k";
import { StandingPicture } from "../modelComponents/Standing_picture_frame_01_4k";
import { ArmChair } from "../modelComponents/ArmChair_01_4k";
import { ModernWoodenCabinet } from "../modelComponents/Modern_wooden_cabinet_4k";
import { TeaSet } from "../modelComponents/Tea_set_01_4k";
import { ChessSet } from "../modelComponents/Chess_set_4k";
import { CarrotCake } from "../modelComponents/Carrot_cake_4k";
import { SofaA } from "../modelComponents/Sofa_03_4k";
import { CoffeeTable } from "../modelComponents/CoffeeTable_01_4k";
import { GreenChair } from "../modelComponents/GreenChair_01_4k";
import { ComputerDesk } from "../modelComponents/ComputerDesk";
import { SteelFrameShelves } from "../modelComponents/Steel_frame_shelves_03_4k";
import { ModernArmChair } from "../modelComponents/Modern_arm_chair_01_4k";
import { Jug } from "../modelComponents/Jug_01_4k";
import { Bed } from "../modelComponents/Bed";

const MainScene = () => {
  return (
    <>
      <EmptyHouse />
      <PaintedTable position={[-2.85, -0.821, -0.57]} />
      <PaintedChair position={[-2.6, -0.821, -0.1]} rotation-y={[2.8]} />
      <KitchenPlant position={[-3.7, -0.032, -0.35]} />
      <ChessSet position={[-3.2, -0.032, -0.5]} />
      <ArmChair rotation-y={3.14} position={[-2, -0.8201, 1.94]} />
      <ArmChair rotation-y={4.7} position={[0.32, -0.8201, 1.9]} />
      <group position={[0.56, -0.8201, 0.7]}>
        <ModernWoodenCabinet rotation-y={4.71} />
        <TeaSet rotation-y={4.71} position={[-0.03, 0.4148, 0.37]} />
        <WoodenPlate position={[0, 0.4148, -0.4]} />
        <CarrotCake position={[0, 0.44, -0.4]} />
      </group>
      <group position={[-2.1, -0.032, -0.75]}>
        <WoodenPlate />
        <Cake position={[0, 0.03, 0]} />
      </group>
      <group position={[-2.5, -0.032, -0.5]}>
        <WoodenPlate />
        <Kiwi position-y={[0.02]} rotation-x={-1} />
        <Kiwi position={[0.03, 0.02, 0.01]} rotation-x={1} />
        <Pomegranate position={[-0.078, 0.02, 0]} />
      </group>
      <group position={[-3.3, -0.821, 2.42]}>
        <Shelf rotation-y={3.14} />
        <group rotation-y={3.14}>
          <Books position={[-0.2, 0.146, 0.15]} />
          <Books position={[0.018, 0.395, 0.15]} />
          <Books position={[-0.42, 0.395, 0.15]} />
          <Books position={[-0.42, 0.688, 0.15]} />
          <Books position={[0.018, 0.688, 0.15]} />
          <Books position={[-0.42, 0.98, 0.15]} />
          <ShelfPlant rotation-y={3.14} position={[0.25, 0.98, 0.15]} />
          <Books position={[-0.42, 1.274, 0.15]} />
          <Books position={[0.018, 1.274, 0.15]} />
          <Books position={[0.018, 1.566, 0.15]} />
          <VintageCamera rotation-y={0.8} position={[-0.22, 1.566, 0.115]} />
          <StandingPicture rotation-y={-2} position={[0.3, 1.86, 0.15]} />
          <Books position={[-0.42, 1.86, 0.15]} />
        </group>
      </group>
      <SofaA position={[-2.62, -0.821, 3.05]} />
      <CoffeeTable position={[-2.6, -0.821, 4.3]} />
      <GreenChair rotation-y={2.8} position={[-3.4, -0.821, 5]} />
      <GreenChair rotation-y={-2.8} position={[-1.5, -0.821, 5]} />
      <SteelFrameShelves rotation-y={4.7} position={[3.7, -0.821, 3.1]} />
      <ModernArmChair rotation-y={-4.7} position={[3.2, -0.821, 4.92]} />
      <ArmChair position={[2.6, -0.8201, 2.78]} />
      <group position={[3.6, -0.821, 4.7]}>
        <ComputerDesk rotation-y={4.7} />
        <Jug rotation-y={1} position={[0, 0.75, -0.4]} />
      </group>
      <Bed position={[2.6, -0.8201, -1.76]} />
    </>
  );
};

export default MainScene;
