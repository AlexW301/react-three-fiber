// import * as THREE from "three";
// import React, { useEffect, useRef, useState } from "react";
// import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import CameraControls from "./react-three-fiber/utils/CameraControls";
// import { Camera } from "three";

// const color = new THREE.Color();

// export default function RoadScene() {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(
//     "/assets/test/roadScene.glb"
//   );
//   console.log(animations);
//   const { actions } = useAnimations(animations, group);
//   const [hovered, set] = useState();
//   const [timeline, setTimeline] = useState(0);
//   const extras = {
//     receiveShadow: true,
//     castShadow: true,
//     "material-envMapIntensity": 0.2,
//   };
//   useEffect(
//     () => void (actions["Camera.001Action"].play().paused = true),
//     [actions]
//   );
//   useEffect(() => void (actions["CubeAction"].play().paused = true), [actions]);
//   //   useEffect(() => {
//   //     if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
//   //     document.body.style.cursor = hovered ? "pointer" : "auto"
//   //   }, [hovered])
//   useFrame((state) => {
//     actions["Camera.001Action"].time = THREE.MathUtils.lerp(
//       actions["Camera.001Action"].time,
//       actions["Camera.001Action"].getClip().duration * timeline,
//       0.02
//     );
//     actions["CubeAction"].time = THREE.MathUtils.lerp(
//       actions["CubeAction"].time,
//       actions["CubeAction"].getClip().duration * timeline,
//       0.02
//     );
//     group.current.children[0].children.forEach((child, index) => {
//       //   child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020").convertSRGBToLinear(), hovered ? 0.1 : 0.05)
//       const et = state.clock.elapsedTime;
//       //   child.position.y = Math.sin((et + index * 2000) / 2) * 1
//       //   child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
//       //   child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
//       //   child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
//     });
//   });

//   return (
//     <group ref={group} dispose={null}>
//       <group
//         onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
//         onPointerOut={(e) => (e.stopPropagation(), set(null))}
//         position={[0, 0, 0]}
//         scale={[1, 1, 1]}
//       >
//         <primitive object={nodes.road} />
//         <mesh
//           onClick={() => {
//             setTimeline(0.3);
//           }}
//         >
//           <primitive object={nodes.sign}>
//             <Html
//               distanceFactor={1.5}
//               position={[2, 1.5, 0.5]}
//               rotation={[0, 1, 0]}
//               transform
//               occlude
//             >
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <div>
//                   <h2>Purchase?</h2>
//                   <button
//                     style={{
//                       padding: ".5rem 1rem",
//                     }}
//                     onClick={() => {setTimeline(0.3)}}
//                   >
//                     Click Here
//                   </button>
//                 </div>
//                 <div>
//                   <h2>Refi?</h2>
//                   <button
//                     style={{
//                       padding: ".5rem 1rem",
//                     }}
//                     onClick={() => {setTimeline(0.3)}}
//                   >
//                     Click Here
//                   </button>
//                 </div>
//               </div>
//             </Html>
//           </primitive>
//         </mesh>
//         <mesh
//           onClick={() => {
//             setTimeline(0.7);
//           }}
//         >
//           <primitive object={nodes.sign2} />
//         </mesh>
//         <mesh
//           onClick={() => {
//             setTimeline(0);
//           }}
//         >
//           <primitive object={nodes.sign3} />
//         </mesh>
//         <primitive object={nodes.Cube} />
//       </group>
//       <group
//         name="Camera001"
//         position={[-1.78, 2.04, 23.58]}
//         rotation={[1.62, 0.01, 0.11]}
//       >
//         <PerspectiveCamera
//           makeDefault
//           far={17}
//           near={0.1}
//           fov={30}
//           rotation={[-1.6, 0, 0]}
//           position={[0, 0, 0]}
//         >
//           <directionalLight
//             castShadow
//             position={[10, 20, 15]}
//             shadow-camera-right={8}
//             shadow-camera-top={8}
//             shadow-camera-left={-8}
//             shadow-camera-bottom={-8}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             intensity={2}
//             shadow-bias={-0.0001}
//           />
//         </PerspectiveCamera>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/assets/test/roadScene.glb");

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import CameraControls from "./react-three-fiber/utils/CameraControls";
import { Camera } from "three";

const color = new THREE.Color();

