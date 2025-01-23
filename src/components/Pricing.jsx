import React from "react";
import { Basic, Standard, Premium } from "../Data/priceData";
import { FaCircleCheck } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  useGSAP(() => {
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

  return (
    <>
      {/* <div className="texts h-screen text-white bg-gray-900 mx-5 rounded-2xl p-16 mt-32">
        <h1 className="text-7xl">TITLE</h1>
        <p className="text-wrap flex flex-wrap gap-2 ">
          {para.map((word, i) => {
            return (
              <span className="para text-4xl mt-10 " key={i}>
                {word}
              </span>
            );
          })}
        </p>
      </div> */}

      <div className="priceCard flex  justify-center gap-10 h-[100vh] my-36 ">
        <div className=" border border-gray-500 w-[30vw] h-screen rounded-2xl p-4 shadow-xl  shadow-gray-600">
          <h2 className=" text-orange-600 text-4xl text-center">Basic</h2>
          <div className="list of services ml-16 flex flex-col gap-2">
            <span className="text-orange-500 text-3xl mx-28 my-14 ">
              ₹7,000
            </span>
            {Basic.map((list, i) => {
              return (
                <>
                  <div className="flex">
                    <FaCircleCheck className="text-white mt-3" />
                    <span
                      key={i}
                      className="text-white block mx-4 my-1 text-2xl "
                    >
                      {list}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="priceCard border border-gray-500 w-[30vw] h-screen rounded-2xl z-50 p-4 shadow-xl shadow-gray-600">
          <h2 className=" text-orange-600 text-4xl text-center">Standard</h2>
          {/* <span className="text-orange-600">₹15,000</span> */}
          <div className="list of services ml-16 flex flex-col gap-0">
            <span className="text-orange-500 text-3xl mx-28 my-14 ">
              ₹15,000
            </span>
            {Standard.map((list, i) => {
              return (
                <>
                  <div className="flex">
                    <FaCircleCheck className="text-white mt-4" />
                    <span
                      key={i}
                      className="text-white block mx-4 my-2 text-2xl "
                    >
                      {list}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="priceCard border border-gray-500 w-[30vw] h-screen rounded-2xl p-4 shadow-xl shadow-gray-600">
          <h2 className=" text-orange-600 text-4xl text-center">Premium</h2>
          {/* <span className="text-orange-600">₹21,000</span> */}

          <div className="list of services ml-16 flex flex-col gap-0">
            <span className="text-orange-500 text-3xl mx-28 my-14 ">
              ₹21,000
            </span>
            {Premium.map((list, i) => {
              return (
                <>
                  <div className="flex">
                    <FaCircleCheck className="text-white mt-4" />
                    <span
                      key={i}
                      className="text-white block mx-4 my-2 text-2xl "
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
