import { Suspense } from "react";
import "./App.css";
import MainScene from "./components/MainScene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

function App() {
  return (
    <Canvas>
      <directionalLight position={[1, 8, 1]} intensity={4} />
      <ambientLight intensity={4} />
      <Environment
        files="/textures/background/kloofendal_48d_partly_cloudy_puresky_4k.hdr"
        background
        backgroundBlurriness={0.065}
      />
      <Suspense camera={{ position: [0, 3.9, 2] }} fallback={null}>
        {/* <ambientLight intensity={0.35} /> */}
        <directionalLight position={[0, 6.0, 4.4]} intensity={Math.PI * 2} />
        <OrbitControls target0={[0, 1, 0]} />
        <MainScene />
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.1}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={30} height={300} />
          <Noise opacity={0.01} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

export default App;
