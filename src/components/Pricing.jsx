import React from "react";
import { Basic, Standard, Premium } from "../Data/priceData";
import { FaCircleCheck } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      gsap.from(".priceCard", {
        x: -15,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".priceCard",
          // markers:true,
          start: "top 40%",
          end: "bottom 98%",
          scrub: 2,
        },
      });
    });

    mm.add("(max-width:500px)", () => {
      gsap.from(".priceCard", {
        x: -15,
        opacity: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".priceCard",
          markers: true,
          start: "top 130%",
          end: "bottom 110%",
          scrub: 2,
        },
      });
    });
  });

  return (
    <>
      
      <div className="priceCard flex justify-center lg:flex-row flex-col gap-10 lg:h-[100vh] lg:my-36 my-16">
        <div className=" border border-gray-500 lg:w-[28vw] w-[90%] lg:h-screen h-[80vh] rounded-2xl p-4 ml-5 lg:ml-3 shadow-xl  shadow-gray-600">
          <h2 className=" text-orange-600 text-4xl  text-center">Basic</h2>
          <div className="list of services lg:ml-16 ml-5 flex flex-col gap-2">
            <span className="text-orange-500 lg:text-3xl text-2xl lg:mx-28 mx-24 lg:my-14 my-10 ">
              ₹7,000
            </span>
            {Basic.map((list, i) => {
              return (
                <>
                  <div className="flex">
                    <FaCircleCheck className="text-white mt-3" />
                    <span
                      key={i}
                      className="text-white block mx-4 my-1 lg:text-2xl text-xl "
                    >
                      {list}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="priceCard border border-gray-500 lg:w-[30vw] w-[90%] lg:h-screen rounded-2xl ml-5 z-50 p-4 shadow-xl shadow-gray-600">
          <h2 className=" text-orange-600 text-4xl text-center">Standard</h2>
          
          <div className="list of services lg:ml-16 ml-5 flex flex-col gap-0">
            <span className="text-orange-500 text-3xl lg:mx-28 mx-20 lg:my-14 my-10 ">
              ₹15,000
            </span>
            {Standard.map((list, i) => {
              return (
                <>
                  <div className="flex">
                    <FaCircleCheck className="text-white mt-4" />
                    <span
                      key={i}
                      className="text-white block mx-4 my-2 lg:text-2xl text-xl "
                    >
                      {list}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="priceCard border border-gray-500 lg:w-[30vw] w-[90%] lg:h-screen rounded-2xl ml-5 p-4 shadow-xl shadow-gray-600">
          <h2 className=" text-orange-600 text-4xl text-center">Premium</h2>
          

          <div className="list of services lg:ml-16 ml-5 flex flex-col gap-0">
            <span className="text-orange-500 text-3xl lg:mx-28 mx-20 lg:my-14 my-10 ">
              ₹21,000
            </span>
            {Premium.map((list, i) => {
              return (
                <>
                  <div className="flex">
                    <FaCircleCheck className="text-white mt-4" />
                    <span
                      key={i}
                      className="text-white block mx-4 my-2 lg:text-2xl text-xl"
                    >
                      {list}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
