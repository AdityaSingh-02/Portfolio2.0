import React from 'react';
import { Parallax } from 'react-parallax';
import PortfolioBack from '../Images/PortfolioBack.jpg';
import PortfolioBack2 from '../Images/AboutPage7.jpg';
import dailyNotes from "../Images/DailyNotes.png";
import EMS from "../Images/Ems.png";
import FaceBook from "../Images/FaceBook.png";
import Microsoft from "../Images/Microsoft.png";
import MovieTicket from "../Images/MovieTicketing.png";
import ResumeBuilder from "../Images/ResumeBuilder.png";


function Portfolio() {

  const Images = [
    {
      id:1,
      src : dailyNotes ,
      alt: "dailynotes"
    },
    {
      id:2,
      src : EMS,
      alt: "Employee"
    },
    {
      id:3,
      src : FaceBook,
      alt: "Facebook"
    },
    {
      id:4,
      src : Microsoft,
      alt: "Microsoft"
    },
    {
      id:5,
      src : MovieTicket,
      alt: "movie"
    },
    {
      id:6,
      src : ResumeBuilder,
      alt: "Resume"
    },
  ]

  return (
    <>
      <Parallax strength={300} bgImage={PortfolioBack} >
        <div name={Portfolio} className="Portfolio sm:h-screen w-screen flex flex-col justify-center items-center">
          <h1 className='text-4xl font-RedHat text-white '>My Past Projects</h1>
          <div className='w-[85%] h-[90%] pt-24 grid grid-rows-2 gap-2 sm:grid-cols-3 sm:gap-7'>
            {Images.map(({id,src,alt})=>(
              <div key={id} className="rounded-lg hover:scale-95 duration-500 ">
                <img src={src} alt={alt} className="rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default Portfolio