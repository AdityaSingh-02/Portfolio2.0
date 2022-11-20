import React from "react";

function AboutMe() {
  return (
    <>
      <div name="AboutMe" className="px-4 sm:flex flex-col justify-center items-center sm:px-40 h-[100vh] bg-gradient-to-b from-[#eef0f1] to-white ">
        <h1 className="AboutMeHEading text-3xl font-Frank py-8 flex justify-center items-center">ABOUT ME</h1>
        <section className="text-lg mx-auto py-5">
          <p className="pb-3">I am Aditya Singh, A Web developer from India. Currently I am Pursuing My Under-Graduation in Computer Science And Engineering. </p>
          <p className="pb-3">I Like to Explore new Technologies, Learn and Gain experience from Surrounding, I am Just a begginer in The Field of Web developement But I Always Push Myself,</p>
          <p className="pb-3">To learn new Things And not give Up on Dreams.. I just Try to be the best in Things what I do</p>
          <p className="pb-0">I Have Experience With HTML, Css, JS, ReactJs, NodeJs, ExpressJs, MongoDb, MySql, NextJs, Java, Go</p>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
