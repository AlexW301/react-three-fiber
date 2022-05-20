import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("assets/monster/monster.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-0.09, 4.01, 8.49]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-1.24, 2.46, 8.49]}
        rotation={[-2.89, -0.15, -3.1]}
        scale={[0.35, 1.03, 0.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-1.26, 1.02, 8.68]}
        rotation={[2.63, -0.16, 3.05]}
        scale={[0.24, 0.71, 0.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-1.28, 0.39, 8.55]}
        rotation={[1.57, 0, 2.96]}
        scale={[0.46, 0.71, 0.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-0.09, 6.58, 8.23]}
        rotation={[2.94, 0, -Math.PI]}
        scale={[1.77, 1.77, 1.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[-1.06, 3.69, 8.8]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.43}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[-3.27, 6.4, 8.58]}
        rotation={[1.44, 1.13, 2.83]}
        scale={[1.98, 0.89, 0.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[-1.88, 8.21, 7.86]}
        rotation={[-3.02, -0.05, -1.96]}
        scale={[1.51, 1.51, 1.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[-4.46, 4.32, 8.51]}
        rotation={[1.58, 1.08, -2.68]}
        scale={[0.7, 0.7, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[-4.92, 3.42, 7.92]}
        rotation={[1.42, 1.14, -2.59]}
        scale={[0.49, 0.49, 0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[-4.85, 3.52, 7.3]}
        rotation={[1.51, 0.86, -2.99]}
        scale={[-0.22, -0.2, -0.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[-5.09, 3.01, 7.41]}
        rotation={[1.09, 0.98, 2.52]}
        scale={[-0.16, -0.19, -0.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[-5.16, 2.86, 7.73]}
        rotation={[1.52, 1.12, 2.05]}
        scale={[-0.16, -0.19, -0.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={nodes.Cube022.material}
        position={[-5.21, 2.78, 8.07]}
        rotation={[1.96, 1.16, 1.55]}
        scale={[-0.16, -0.19, -0.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[-0.08, 8.43, 6.02]}
        rotation={[2.85, 0, -Math.PI]}
        scale={0.58}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials.red}
        position={[-0.26, 8.45, 5.36]}
        rotation={[3.08, 0.13, 2.04]}
        scale={[0.09, 0.11, 0.03]}
      />
    </group>
  );
}

useGLTF.preload("/monster.glb");