import {
  Physics,
  useBox,
  useSphere,
  useContactMaterial,
  usePlane,
} from "@react-three/cannon";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useContext, useState, useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import { Html } from "@react-three/drei";

const Ball = (props) => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 5, 0],
    ...props,
  }));
  const state = useThree();
  const plane = useRef(null);
  let startTime, endTime, timeHeld;
console.log(plane.current)
  /** START TIMER ON MOUSE DOWN **/
  window.document.addEventListener("mousedown", () => {
    startTime = state.clock.elapsedTime;
  });

  /** CALCULATE AND APPLY FORCE **/
  window.document.addEventListener("mouseup", () => {
    endTime = state.clock.elapsedTime;
    timeHeld = endTime - startTime < 3 ? endTime - startTime : 3;

    console.log(timeHeld);

    api.angularDamping.set(0.7);
    api.applyLocalImpulse([0, 0, 5 * timeHeld], [0, 0, 0]);
  });
  
  /** ROTATE BALL DIRECTION WITH MOUSE **/
  useFrame(({ mouse }) => {
    const x = mouse.x * Math.PI;
    const y = mouse.y;
    api.rotation.set(0, x, 0);

  });

  return (
    <group>
      <mesh position={[0, 5, 0]} ref={ref}>
        <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
        <meshStandardMaterial color={"red"}></meshStandardMaterial>
      </mesh>
      <mesh ref={plane} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeGeometry args={[2, 2]}></planeGeometry>
        <meshStandardMaterial color={"green"}></meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default Ball;
