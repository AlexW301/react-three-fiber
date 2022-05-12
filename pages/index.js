import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import OctohedronMesh from "../components/react-three-fiber/OctahedronMesh";

const Home = () => {
  return (
    <div className="canvasContainer">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <OctohedronMesh position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
