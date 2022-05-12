import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import OctohedronMesh from "../components/react-three-fiber/OctahedronMesh";
import CameraControls from "../components/react-three-fiber/utils/CameraControls";

const Home = () => {
  return (
    <div className="canvasContainer">
      <Canvas>
        <CameraControls />
        <ambientLight intensity={0.1} />
        <directionalLight color='#ffffff' position={[2, 2, 5]} />
        <OctohedronMesh position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
