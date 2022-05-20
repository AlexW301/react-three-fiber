import { useRef } from "react"
import { useHelper } from "@react-three/drei"
import { BoxHelper, SpotLightHelper, PointLightHelper, DirectionalLightHelper } from "three"

const PointLight = () => {
    const light = useRef(null)
    useHelper(light, PointLightHelper, 0.5, "hotpink")
    return (
        <pointLight ref={light} position={[9.02, 11.6, -4.37]} color="lightblue" intensity={2.5} />
    )
}

export default PointLight