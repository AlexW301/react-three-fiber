import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/old-guy/old-guy.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-0.01, 2.97, 0]}
        scale={[1.11, 1, 0.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 4.06, 0.57]}
        scale={[0.53, 0.72, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[1.24, 2.88, 0]}
        scale={[0.14, 1, 0.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[1.24, 1.67, 0]}
        scale={[0.1, 0.23, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[0.36, 1.12, 0]}
        scale={[0.23, 0.85, 0.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["brown brown"]}
        position={[0.36, 0.13, 0.13]}
        scale={[0.23, -0.14, 0.44]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.brown}
        position={[0, 4.44, 0.44]}
        scale={[0.59, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[0, 4.13, 0.75]}
        scale={[0.12, 0.23, 0.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[0, 3.62, 0.72]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.white}
        position={[0.29, 4.41, 0.69]}
        scale={0.11}
      />
      <mesh
        castShadow
        receiveShadow
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
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["grey.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["torch light"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/old-guy.glb");