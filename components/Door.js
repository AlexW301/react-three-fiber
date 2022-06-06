import { useLoader, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useState, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three"

const Door = () => {
  const obj = useLoader(
    OBJLoader,
    "/door/16695_36x96_6_Panel_Door-White_V1.obj"
  );
  const door = useRef(null)
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    console.log(door.current)
    if(!isHovered) {
      door.current.rotation.z+= 0.005
    }
  })

  // console.log(obj.children)
  // obj.children[0].rotation.set(0, 0, -10)
  // obj.children[0].position.set(-22.5, -12.5, -4)
  return (
    <Suspense>
      <mesh onPointerOver={() => {setIsHovered(!isHovered)}} ref={door} scale={0.02} rotation={[Math.PI * 0.5, Math.PI, Math.PI]}>
        <primitive object={obj} />
      </mesh>
    </Suspense>
  );
};

export default Door;
