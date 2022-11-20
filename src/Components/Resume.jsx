import React from "react";
import { Parallax } from "react-parallax";
import AboutImage from "../Images/About.jpg";

function Resume() {
    return (
        <>
            <Parallax strength={400} bgImage={AboutImage} className="flex justify-center items-center">
                <div name="Resume" className="h-[100vh] w-screen pt-20 flex justify-center">
                    <div className="flex flex-col sm:flex-row w-[90%] rounded-xl bg-gradient-to-b from-gray-300 to-gray-50 h-[94%] ">
                        {/* --------------------------------------------------Hedings------------------------------------------------------------------- */}
                        {/* ------------------------------------------------------------------------------------------------------------------------------- */}
                        <section className="pl-16 sm:w-[50%] flex flex-col sm:pb-14 justify-center">
                            <h1 className="font-semibold text-3xl pt-5 sm:pt-0 sm:text-6xl font-signature pb-2 sm:pb-6">Aditya Singh</h1>
                            <p className="font-semibold text-sm sm:text-xl text-red-500 font-RedHat">B.Tech Computer Science & Engineering</p>
                            <ul className="font-Frank text-sm sm:text-md py-2 list-disc pl-4">
                                <li>From : Gurugram, India</li>
                                <li>Lives in : Dehradun, India</li>
                            </ul>
                        </section>
                        {/* ----------------------------------------Educational Section----------------------------- */}
                        {/* -------------------------------------------------------------------------------------------- */}
                        <section className="pt-5 sm:pt-14">
                            <h1 className="text-3xl sm:text-6xl pb-2 sm:pb-6 font-Frank text-gray-800">Education</h1>
                            <div>
                                <ul className="pl-5">
                                    <li className="list-disc py-1 sm:py-3">
                                        <div>
                                            <h2 className="TimeLine font-teko text-xl sm:text-2xl text-red-500 w-[35%]">2021 - Present</h2>
                                            <p className="text-lg sm:text-2xl font-Frank">Bachelor of Techonology in Computer Science And Engineering</p>
                                            <p className="text-md sm:text-lg font-Frank text-gray-600">Dehradun Institute of Technology University, Dehradun, India</p>
                                        </div>
                                    </li>
                                    <li className="list-disc sm:py-3">
                                        <div>
                                            <h2 className="TimeLine font-teko text-xl sm:text-2xl text-red-500 w-[35%]">2009 - 2021</h2>
                                            <p className=" text-md sm:text-lg font-Frank text-gray-600">Kendriya Vidhyalaya Number.2 Delhi Cantt., India</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* ---------------------------------------Experineces------------------------------------------------------------------ */}
                            {/* ======================================================================================================================= */}
                            <h1 className="text-3xl sm:text-6xl pb-2 sm:pb-6 pt-10 text-gray-800 font-Frank">Experineces</h1>
                            <div>
                                <ul className="pl-5">
                                    <li className="list-disc py-3">
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Q
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </Parallax>
        </>
    );
}

export default Resume;
