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
import VrModel from "../components/VrModel";
import Test from "../components/Test";
import RoadScene from "../components/RoadScene";

import { useStateContext, StateContext } from "../context/StateContext";
import Bumper from "../components/react-three-fiber/Bumper";

const Home = () => {
  const [scene, setScene] = useState(1);
  const { hit } = useStateContext();
  const scroll = useRef();

  return (
    <div>
      <div className={styles.nav}>
        <img src="/pmllogo.png" alt="logo" />
        <nav className={styles.navLinks}>
          <ul>
            <li
              onClick={() => {
                setScene(1);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                setScene(3);
              }}
            >
              Learn
            </li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.infoSection}>
          <div className="flex flex-col gap-9">
            <h1 className="text-8xl text-transparent capitalize bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
              Let's go for a ride!
            </h1>
            <div className="flex flex-col gap-4 items-center text-center h-fit py-5 px-3 bg-white border-2 border-red-700 rounded-md shadow-md">
            <h2 className="text-gray-700 text-3xl w-fit">Are you looking to purchase or refinance?</h2>
            <div className="flex gap-4 w-fit">
              <button className="px-7 py-3 text-white tracking-wide rounded-md bg-gradient-to-r from-red-600 to-red-700 hover:to-red-800 hover:from-red-700">Purchase</button>
              <button className="px-7 py-3 text-white tracking-wide rounded-md bg-gradient-to-r from-red-600 to-red-700 hover:to-red-800 hover:from-red-700">Refinance</button>
            </div>
            </div>
          </div>
        </div>
        <div className={scene === 1 ? styles.canvasContainer : styles.golfGame}>
          {scene === 1 && (
            <Canvas>
              {/* <CameraControls /> */}
              <ambientLight intensity={0.1} />
              <directionalLight color="#ffffff" position={[2, 2, 5]} />
              {/* <Door /> */}
              {/* <VrModel scroll={scroll}/> */}
              {/* <Test /> */}
              <RoadScene />
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
            <Canvas
              className={styles.golfGame}
              camera={{ fov: 75, position: [0, 25, -10] }}
            >
              <CameraControls />
              <ambientLight intensity={0.6} />
              <directionalLight color="#ffffff" position={[2, 2, 5]} />
              <Physics
                defaultContactMaterial={{
                  friction: 0.1,
                  restitution: 0.7,
                  frictionEquationStiffness: 1e6,
                  frictionEquationRelaxation: 1e6,
                }}
                gravity={[0, -9.81, 0]}
              >
                <Ball
                  position={[
                    (Math.random() - 0.5) * 15,
                    2,
                    (Math.random() - 0.5) * 10,
                  ]}
                />
                <Bumper />
                <Plane />
              </Physics>
            </Canvas>
          )}

          {scene === 4 && (
            <Canvas
              camera={{ fov: 75, position: [0, 25, 20] }}
              color="black"
              shadows
            >
              <color attach="background" args={["black"]} />
              <CameraControls />
              <ambientLight intensity={0.5} />
              <fog args={["#262837", 1, 15]} />
              {/* <directionalLight color="#ffffff" position={[9.02, 11.6, -4.37]} /> */}
              <DirectionalLight />
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
      </div>
    </div>
  );
};

export default Home;
