import {
  Physics,
  useBox,
  useSphere,
  useContactMaterial,
  usePlane,
} from "@react-three/cannon";
import * as THREE from "three";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import React, { useContext, useState, useRef, useMemo } from "react";
import { useStateContext } from "../../context/StateContext";
import { Html } from "@react-three/drei";
import { TextGeometry } from "three";
import { TextureLoader } from "three";

const Ball = (props) => {
  const [ref, api] = useSphere(() => ({
    mass: 0.7,
    position: [0, 5, 0],
    ...props,
  }));
  const state = useThree();
  const pointer = useRef(null);
  let startTime, endTime, timeHeld;
  // Get and Update the ball position for use on the pointer
  let ballPosition = new THREE.Vector3(0, 5, 0);
  api.position.subscribe((value) => {
    ballPosition = value;
  });
  // Textures
  const colorMap = useLoader(TextureLoader, "/textures/direction/color.jpg")
  const alphaMap = useLoader(TextureLoader, "/textures/direction/alpha.jpg")

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
    api.applyLocalImpulse([0, 0, (7 * timeHeld)], [0, 0, 0]);
  });

  /** ROTATE BALL DIRECTION WITH MOUSE **/
  useFrame(({ mouse }) => {
    const x = mouse.x * Math.PI;
    const y = mouse.y;
    api.rotation.set(0, -x, 0);
    // Updates the pointers position under the ball
    pointer.current.rotation.set(-Math.PI / 2, 0, -x);
    pointer.current.position.set(
      ballPosition[0],
      ballPosition[1] - 0.9,
      ballPosition[2]
    );
  });

  const shaderData = useMemo(
    () => ({
      vertexShader: `
      varying vec2 vUv;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;
        vUv = uv;
        }
      `,
      fragmentShader: `
      #define PI 3.14159
      varying vec2 vUv;

      void main()
      {
       float strength = vUv.y;
        
        gl_FragColor = vec4(strength, strength, strength, 1.0);
      }
      `
    }),
    []
  );

  return (
    <group>
      <mesh position={[0, 5, 0]} ref={ref}>
        <sphereGeometry args={[0.5, 16, 16]}></sphereGeometry>
        <meshStandardMaterial color={"white"}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={pointer}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.1, 0]}
      >
        <planeGeometry args={[4, 4]}></planeGeometry>
        <meshStandardMaterial alphaMap={alphaMap} map={colorMap}></meshStandardMaterial>
        {/* <shaderMaterial {...shaderData}></shaderMaterial> */}
      </mesh>
    </group>
  );
};

export default Ball;
