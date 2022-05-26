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
    mass: 0.7,
    position: [0, 5, 0],
    ...props,
  }));
  const state = useThree();
  const pointer = useRef(null);
  let ballPosition = new THREE.Vector3(0, 5, 0);
  let startTime, endTime, timeHeld;

  api.position.subscribe((value) => {
    ballPosition = value;
  });

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
    api.applyLocalImpulse([0, 0, 7 * timeHeld], [0, 0, 0]);
  });

  /** ROTATE BALL DIRECTION WITH MOUSE **/
  useFrame(({ mouse }) => {
    const x = mouse.x * Math.PI;
    const y = mouse.y;
    api.rotation.set(0, x, 0);
    // Updates the pointers position under the ball
    pointer.current.rotation.set(-Math.PI / 2, 0, x);
    pointer.current.position.set(ballPosition[0], ballPosition[1] - 0.9, ballPosition[2])
  });

  return (
    <group>
      <mesh position={[0, 5, 0]} ref={ref}>
        <sphereGeometry args={[0.5, 16, 16]}></sphereGeometry>
        <meshStandardMaterial color={"red"}></meshStandardMaterial>
      </mesh>
      <mesh ref={pointer} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeGeometry args={[2, 2]}></planeGeometry>
        <meshStandardMaterial color={"green"}></meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default Ball;
