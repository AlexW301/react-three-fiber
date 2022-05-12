import { useState } from "react";

const OctohedronMesh = ({position}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <mesh position={position} onClick={() => setIsFocused(!isFocused)}>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial color={isFocused ? 'red' : 'green'} />
    </mesh>
  );
};

export default OctohedronMesh;
