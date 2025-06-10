import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {getAssetPath} from "../Utils/assets.js";

const UnityLogo = (props) => {
    const targetRef = useRef();
    const { nodes, materials } = useGLTF(getAssetPath('models/unity_logo_3d.glb'))

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 1,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
        gsap.to(targetRef.current.rotation, {
            y: 45, // 2 * Math.PI radians = 360 degrees
            duration: 60,
            repeat: -1,
            ease: "none"
        });
    });

    return (
        <group {...props} dispose={null} ref={targetRef}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Unity_3DLogo_Material_0.geometry}
                    material={materials.Material}
                    rotation={[-1.3, -4.5, -4.1]}
                    scale={100}
                />
            </group>
        </group>
    )
}

useGLTF.preload(getAssetPath('models/unity_logo_3d.glb'))

export default UnityLogo
