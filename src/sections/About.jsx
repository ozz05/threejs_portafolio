import React from 'react'
import GridSubText from "../components/GridSubText.jsx";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("osvaldosilva5@outlook.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <section className={"c-space my-20 id=about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>

                <div className = {"col-span-1 xl:row-span-3 "}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid1.png"} alt={"grid-1"} className={"w-full sm:h-[276px] h-fit object-contain"}/>

                        <div>
                            <p className={"grid-headtext"}> Hi, I'm Ozz</p>
                            <GridSubText content={"With +5 years of expertise in Unity," +
                                " Roblox, and Unreal Engine development. " +
                                "Proven track record of leading engineering teams " +
                                "and delivering successful game projects across " +
                                "mobile, PC, and console platforms. " +
                                "Skilled in implementing gameplay mechanics, " +
                                "UI systems, bug fixing, " +
                                "and architectural design " +
                                "for various game genres."}/>
                        </div>
                    </div>
                </div>

                <div className = {"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid2-logos.png"} alt={"grid-2"} className={"w-full sm:h-[276px] h-fit object-contain"}></img>
                        <div>
                            <p className={"grid-headtext"}> Technical Skills</p>
                            <GridSubText content={"Unity 3D/2D (Advanced) - C#"}/>
                            <GridSubText content={"Roblox (Advanced) - Lua"}/>
                            <GridSubText content={"Unreal Engine 5 (Intermediate) - C++"}/>
                            <GridSubText content={"Flutter - Dart"}/>
                            <GridSubText content={"Git, Perforce (P4)"}/>
                        </div>
                    </div>
                </div>

                <div className = {"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex-col justify-center items-center"}>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0,0,0,0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                            <div>
                                <p className={"grid-headtext"}> I work remotely across most timezones.</p>
                                <GridSubText content={"Based in Mexico, with remote work available"}/>
                                <Button name={ "Contact Me"} isBeam containerClass={"w-full mt-10"}></Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class={"xl:col-span-2  xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid3.png"} alt={"grid3"} className={"w-full sm:h-[266px] h-fit object-contain"}></img>
                        <div>
                            <p className={"grid-headtext"}>My passion for Game Development</p>
                            <GridSubText content={"I love solving problems and more when that forms part of creating games that are fun, engaging, and unique. " +
                                "Game Development is not only my profession - it's my passion"}
                            />
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-1 xl:row-spam-2"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid4.png"} alt={"grid4"} className={"w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"}></img>
                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>Contact me</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src ={ hasCopied? "assets/tick.svg" :  "assets/copy.svg"}></img>
                                <p className={"lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"}>osvaldosilva5@outlook.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
