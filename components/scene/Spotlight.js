import { useRef } from "react"
import { useHelper } from "@react-three/drei"
import { BoxHelper, SpotLightHelper, PointLightHelper, DirectionalLightHelper } from "three"

const Spotlight = () => {
    const light = useRef(null)
    useHelper(light, SpotLightHelper, 0.5, "hotpink")
    return (
        <spotLight castShadow ref={light} position={[9.02, 11.6, -4.37]} color="#ffffff" intensity={.2} />
    )
}

export default Spotlight