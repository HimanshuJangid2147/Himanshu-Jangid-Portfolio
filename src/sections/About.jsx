import React, { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' jangidhimanshu2000@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/*First Section*/}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                Hi, I&apos;m Himanshu Jangid
                            </p>
                            <p className="grid-subtext">
                                Ambitious learner with a foundation in web development,
                                ready to make an impact.I have honed my skills in Frontend Development,
                                with a focus on developing and fast and responsive websites.
                            </p>
                        </div>
                    </div>
                </div>

                {/*Second Section*/}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-2.webp" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I have experience with the following technologies:</p>

                            <div className="flex flex-auto">
                                <ul className="list-disc list-inside pl-6">
                                    <li className="grid-subtext">Html</li>
                                    <li className="grid-subtext">Css</li>
                                    <li className="grid-subtext">Tailwind Css</li>
                                    <li className="grid-subtext">Java Script</li>

                                </ul>
                                <ul className="list-disc list-inside pl-6">
                                    <li className="grid-subtext">ReactJs</li>
                                    <li className="grid-subtext">ThreeJs</li>
                                    <li className="grid-subtext">NodeJS</li>
                                    <li className="grid-subtext">NodeJs</li>
                                </ul>
                                <ul className="list-disc list-inside pl-6">
                                    <li className="grid-subtext">Java</li>
                                    <li className="grid-subtext">C++</li>
                                    <li className="grid-subtext">MongoDB</li>
                                    <li className="grid-subtext">C#</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Third Section*/}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div className="flex flex-col">
                                <p className="grid-headtext">
                                    I&apos;m very flexible with time zone communications & locations
                                </p>
                                <p className="grid-subtext">
                                    I&apos;m Based In India, with a flexible schedule to accommodate your needs.
                                </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-20">
                                <a href="#contact" className="w-fit"></a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/*Fourth Section*/}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I am passionate about solving problems and building creative solutions through code.
                                With every project, I strive to enhance my skills and push the boundaries of what I can achieve as a front-end developer.
                                I love solving complex challenges and bringing intuitive, engaging user experiences to life.
                                Building websites and applications allows me to channel both my creativity and problem-solving skills.
                                Each new project is a learning opportunity, pushing me to refine my abilities in technologies like HTML, CSS, JavaScript, and React.
                                I’m eager to continue growing as a developer, learning new techniques, and building innovative solutions that make an impact.
                            </p>
                        </div>
                    </div>
                </div>

                {/*Fifth Section*/}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full h-fit object-cover sm:object-top md:object-cover md:h-[226px] sm:h-[276px]"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jangidhimanshu2000@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
);
};

export default About;
