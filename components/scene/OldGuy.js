import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import usePersonControls from "../../hooks/usePersonControls";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"

export default function Model(props) {
  const { forward, backward, left, right, jump } = usePersonControls()
  const playerModelReference = useRef(null)

  const [mesh, api] = useSphere(() => ({
    mass: 10,
    position: [0, 1, 0],
    type: 'Dynamic',
}))

const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const direction = new THREE.Vector3()

useFrame(() => {
  // Calculating front/side movement ...
  frontVector.set(0, 0, Number(forward) - Number(backward))
  sideVector.set(Number(right) - Number(left), 0, 0)
  direction
    .subVectors(frontVector, sideVector)
    .normalize()
    .multiplyScalar(20)

  api.velocity.set(direction.x, 0, direction.z)
})


  const group = useRef();
  console.log(playerModelReference.current)
  const { nodes, materials } = useGLTF("/assets/old-guy/old-guy.glb");
  return (
    <group ref={playerModelReference} {...props} dispose={null}>
      <mesh
        castShadow={true}
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-0.01, 2.97, 0]}
        scale={[1.11, 1, 0.38]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 4.06, 0.57]}
        scale={[0.53, 0.72, 0.18]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[1.24, 2.88, 0]}
        scale={[0.14, 1, 0.28]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[1.24, 1.67, 0]}
        scale={[0.1, 0.23, 0.21]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[0.36, 1.12, 0]}
        scale={[0.23, 0.85, 0.23]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube005.geometry}
        material={materials["brown brown"]}
        position={[0.36, 0.13, 0.13]}
        scale={[0.23, -0.14, 0.44]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube006.geometry}
        material={materials.brown}
        position={[0, 4.44, 0.44]}
        scale={[0.59, 0.1, 0.1]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[0, 4.13, 0.75]}
        scale={[0.12, 0.23, 0.12]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[0, 3.62, 0.72]}
        scale={0.16}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube009.geometry}
        material={materials.white}
        position={[0.29, 4.41, 0.69]}
        scale={0.11}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cube010.geometry}
        material={materials.black}
        position={[0.29, 4.44, 0.82]}
        scale={-0.03}
      />
      <group
        position={[-1.07, 1.63, 0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-0.09, -0.29, -0.09]}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["grey.001"]}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["torch light"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/old-guy.glb");