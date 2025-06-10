import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import ArcadeMachine from "../components/ArcadeMachine.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
//import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import RobloxR6 from "../components/RobloxR6.jsx";
import UnityLogo from "../components/UnityLogo.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import HackerRoom from "../components/HackerRoom.jsx";

const Hero = () => {
    // const controls = useControls('ArcadeMachine',{
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     scale: {
    //         value: 0.1,
    //         min: 0.05,
    //         max: 0.1,
    //     }
    // })
    const isSmall = useMediaQuery({maxWidth: 480});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768,  maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isTablet, isMobile);
    return (
        <section className={"min-h-screen w-full flex flex-col relative"} id="home">
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"}>
                <p className={"sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"}>Hello!! I'm Ozz<span className={"waving-hand"}>👋</span> </p>
                <p className={"hero_tag text-gray_gradient"}>Creating the best games</p>
            </div>

            <div className={"w-full h-full absolute inset-0"}>
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={CanvasLoader}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera isMobile={isMobile} >

                            <HackerRoom scale = {sizes.deskScale} position={sizes.deskPosition} rotation={[0, -Math.PI, 0]}/>
                        </HeroCamera>
                        {/*<group>*/}
                        {/*    <RobloxR6 scale = {3} position={sizes.robloxR6Position} rotation={[0, 0, 0]}/>*/}
                        {/*    <UnityLogo scale ={1} position = {sizes.unityLogoPosition}></UnityLogo>*/}
                        {/*</group>*/}
                        //Add lights
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[0, 0, 10]} intensity={1}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <a href={"#about"} className={"w-fit"}>
                    <Button name={"Let's work together"} isBeam containerClass={"sm:w-fit w-full sm:min-w-96"}/>
                </a>
            </div>
        </section>
    )
}
export default Hero
