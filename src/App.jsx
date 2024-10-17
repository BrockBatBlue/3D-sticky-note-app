import { Suspense } from "react";
import "./App.css";
import MainScene from "./components/MainScene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <directionalLight position={[1, 8, 1]} intensity={4} />
      <ambientLight intensity={5} />
      <Environment
        files="/textures/background/sky-7218043_1280.jpg"
        background
        backgroundBlurriness={0.3}
      />
      <Suspense camera={{ position: [0, 3.9, 2] }} fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[0, 6.0, 4.4]} intensity={Math.PI * 2} />
        <OrbitControls target0={[0, 1, 0]} />
        <MainScene />
      </Suspense>
    </Canvas>
  );
}

export default App;
