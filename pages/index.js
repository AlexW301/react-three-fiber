import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import OctohedronMesh from "../components/react-three-fiber/OctahedronMesh";
import CameraControls from "../components/react-three-fiber/utils/CameraControls";
import { useState } from "react";
import Door from "../components/Door";
import { PointerLockControls } from "@react-three/drei";

const Home = () => {
  const [scene, setScene] = useState(1);
  return (
    <>
      <h1>Hello</h1>
      <button
        onClick={() => {
          setScene(1);
        }}
      >
        Scene 1
      </button>
      <button
        onClick={() => {
          setScene(2);
        }}
      >
        Scene 2
      </button>
      <div className="canvasContainer">
        {scene === 1 && (
          <Canvas>
            <CameraControls />
            <ambientLight intensity={0.1} />
            <directionalLight color="#ffffff" position={[2, 2, 5]} />
            <Door />
            {/* <OctohedronMesh position={[0, 0, 0]} /> */}
          </Canvas>
        )}

        {scene === 2 && (
          <Canvas>
            <CameraControls />
            <ambientLight intensity={0.1} />
            <directionalLight color="#ffffff" position={[2, 2, 5]} />
            <OctohedronMesh position={[0, 0, 0]} />
          </Canvas>
        )}
      </div>
      <h1>Rest of website</h1>
    </>
  );
};

export default Home;
