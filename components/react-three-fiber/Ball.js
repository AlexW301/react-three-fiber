import { Physics, useBox, useSphere } from "@react-three/cannon";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";

const Ball = () => {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 5, 0]}));
  const force = new THREE.Vector3(100, 0, 0)
  const position = new THREE.Vector3(0, 5, 0)
  useFrame(() => {
    // console.log(api.applyForce([0, 1, 1], [0, 0, 0]))
  })
  return (
    <mesh onClick={(event) => { api.applyImpulse([5, 0, 1], [0, 0, 0]) }} position={[5, 0, 0]} ref={ref}>
      <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
  );
};

export default Ball
