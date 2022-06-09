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
  const scroll = useRef()

  return (
    <div>
      <div className={styles.nav}>
        <img src="/pmllogo.png" alt="logo" />
        <nav className={styles.navLinks}>
          <ul>
            <li onClick={() => {setScene(1)}}>Home</li>
            <li onClick={() => {setScene(3)}}>Learn</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.infoSection}>
          <div>
            <h1 className={styles.header}>Getting a Home Loan Made easy</h1>
            <h5 className={styles.subHeader}>
              Learn more about home loans by watching our free informational
              class or playing a game!
            </h5>
            <div className={styles.btnContainer}>
              <button className={styles.primaryBtn}>
                Apply Now
              </button>
              <button className={styles.secondaryBtn}>
                Play Game
              </button>
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
            <Canvas className={styles.golfGame} camera={{ fov: 75, position: [0, 25, -10] }}>
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
