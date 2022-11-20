import React from "react";
import { AiFillGithub,AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

function Socials() {
  const socials = [
    {
      id: 1,
      href: "https://github.com/AdityaSingh-02",
      icon:(
        <>
            <AiFillGithub size={20} />
        </>
      )
    },
    {
      id: 2,
      href: "https://twitter.com/Go_D_Aditya",
      icon:(
        <>
            <AiOutlineTwitter size={20} />
        </>
      )
    },
    {
      id: 3,
      href: "https://www.linkedin.com/in/aditya-singh-76065422b/",
      icon:(
        <>
            <AiFillLinkedin size={20} />
        </>
      )
    },
  ];

  return (
    <>
      <div className="hidden sm:flex flex-col fixed h-[100vh] z-50  space-y-4 left-6 top-[45%] bottom-[55%] ">
        {socials.map(({ id, href, icon }) => (
          <div key={id} className="Socials hover:animate-bounce">
            <a href={href} className="flex" target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </div>
        ))}
        <span className="SocialsConnect">Let's Connect</span>
      </div>
    </>
  );
}

export default Socials;
