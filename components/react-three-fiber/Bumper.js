import { useBox } from "@react-three/cannon";

  import { useStateContext, StateContext } from "../../context/StateContext";

const Test = () => {
  let hit = 1
  console.log(useStateContext())
  return hit
}

const Bumper = (props) => {
    console.log(Test())
    const [ref, api] = useBox(() => ({
        mass: 100,
        position: [0, 1, 20],
        args: [20, 1, 1],
        ...props,
        onCollide: (e) => {
          if(e.collisionFilters.bodyFilterGroup === 2) {
            console.log('collided')
            
          }
        }
      }));
      // api.collisionResponse.set(true)
      // api.collisionResponse.subscribe((e) => {
      //   console.log(e)
      // })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[20, 1, 1]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Bumper;
