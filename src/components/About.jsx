import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerEffect(ScrollTrigger);
import { IoCodeSlashOutline } from "react-icons/io5";
import { useGSAP } from "@gsap/react";

function About() {
  useGSAP(() => {});
  const Text = "sunnyNK".split("");
  return (
    <>
      <div className="about lg:h-[80vh] w-full text-orange-500  text-start lg:p-7 rounded-xl ml-8 lg:mt-[3%] mt-[10%] lg:mx-2">
        <h1 className="my-8">About us</h1>
        <div className="flex md:flex-row  flex-col-reverse ">
          <p className="lg:text-2xl text-xl items-center justify-center lg:w-[60%] w-[90%] lg:leading-10 leading-[2.5rem] ">
            {" "}
            We’re a team of passionate designers, developers, and strategists
            committed to bringing your ideas to life. From sleek websites to
            immersive apps, we blend creativity with technology to deliver
            tailored solutions for businesses of all sizes." “Our mission? To
            help brands stand out in a digital-first world with designs that
            inspire and technology that performs.
          </p>
          <IoCodeSlashOutline
            style={{ fontSize: "16rem" }}
            className="w-[40%] ml-[15%] lg:ml-[15%] md:ml-0"
          />
        </div>
        {/* <div className="word w-[50%] m-auto flex overflow-hidden text-center">
          {Text.map((letter, index) => {
            return (
              <h1 key={index} className="letter">
                {letter}
              </h1>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default About;
