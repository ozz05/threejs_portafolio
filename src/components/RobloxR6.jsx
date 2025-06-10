import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const RobloxR6 = (props) => {
    const targetRef = useRef();
    const { nodes, materials } = useGLTF('models/roblox_r6.glb')

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y - 1,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <group {...props} dispose={null} ref={targetRef}>
            <group rotation={[-Math.PI / 2, 0.015, -Math.PI]} scale={0.341}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                            geometry={nodes.Object_7.geometry}
                            material={materials.Noob_Avatar}
                            skeleton={nodes.Object_7.skeleton}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('models/roblox_r6.glb')

export default RobloxR6
