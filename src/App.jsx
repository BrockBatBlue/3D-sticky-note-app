import { Suspense } from "react";
import "./App.css";
import MainScene from "./components/MainScene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <Suspense camera={{ position: [-6, 3.9, 6.21] }} fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[0, 6.0, 4.4]} intensity={Math.PI * 2} />
        <OrbitControls target0={[0, 1, 0]} />
        <MainScene />
      </Suspense>
    </Canvas>
  );
}

export default App;
