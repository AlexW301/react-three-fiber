import { FirstPersonControls } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  return (
    <FirstPersonControls lookVertical={false} args={[camera, domElement]} onClick={() => {console.log('res')}} />
  );
};

export default CameraControls;

// const CameraControls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   const controls = useRef();
//   useFrame((state) => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, domElement]}
//       enableDamping={true}
//     />
//   );
// };

// export default CameraControls;