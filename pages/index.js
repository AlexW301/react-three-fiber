import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import OctohedronMesh from "../components/react-three-fiber/OctahedronMesh";
import CameraControls from "../components/react-three-fiber/utils/CameraControls";
import { useState, useRef } from "react";
import Door from "../components/Door";
import { PointerLockControls } from "@react-three/drei";

import { Physics, useBox, useSphere } from "@react-three/cannon";
import Ball from "../components/react-three-fiber/Ball";
import Plane from "../components/react-three-fiber/Plane";

import Street from "../components/scene/Street";
import OldGuy from "../components/scene/OldGuy";
import Monster from "../components/scene/Monster";
import DirectionalLight from "../components/scene/DirectionalLight";
import Spotlight from "../components/scene/Spotlight";

const Home = () => {
  const [scene, setScene] = useState(3);

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
      <button
        onClick={() => {
          setScene(3);
        }}
      >
        Scene 3
      </button>
      <button
        onClick={() => {
          setScene(4);
        }}
      >
        Scene 4
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

        {scene === 3 && (
          <Canvas camera={{ fov: 75, position: [0, 25, 20] }}>
            <CameraControls />
            <ambientLight intensity={0.6} />
            {/* <directionalLight color="#ffffff" position={[2, 2, 5]} /> */}
            <Physics gravity={[0, -9.81, 0]}>
              <Ball
                position={[
                  (Math.random() - 0.5) * 15,
                  2,
                  (Math.random() - 0.5) * 10,
                ]}
              />
              <Plane />
            </Physics>
          </Canvas>
        )}

        {scene === 4 && (
          <Canvas camera={{ fov: 75, position: [0, 25, 20] }} color="black" shadows>
             <color attach="background" args={["black"]} />
            <CameraControls />
            <ambientLight intensity={.5} />
            <fog args={['#262837', 1, 15]} />
            {/* <directionalLight color="#ffffff" position={[9.02, 11.6, -4.37]} /> */}
            <DirectionalLight/>
            <Spotlight />
            <Physics>
              <Monster />
              <OldGuy />
              <Street />
              {/* <Plane /> */}
            </Physics>
          </Canvas>
        )}
      </div>

      <h1>Rest of website</h1>
    </>
  );
};

export default Home;
