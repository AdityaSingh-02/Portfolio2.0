import React from 'react'
import { Parallax } from 'react-parallax';
import AboutImage from '../Images/About.jpg'

function Resume() {
  return (
    <>
        <Parallax strength={400} bgImage={AboutImage} className="flex justify-center items-center">
            <div name="Resume" className='h-[100vh] w-screen pt-20 flex justify-center'>
                <div className='flex flex-row w-[90%] rounded-xl bg-gradient-to-b from-gray-300 to-gray-50 h-[94%] '>
                    {/* ------------------------Hedings------------------------------------- */}
                    <section className='pl-16 w-[50%] flex flex-col pt-8 '>
                        <h1 className='font-semibold text-5xl font-signature py-3'>Aditya Singh</h1>
                        <p className='font-semibold text-xl text-red-500 font-RedHat'>B.Tech Computer Science & Engineering</p>
                        <ul className='font-Frank py-2 list-disc pl-4'>
                            <li>From : Gurugram, India</li>
                            <li>Lives in : Dehradun, India</li>
                        </ul>
                    </section>
{/* ----------------------------------------Educational Section----------------------------- */}
                    <section className='pt-14'>
                        <h1 className='text-6xl pb-6 font-Frank'>Education</h1>
                        <div>
                            <ul className='pl-5'>
                                <li className='list-disc py-3'>
                                    <div>
                                        <h2 className='TimeLine font-teko text-2xl text-red-500 w-[35%]'>2021 - Present</h2>
                                        <p className='text-lg font-Frank'>Dehradun Institute of Technology University, Dehradun, India</p>
                                    </div>
                                </li>
                                <li className='list-disc py-3'>
                                    <div>
                                        <h2 className='TimeLine font-teko text-2xl text-red-500 w-[35%]'>2009 - 2021</h2>
                                        <p className='text-lg font-Frank'>Kendriya Vidhyalaya Number.2 Delhi Cantt., India</p>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </section>
                </div>
            </div>
        </Parallax>
    </>
  )
}

export default Resume