import { Physics, useBox, useSphere, useContactMaterial } from "@react-three/cannon";
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber";
import React, { useContext, useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { Html } from "@react-three/drei";

const Ball = (props) => {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props}));
  const { viewport } = useThree()

  // Control power and shot
  const state = useThree()
  console.log(state.clock.elapsedTime)

  window.addEventListener("mousedown", () => {
    let startTime = state.clock.elapsedTime;

    window.addEventListener("mouseup", () => {
      let endTime = state.clock.elapsedTime;
      let timeHeld = endTime - startTime < 3 ? endTime - startTime : 3
      console.log(timeHeld)
      api.angularDamping.set(0.7)
      api.applyLocalImpulse([0, 0, 6 * timeHeld], [0,0,0]) 
    })
  })

  useFrame(({mouse, clock}) => {
    const x = (mouse.x) * Math.PI
    const y = (mouse.y)
    api.rotation.set(0, x, 0)
  })

  const hitBall = () => {
    // angularDampening is used to simulate friction for the sphere
    api.angularDamping.set(0.7)
    api.applyLocalImpulse([0, 0, 5], [0,0,0])
  }

  return (
    <mesh onClick={hitBall} position={[5, 0, 0]} ref={ref}>
      <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
  );
};

export default Ball
