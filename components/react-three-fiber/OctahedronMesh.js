import { Html } from "@react-three/drei";
import { useState } from "react";

const OctohedronMesh = ({position}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidden, setVisible] = useState(false);
  const [dynamicPosition, setDynamicPosition] = useState(position)

  return (
    <mesh position={dynamicPosition} onClick={() => setIsFocused(!isFocused)}>
      <boxGeometry args={[1]} />
      <meshStandardMaterial color={isFocused ? 'red' : 'blue'} />
      <Html style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        transform
        occlude
        onOcclude={setVisible}>
        <h1>Hello</h1>
        <button style={{ background: 'white', border: 'none', borderRadius: '30px', padding: '.5rem 1rem', cursor: 'pointer'}} onClick={() => {setDynamicPosition([(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, 0])}}>Click Here</button>
      </Html>
    </mesh>
  );
};

export default OctohedronMesh;
