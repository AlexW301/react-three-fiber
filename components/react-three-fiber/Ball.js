import { Physics, useBox, useSphere, useContactMaterial } from "@react-three/cannon";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";

const Ball = (props) => {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props}));
  api.material.set('ball', {
    friction: 0.5,
    restitution: 1
  })

  useContactMaterial('ball', 'plane')
  console.log(ref)
  return (
    <mesh onClick={(event) => { api.applyImpulse([0, 0, 2], [0,0,0]) }} position={[5, 0, 0]} ref={ref}>
      <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
  );
};

export default Ball
