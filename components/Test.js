
import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const color = new THREE.Color()

export default function Test() {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/assets/test/test.glb")
  console.log(animations)
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState()
  const [timeline, setTimeline] = useState(0)
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }
  useEffect(() => void (actions["CameraAction"].play().paused = true), [actions])
  useEffect(() => {
    if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])
  useFrame((state) => {
    actions["CameraAction"].time = THREE.MathUtils.lerp(actions["CameraAction"].time, actions["CameraAction"].getClip().duration * timeline, 0.05)
    group.current.children[0].children.forEach((child, index) => {
      child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020").convertSRGBToLinear(), hovered ? 0.1 : 0.05)
      const et = state.clock.elapsedTime
    //   child.position.y = Math.sin((et + index * 2000) / 2) * 1
    //   child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
    //   child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
    //   child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
    })
  })

  return (
    <group ref={group} dispose={null}>
      <group
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}>
            <mesh onClick={() => {setTimeline(1)}}>
            <primitive object={nodes.purchaseCube}/>
            </mesh>
           <primitive object={nodes.refiSphere}/>
           <mesh onClick={() => {setTimeline(0)}}>
                <primitive object={nodes.Suzanne}/>
           </mesh>
           <primitive object={nodes.Plane}/>
      </group>
      <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={30} near={0.1} fov={35} rotation={[-1.6, 0, 0]} position={[0, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  )
}

useGLTF.preload("/assets/vr/vrmodel.glb")