"use client";

import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { ImTelegram, ImWhatsapp } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/alikz.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="px-10 dark:bg-gray-900">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between">
                        <h1 className="flex font-burtons md:text-2xl sm:text-sm dark:text-white">
                            Hope
                        </h1>
                        <ul className="flex items-center md:text-2xl sm:text-4sm">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl dark:text-white"
                                />
                            </li>
                            <li>
                                <a
                                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="#service"
                                >
                                    about me
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10 py-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            Ali kz
                        </h2>
                        <h3 className="text-2xl py-2  md:text-3xl dark:text-white">
                            Developer and more...
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800  max-w-xl mx-auto md:text-xl dark:text-white">
                            Freelancer providing services for programming and
                            design content needs. Join me down below and let's
                            get cracking!
                        </p>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                            <AiFillTwitterCircle />
                            <AiFillLinkedin />
                            <a href="https://t.me/Ali_kz_77" target="_blank">
                                <ImTelegram />
                            </a>
                        </div>
                        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full  h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                            <Image
                                src={deved}
                                layout="fill"
                                objectFit="cover"
                                alt="this-is-ali-kz-image"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="service">
                        <h3 className="text-3xl py-1 dark:text-white">
                            Services I offer
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                            Since the beginning of my journey as a freelance
                            designer and developer, I've done remote work for
                            <span className="text-teal-500 dark:text-white">
                                {" "}
                                agencies{" "}
                            </span>
                            consulted for{" "}
                            <span className="text-teal-500 dark:text-white">
                                startups{" "}
                            </span>
                            and collaborated with talanted people to create
                            digital products for both business and consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                            I offer from a wide range of services, including
                            brand design, programming and teaching.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg shadow-cyan-500/50 p-10 rounded-xl my-10 flex-1">
                            <Image
                                src={design}
                                width={100}
                                height={100}
                                alt="this-is-image--"
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
                                Beautiful Designs
                            </h3>
                            <p className="py-2dark:text-white dark:text-white">
                                Creating elegant designs suited for your needs
                                following core design theory.
                            </p>
                            <h4 className="py-4 text-teal-600 dark:text-white">
                                Design Tools I Use
                            </h4>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Photoshop
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Illustrator
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Figma
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Indesign
                            </p>
                        </div>
                        <div className="text-center shadow-lg shadow-cyan-500/50 p-10 rounded-xl my-10 flex-1">
                            <Image
                                src={code}
                                width={100}
                                height={100}
                                alt="this-is-image--"
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-yellow-100">
                                Code your dream project
                            </h3>
                            <p className="py-2 dark:text-white">
                                Do you have an idea for your next great website?
                                Let's make it a reality.
                            </p>
                            <h4 className="py-4 text-teal-600 dark:text-white">
                                Design Tools I Use
                            </h4>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Photoshop
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Illustrator
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Figma
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Indesign
                            </p>
                        </div>
                        <div className="text-center shadow-lg shadow-cyan-500/50 p-10 rounded-xl my-10 flex-1">
                            <Image
                                src={consulting}
                                width={100}
                                height={100}
                                alt="this-is-image--"
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                                Consulting
                            </h3>
                            <p className="py-2 dark:text-white">
                                Are you interested in feedback for your current
                                project? I can give you tips and tricks to level
                                it up.
                            </p>
                            <h4 className="py-4 text-teal-600 dark:text-white">
                                Design Tools I Use
                            </h4>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Photoshop
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Illustrator
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Figma
                            </p>
                            <p className="text-gray-800 py-1 dark:text-yellow-100">
                                Indesign
                            </p>
                        </div>
                    </div>
                </section>
                <footer className="py-10 border-t-2 flex align-center font-burtons text-3xl justify-center dark:text-white">
                    made with lov3{" "}
                    <code className="text-red-600">&nbsp; ;)</code>
                </footer>
            </main>
        </div>
    );
}