export default function RoadScene() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/car/car.glb"
  );
  console.log(nodes);
  const { actions } = useAnimations(animations, group);
  const [hovered, set] = useState();
  const [timeline, setTimeline] = useState(0);
  const extras = {
    receiveShadow: true,
    castShadow: true,
    "material-envMapIntensity": 0.2,
  };
  useEffect(
    () => void (actions["CameraAction.001"].play().paused = true),
    [actions]
  );
  useEffect(() => void (actions["carAction"].play().paused = true), [actions]);
  //   useEffect(() => {
  //     if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
  //     document.body.style.cursor = hovered ? "pointer" : "auto"
  //   }, [hovered])
  useFrame((state) => {
         const vec = new THREE.Vector3()
     state.camera.position.lerp(vec.set(state.mouse.x, state.mouse.y, 0), 0.05)
    actions["CameraAction.001"].time = THREE.MathUtils.lerp(
      actions["CameraAction.001"].time,
      actions["CameraAction.001"].getClip().duration * timeline,
      0.02
    );
    actions["carAction"].time = THREE.MathUtils.lerp(
      actions["carAction"].time,
      actions["carAction"].getClip().duration * timeline,
      0.03
    );
    group.current.children[0].children.forEach((child, index) => {
      let rx = Math.sin((et + index * 2000) / 1) / 10;
      let ry = Math.cos((et + index * 2000) / 1) / 10;
      const et = state.clock.elapsedTime;
      if(child.name === "car") {
        child.position.y = Math.sin((et + index * 100) / 1) * .05
        // child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
        child.rotation.y = Math.cos((et + index * 2000) / 2) / 50
        // child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
      }
    });
  });

  return (
    <group ref={group} dispose={null}>
      <group
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        onClick={() => {setTimeline(timeline === 1 ? 0 : 1)}}
      >
        <primitive object={nodes.car} />
        <primitive object={nodes.road} />

      </group>
      <group
        name="Camera"

      >
        <PerspectiveCamera
          makeDefault
          far={100}
          near={0.1}
          fov={25}
          rotation={[-1.6, 0, 0]}
          position={[0, 0, 0]}
        >
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
  );
}

useGLTF.preload("/assets/car/car.glb");

// import * as THREE from "three";
// import React, { useEffect, useRef, useState } from "react";
// import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import CameraControls from "./react-three-fiber/utils/CameraControls";
// import { Camera } from "three";

// const color = new THREE.Color();

// export default function RoadScene() {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/assets/house/house.glb");
//   console.log(animations);
//   const { actions } = useAnimations(animations, group);
//   const [hovered, set] = useState();
//   const [timeline, setTimeline] = useState(0);
//   const extras = {
//     receiveShadow: true,
//     castShadow: true,
//     "material-envMapIntensity": 0.2,
//   };
//   useEffect(
//     () => void (actions["CameraAction"].play().paused = true),
//     [actions]
//   );
//   useEffect(() => void (actions["doorAction"].play().paused = true), [actions]);
//   //   useEffect(() => {
//   //     if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
//   //     document.body.style.cursor = hovered ? "pointer" : "auto"
//   //   }, [hovered])
//   useFrame((state) => {
//     // const vec = new THREE.Vector3()
//     // state.camera.position.lerp(vec.set(state.mouse.x, state.mouse.y, 0), 0.05)
//     actions["CameraAction"].time = THREE.MathUtils.lerp(
//       actions["CameraAction"].time,
//       actions["CameraAction"].getClip().duration * timeline,
//       0.02
//     );
//     actions["doorAction"].time = THREE.MathUtils.lerp(
//       actions["doorAction"].time,
//       actions["doorAction"].getClip().duration * timeline,
//       0.03
//     );
//     group.current.children[0].children.forEach((child, index) => {
//       let rx = Math.sin((et + index * 2000) / 1) / 10;
//       let ry = Math.cos((et + index * 2000) / 1) / 10;
//       const et = state.clock.elapsedTime;
//       if (child.name === "car") {
//         child.position.y = Math.sin((et + index * 100) / 1) * 0.05;
//         // child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
//         child.rotation.y = Math.cos((et + index * 2000) / 2) / 50;
//         // child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
//       }
//     });
//   });

//   return (
//     <group ref={group} dispose={null}>
//       <group
//         position={[0, 0, 0]}
//         scale={[1, 1, 1]}
//         onClick={() => {
//           setTimeline(timeline === 1 ? 0 : 1);
//         }}
//       >
//         <primitive object={nodes.house} />
//         <primitive object={nodes.door} />
//       </group>
//       <group name="Camera">
//         <PerspectiveCamera
//           makeDefault
//           far={100}
//           near={0.01}
//           fov={25}
//           rotation={[-1.6, 0, 0]}
//           position={[0, 0, 0]}
//         >
//           <directionalLight
//             castShadow
//             position={[10, 20, 15]}
//             shadow-camera-right={8}
//             shadow-camera-top={8}
//             shadow-camera-left={-8}
//             shadow-camera-bottom={-8}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             intensity={2}
//             shadow-bias={-0.0001}
//           />
//         </PerspectiveCamera>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/assets/house/house.glb");
