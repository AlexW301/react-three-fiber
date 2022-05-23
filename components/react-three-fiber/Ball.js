import { Physics, useBox, useSphere, useContactMaterial } from "@react-three/cannon";
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";

const Ball = (props) => {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props}))
  const { viewport } = useThree()
  useFrame(({mouse}) => {
    const x = (mouse.x) * Math.PI
    const y = (mouse.y)
    api.rotation.set(0, x, 0)
  })
  console.log(api)
  const hitBall = () => {
    // angularDampening is used to simulate friction for the sphere
    api.angularDamping.set(0.7)
    api.applyLocalImpulse([0, 0, 5], [0,0,0])
  }

  return (
    <mesh onClick={hitBall} position={[5, 0, 0]} ref={ref}>
      <boxGeometry args={[1, 16, 16]}></boxGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
  );
};

export default Ball
