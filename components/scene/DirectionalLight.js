import { useRef } from "react"
import { useHelper } from "@react-three/drei"
import { BoxHelper, SpotLightHelper, PointLightHelper, DirectionalLightHelper } from "three"

const DirectionalLight = () => {
    const light = useRef(null)
    useHelper(light, DirectionalLightHelper, 0.5, "hotpink")
    return (
        <directionalLight castShadow={true} ref={light} position={[19.02, 11.6, 34.37]} color="#0074FE" intensity={.1} />
    )
}

export default DirectionalLight