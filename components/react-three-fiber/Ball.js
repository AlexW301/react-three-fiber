import { Physics, useBox, useSphere } from "@react-three/cannon";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";

const Ball = () => {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 5, 0]}));
  console.log(api)
  useFrame(() => {
    // api.velocity.set(1 * 10, 0, 0)
  })
  console.log(api)
  // const force = new THREE.Vector3(100, 0, 0)
  // const position = new THREE.Vector3(0, 5, 0)
  // api.applyImpulse(force, position)
  return (
    <mesh position={[5, 0, 0]} ref={ref}>
      <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
  );
};

export default Ball
