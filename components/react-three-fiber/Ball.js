import { Physics, useBox, useSphere } from "@react-three/cannon";
import * as THREE from "three"

const Ball = () => {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 5, 0]}));
  console.log(api)

  return (
    <mesh position={[5, 0, 0]} ref={ref}>
      <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
  );
};

export default Ball
