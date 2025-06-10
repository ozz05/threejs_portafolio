import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, useFBX } from '@react-three/drei';

const Developer = ({ animationName = "idle", ...props }) => {
    const group = useRef();

    const { nodes, materials } = useGLTF('models/animations/viking.glb');

    // Load FBX animation
    const {animations: idleAnimation} = useFBX("models/animations/idle.fbx");
    const {animations: dancingAnimation} = useFBX("models/animations/dancing.fbx");
    const {animations: victoryAnimation} = useFBX("models/animations/victory.fbx");
    const {animations: victory2Animation} = useFBX("models/animations/victory2.fbx");
    const {animations: victory3Animation} = useFBX("models/animations/victory3.fbx");

    idleAnimation[0].name = "idle";
    dancingAnimation[0].name = "dancing";
    victoryAnimation[0].name = "victory";
    victory2Animation[0].name = "victory2";
    victory3Animation[0].name = "victory3";

    // Bind animation to the GLTF model's group
    const { actions } = useAnimations([idleAnimation[0], dancingAnimation[0], victoryAnimation[0], victory2Animation[0],  victory3Animation[0]], group);

    // Play animation when component mounts or animationName changes
    useEffect(() => {
        console.log(animationName);
        if (actions[animationName]) {
            actions[animationName].reset().fadeIn(0.5).play();
        }

        return () => {
            if (actions[animationName]) {
                actions[animationName].fadeOut(0.5);
            }
        };
    }, [animationName, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group>
                <skinnedMesh
                    name="Ch19"
                    geometry={nodes.Ch19.geometry}
                    material={materials.Ch19_Body}
                    skeleton={nodes.Ch19.skeleton}
                />
                <primitive object={nodes.mixamorig1Hips} />
            </group>
        </group>
    );
};

useGLTF.preload('models/animations/viking.glb');

export default Developer;
