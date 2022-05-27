import { useSphere } from "@react-three/cannon";
import * as THREE from "three";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";
import { Html } from "@react-three/drei";
import { TextureLoader } from "three";

const Ball = (props) => {
  /******************************/
  /** VARIABLES **/
  /******************************/
  const state = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 0.7,
    position: [0, 5, 0],
    ...props,
  }));
  let startTime, endTime, timeHeld, power, charging, force, ballPosition, pointer;

  startTime = 0;
  power = 0;
  force = 8;
  charging = false;
  pointer = useRef(null);
  ballPosition = new THREE.Vector3(0, 5, 0); // Get and Update the ball position for use on the pointer

  /******************************/
  /** TEXTURES **/
  /******************************/
  const colorMap = useLoader(TextureLoader, "/textures/direction/color.jpg");
  const alphaMap = useLoader(TextureLoader, "/textures/direction/alpha.jpg");

  /******************************/
  /** API SUBSCRIBES / UPDATES **/
  /******************************/

  // Updates ballPosition variable
  api.position.subscribe((value) => {
    ballPosition = value;
  });

  // Show / Hide HUD based on the balls speed
  api.velocity.subscribe((velocity) => {
    if (velocity[0] < 0.05) {
      pointer.current.visible = true;
      window.document.querySelector(
        ".powerDisplay"
      ).innerHTML = `Power ${power}%`;
    } else {
      pointer.current.visible = false;
      window.document.querySelector(".powerDisplay").innerHTML = ``;
    }
  });

  /******************************/
  /** EVENT LISTENERS **/
  /******************************/

  // Start timer on mouse down
  window.addEventListener("mousedown", () => {
    startTime = state.clock.elapsedTime;
    charging = true;
  });

  // Calculate and apply force on mouse up
  window.addEventListener("mouseup", () => {
    endTime = state.clock.elapsedTime;
    timeHeld = endTime - startTime < 3 ? endTime - startTime : 3;

    api.angularDamping.set(0.7);
    api.applyLocalImpulse([0, 0, force * timeHeld], [0, 0, 0]);

    charging = false;
    power = 0;
    window.document.querySelector(
      ".powerDisplay"
    ).innerHTML = `Power ${power}%`;
  });

  /******************************/
  /** TICK / useFrame() **/
  /******************************/

  useFrame(({ mouse, camera, clock }) => {
    const x = mouse.x * (Math.PI * 1);
    api.rotation.set(0, -x, 0); // Rotate the ball base on the mouses x position

    // Update rotation and position of the pointer
    pointer.current.rotation.set(-Math.PI / 2, 0, -x);
    pointer.current.position.set(
      ballPosition[0],
      ballPosition[1] - 0.9,
      ballPosition[2]
    );

    // Update the power if the shot is charging
    if (charging) {
      power =
        clock.elapsedTime - startTime < 3 ? clock.elapsedTime - startTime : 3;
      power = Math.round((power / 3) * 100);
      window.document.querySelector(
        ".powerDisplay"
      ).innerHTML = `Power ${power}%`;
    }
  });

  /******************************/
  /** SHADERS **/
  /******************************/

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
      `,
    }),
    []
  );

  return (
    <group>
      <mesh position={[0, 5, 0]} ref={ref}>
        <sphereGeometry args={[0.5, 16, 16]}></sphereGeometry>
        <meshStandardMaterial color={"white"}></meshStandardMaterial>
        <Html>
          <h1 className="powerDisplay">Power {power}%</h1>
        </Html>
      </mesh>
      <mesh
        ref={pointer}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.1, 0]}
      >
        <planeGeometry args={[4, 4]}></planeGeometry>
        <meshStandardMaterial
          transparent={true}
          alphaMap={alphaMap}
          map={colorMap}
        ></meshStandardMaterial>
        {/* <shaderMaterial {...shaderData}></shaderMaterial> */}
      </mesh>
    </group>
  );
};

export default Ball;
