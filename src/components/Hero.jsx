import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Scroll from "../images/scroll-ani.gif";
import React from "react";

function Hero() {
  //   const cursorMove = (e) => {
  //     gsap.to(".cursor", {
  //       x: e.clientX,
  //       y: e.clientY,
  //       opacity: 0.9,
  //       visibility: "visible",
  //       duration: 0.5,
  //       scale: 2,
  //     });
  //   };

  //   const cursorLeave = () => {
  //     gsap.to(".cursor", {
  //       opacity: 0,
  //       // visibility: "hidden",
  //       duration: 0.5,
  //       scale: 0,
  //     });
  //   };

  const Title = "NKtechSolutions".split("");
  const discription = "Design your digital presence".split(" ");

  useGSAP(() => {
    

    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      gsap.to(".topLine", {
        width: 20,
        opacity: 0,
        x: 1500,
        duration: 2,
      });

      gsap.fromTo(
        ".bottomLine",
        {
          width: 20,
          opacity: 1,
          x: 1700,
        },
        {
          opacity: 0,
          x: 0,
          duration: 2,
        }
      );
    });

    mm.add("(max-width:500px)",()=>{

      gsap.to(".topLine", {
        width: 20,
        opacity: 0,
        x: 500,
        duration: 2,
      });

      gsap.fromTo(
        ".bottomLine",
        {
          width: 20,
          opacity: 1,
          x: 500,
        },
        {
          opacity: 0,
          x: 0,
          duration: 2,
        }
      );
   


    })


    tl.from(".title", {
      x: 3,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });
    tl.from(".disp", {
      scale: 0.9,
      opacity: 0.18,
      duration: 0.7,
      stagger: 0.2,
    });
    tl.from(".scroll", {
      y: 2,
      scale: 0.9,
      opacity: 0,
      duration: 1,
    });
  });



  return (
    <>
      <div className="hero lg:h-screen h-[100vh] w-full  md:ml-[20%] lg:mx-0">
        <div className="topLine w-7 bg-gray-50 rounded-full h-2 mb-[10%]">
          .
        </div>
        <div className=" text-orange-500 flex font-thin lg:ml-[29%] lg:mt-[9%] md:mt-[5%] ml-1 mt-[45%]">
          {Title.map((text, id) => {
            return (
              <h1
                className="title opacity-70 lg:text-8xl md:text-7xl text-5xl"
                key={id}
              >
                {text}
              </h1>
            );
          })}
        </div>

        <div className=" text-gray-400 flex gap-4 font-thin lg:ml-[38%] md:ml-[8%] lg:mt-[3%] mt-[10%] ml-[13%]">
          {discription.map((disp, i) => {
            return (
              <h2 className="disp md:text-3xl text-xl" key={i}>
                {disp}
              </h2>
            );
          })}
        </div>
        <div className="bottomLine w-7 bg-white rounded-full h-2 mt-[8%]">
          .
        </div>
        <div className="scroll lg:mx-[45%] md:ml-[20%] ml-[25%] lg:mt-7 md:mt-[8%] mt-[32%]  w-[60%] ">
          <h2 className=" text-gray-500 text-3xl">Scroll to know</h2>
          <img src={Scroll} alt="scroll animation" className="ml-5" />
        </div>
      </div>
    </>
  );
}

export default Hero;

{
  /* Previous code */
}

{
  /* <div className="cursor opacity-0 m-4 pointer-events-none text-white bg-black w-10 rounded-full text-center z-50 fixed">
        h1
      </div>
      <div id="parent" className="bg-black  w-full relative">
        <div
          className="box w-[30%] bg-blue-400  h-[500px] "
          onMouseMove={cursorMove}
          onMouseLeave={cursorLeave}
        ></div>
      </div> */
}

{
  /* <div className="flex text-white gap-[15%] font-thin mx-[29%] mt-[3%]" >
          <button className="text-gray-600 p-5 rounded-2xl text-2xl">Contact us</button>
          <button className="text-gray-600 p-5 rounded-2xl text-2xl">About us</button>
        </div> */
}
