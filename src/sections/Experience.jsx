import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const Experience = () => {
    const [animationName, setAnimationName] = React.useState("idle");

    return (
        <section className={"c-space my-20"} id = {"experience"}>
            <div className={"w-full text-white-600"}>
                <h3 className={"head-text"}>
                    Experience
                </h3>
                <div className={"work-container"}>
                    <div className={"work-canvas"}>
                        <Canvas>
                            <ambientLight intensity={Math.PI}/>
                            <spotLight position={[10,10,10]} angle={0.15} penubra={1}></spotLight>
                            <directionalLight position={[10,10,10]} intensity={1}></directionalLight>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                            <Suspense fallback={<CanvasLoader/>} >
                                <Developer position-y={-3} scale={.03} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className={"work-content"}>
                        <div className={"sm:py-10 py-5 sm:px-5 px-2.5"}>
                            {workExperiences.map(({id, name, pos, icon, duration, title, animation}, index) => (
                                <div key={id} className={"work-content_container group"}
                                     onClick={() => setAnimationName(animation)}
                                     onPointerOver={() => setAnimationName(animation)}
                                     onPointerOut={() => setAnimationName("idle")}>
                                    <div className={"flex flex-col h-full justify-start items-center py-2 "}>
                                        <div className={"work-content_logo "}>
                                            <img src={icon} alt={"logo"} className={"w-full h-full"}></img>
                                        </div>
                                        <div className={"work-content_bar"}/>
                                    </div>

                                    <div className={"sm:p-5 px-2.5 py-5"}>
                                        <p className={"font-bold text-white-800"}>{name}</p>
                                        <p className={"text-sm mb-5"}>{pos} -- {duration}</p>
                                        <p className={"group-hover:text-white transition ease-in-out duration-500"}>{title}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Experience
