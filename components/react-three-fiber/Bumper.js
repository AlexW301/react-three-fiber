import {
    useBox
  } from "@react-three/cannon";

const Bumper = (props) => {
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [0, 1, 20],
        ...props,
      }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={[20, 1, 1]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Bumper;
