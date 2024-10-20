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
import { BedroomDrawer } from "../modelComponents/Vintage_wooden_drawer_01_4k";
import { BedroomNightStand } from "../modelComponents/Painted_wooden_nightstand_4k";
import { AlarmClock } from "../modelComponents/Alarm_clock_01_4k";
import WoodLivingFloor from "./LivingRoomDiningRoomFloor";
import OuterWalls from "./TransparentOuterWalls";
import { ModernKitchen } from "../modelComponents/ModernKitchen";
import { BathtubSet } from "../modelComponents/BathtubSet";
import { Toilet } from "../modelComponents/Toilet";
import { BathroomSink } from "../modelComponents/BathroomSink";
import { Shower } from "../modelComponents/Shower";
import { Tv } from "../modelComponents/Tv";
import { Computer } from "../modelComponents/Computer";
import { Folders } from "../modelComponents/Folders";
import { Suitcase } from "../modelComponents/Vintage_suitcase_4k";
import { ShagRug } from "../modelComponents/DescansoShagRug";
import { BathroomRug } from "../modelComponents/Bathroom_rug";
import { Physics } from "@react-three/cannon";
import ColliderBox from "./ColliderBox";

const MainScene = () => {
  // const gravity = useControls("Gravity", {
  //   x: { value: 0, min: -10, max: 10, step: 0.1 },
  //   y: { value: -9.8, min: -10, max: 10, step: 0.1 },
  //   z: { value: 0, min: -10, max: 10, step: 0.1 },
  // });

  return (
    <>
      {/* <EmptyHouse /> */}
      <ModernKitchen
        rotation-y={1.57}
        scale={0.025}
        position={[-2.2, -0.821, 4.5]}
      />
      {/* blue painted table group  */}
      <group position={[-2.1, -0.821, -0.9]}>
        <PaintedTable />
        <PaintedChair rotation-y={[2.8]} position={[0, 0, 0.4]} />
        <KitchenPlant position={[-0.8, 0.788, -0.2]} />
        <ChessSet position={[0, 0.788, 0]} />
        <group position={[0.7, 0.788, -0.2]}>
          <WoodenPlate />
          <Cake position={[0, 0.03, 0]} />
        </group>
        <group position={[0.5, 0.788, 0.25]}>
          <WoodenPlate />
          <Kiwi position-y={[0.02]} rotation-x={-1} />
          <Kiwi position={[0.03, 0.02, 0.01]} rotation-x={1} />
          <Pomegranate position={[-0.078, 0.02, 0]} />
        </group>
      </group>
      <ArmChair rotation-y={-4.7} position={[-3.5, -0.8201, 1]} />
      <ArmChair rotation-y={4.7} position={[0.32, -0.8201, 1.7]} />
      {/* wooden cabinet set */}
      <group position={[0.4, -0.8201, 0]}>
        <ModernWoodenCabinet rotation-y={4.71} />
        <TeaSet rotation-y={4.71} position={[-0.03, 0.545, 0.37]} />
        <WoodenPlate position={[0, 0.545, -0.4]} />
        <CarrotCake position={[0, 0.57, -0.4]} />
      </group>
      {/* bookshelf group */}
      <group position={[-2.74, -0.821, 2.37]}>
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
      {/* living room */}
      <SofaA position={[-2.62, -0.821, 3.05]} />
      <CoffeeTable position={[-2.4, -0.821, 4.3]} />
      <GreenChair rotation-y={2.8} position={[-3.4, -0.821, 5]} />
      <GreenChair rotation-y={-1.57} position={[-1, -0.821, 4.6]} />
      <Tv rotation-y={3.14} position={[0, 1, 5.7]} />
      <ShagRug rotation-y={1.57} position={[-2.5, -0.85, 4.3]} />
      {/* office */}
      <group position={[1.2, -0.821, 3.5]}>
        <SteelFrameShelves rotation-y={-4.7} />
        <Folders rotation-y={1.57} position={[-0.05, 1.37, 3.6]} />
        <Suitcase rotation-y={1.57} position={[2.5, 0, -0.3]} />
      </group>
      <ModernArmChair rotation-y={-4.7} position={[3.2, -0.821, 4.89]} />
      <ArmChair position={[2.8, -0.8201, 2.78]} />
      <group position={[3.6, -0.821, 4.7]}>
        <ComputerDesk rotation-y={4.7} />
        <Computer rotation-y={-1.57} position={[0, 1.01, 0.17]} />
        <Jug rotation-y={1} position={[0, 0.75, -0.4]} />
      </group>
      {/* Bedroom */}
      <group rotation-y={-1.57} position={[2.9, -0.8201, -0.4]}>
        <Bed />
        <BedroomDrawer rotation-y={3.14} position={[0, 0, 1.85]} />
        <group position={[-0.9, 0, -0.78]}>
          <BedroomNightStand />
          <AlarmClock rotation-y={-4.4} position={[0, 0.432, 0.03]} />
          <BedroomNightStand position={[1.8, 0, 0]} />
        </group>
      </group>
      {/* Bathroom */}
      <group position={[-1, 0.68, -4.2]}>
        <BathtubSet rotation-y={1.57} />
        <Toilet position={[4.5, -1.48, -1.5]} />
        <BathroomSink rotation-y={3.14} position={[2.87, -1.48, 1.3]} />
        <Shower rotation-y={3.14} position={[4.5, -1, 1.05]} />
        <BathroomRug position={[3.56, -1.48, -0.95]} />
      </group>
      {/* floor textures */}
      <Physics>
        <WoodLivingFloor />
        {/* Outer Wall s */}
        <OuterWalls />
        {/* kitchen area */}
        <ColliderBox position={[-2.2, -0.42, -2.65]} scale={[3.5, 0.75, 0.6]} />
        <ColliderBox
          position={[-3.1, -0.42, -5.345]}
          scale={[1.5, 0.75, 0.6]}
        />
        <ColliderBox position={[-3.55, -0.42, -4]} scale={[0.6, 0.75, 2.09]} />
        <ColliderBox
          position={[-1.6, 0.39, -5.345]}
          scale={[1.475, 2.4, 0.6]}
        />
        <ColliderBox position={[-3.65, 1.1, -4]} scale={[0.4, 0.9, 3.3]} />
        <ColliderBox position={[-2.9, 1.18, -5.42]} scale={[1.2, 0.75, 0.42]} />
        {/* Reading area */}
        <ColliderBox
          position={[-2.1, -0.42, -0.895]}
          scale={[1.975, 0.78, 0.95]}
        />
        <ColliderBox position={[0.41, -0.54, 0]} scale={[0.425, 0.54, 1.955]} />
        <ColliderBox position={[0.334, -0.32, 1.7]} scale={[0.66, 1, 0.8]} />
        <ColliderBox position={[-3.5, -0.32, 1]} scale={[0.66, 1, 0.8]} />
        <ColliderBox position={[-2.75, 0.25, 2.23]} scale={[1, 2.2, 0.27]} />
        {/* Bedroom */}
        <ColliderBox
          position={[1.05, -0.49, -0.4]}
          scale={[0.53, 0.64, 1.03]}
        />
        <ColliderBox
          position={[2.75, -0.58, -0.4]}
          scale={[1.365, 0.445, 1.35]}
        />
        <ColliderBox
          position={[3.56, -0.572, -0.4]}
          scale={[0.25, 0.51, 1.35]}
        />
        <ColliderBox
          position={[3.78, -0.475, -0.4]}
          scale={[0.2, 0.68, 1.35]}
        />
        <ColliderBox
          position={[3.68, -0.595, 0.495]}
          scale={[0.35, 0.42, 0.35]}
        />
        <ColliderBox
          position={[3.68, -0.595, -1.303]}
          scale={[0.35, 0.42, 0.35]}
        />
        <ColliderBox position={[3.65, -0.3, -1.29]} scale={[0.15, 0.17, 0.1]} />
        {/* Office */}
        <ColliderBox
          position={[3.69, -0.544, 3.2]}
          scale={[0.24, 0.523, 1.615]}
        />
        <ColliderBox position={[2.8, -0.28, 2.73]} scale={[0.78, 1.05, 0.7]} />
        <ColliderBox
          position={[1.21, 0.09, 3.398]}
          scale={[0.585, 1.78, 1.85]}
        />
        <ColliderBox
          position={[3.035, -0.42, 4.9]}
          scale={[0.52, 0.77, 0.65]}
        />
        <ColliderBox position={[3.6, -0.43, 4.7]} scale={[0.59, 0.73, 1.2]} />
        <ColliderBox
          position={[3.435, -0.042, 4.755]}
          scale={[0.195, 0.0445, 0.577]}
        />
        <ColliderBox
          position={[3.51, -0.042, 5.23]}
          scale={[0.129, 0.0445, 0.085]}
        />
        <ColliderBox
          position={[3.733, -0.057, 4.81]}
          scale={[0.256, 0.018, 0.258]}
        />
        <ColliderBox
          position={[3.799, 0.143, 4.808]}
          scale={[0.045, 0.382, 0.05]}
        />
        <ColliderBox
          position={[3.747, 0.26, 4.804]}
          scale={[0.055, 0.215, 0.535]}
        />
        <ColliderBox
          position={[3.711, 0.26, 4.806]}
          scale={[0.035, 0.384, 0.61]}
        />
        <ColliderBox position={[3.6, 0.03, 4.3]} scale={[0.166, 0.19, 0.23]} />
        {/* Living room */}
      </Physics>
    </>
  );
};

export default MainScene;
