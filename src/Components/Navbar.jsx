import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";


function Navbar() {
  const Links = [
    {
      id: 1,
      text: "Home",
      to:"Home"
    },
    {
      id: 2,
      text: "About Me",
      to:"AboutMe"
    },
    {
      id: 3,
      text: "Resume",
      to:"Resume"
    },
    {
      id: 4,
      text: "Portfolio",
      to:"#"
    },
    {
      id: 5,
      text: "Contact Me",
      to:"#"
    },
  ];

  const [icon, updtIcon] = useState(false);
  const [navCol , updtNavCol] = useState(true);

  const BackSmooth =(()=>{
    updtIcon(!icon)
  });

  const changeCol = (()=>{
    window.scrollY >=90 ? updtNavCol(false):updtNavCol(true);
  });

  window.addEventListener("scroll",changeCol)
  let changeColor = navCol?"bg-transparent":"bg-white bg-opacity-50";

  return (
    <>
      <div className={`Navbar w-screen h-[80px] pt-4 fixed z-50 ${changeColor}`}>
        <nav className="px-7 md:px-10 lg:px-48 flex justify-between ">
          <div className="TitleName ">
            <h1 className="font-signature text-xl sm:text-3xl">Aditya</h1>
          </div>

          <div className="Navigations hidden sm:flex text-black  justify-center items-center space-x-7 cursor-pointer font-semibold ">
            {Links.map(({ id, text, to }) => (
              <Link to={to} key={id} smooth={true} duration={500} className="NavLinks">
                {text}
              </Link>
            ))}
          </div>
          {/* ----------------------------------Mobile View ------------------------------- */}
          <div
            className="Navigations sm:hidden"
            onClick={() => {
              updtIcon(!icon);
            }}
          >
            {icon ? <BiArrowBack size={25} /> : <GiHamburgerMenu size={25} />}
          </div>
          {icon && (
            <div className="navigationMobile flex flex-col justify-center items-center absolute w-[100%] h-[100vh] -z-10 bg-gradient-to-b from-gray-300 to-gray-600 top-0 left-0 text-2xl space-y-3 font-semibold sm:hidden">
              {Links.map(({ id, text, to }) => (
                <Link to={to} key={id} smooth={true} duration={500} onClick={BackSmooth}>
                  {text}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
