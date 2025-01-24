import React from "react";
import Data from "../Data/cardsDara";
import { BsArrowDown } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { Physics2DPlugin } from "gsap/all";

// gsap.registerPlugin(Physics2DPlugin);

gsap.registerPlugin(ScrollTrigger);
function Cards() {
  const imgStyle = "w-full rounded-[18%] p-8";
  const para =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, rem Recusandae voluptatibus dignissimos impedit natus molestias consequatur placeat, unde nulla rerum vero ullam eos commodi. Similique reiciendis quaerat voluptate aspernatur delectus, molestiae sit laudantium quas neque autem quia culpa, fugiat blanditiis ducimus optio cumque! Aspernatur similique id a Quod delectus ".split(
      " "
    );

  useGSAP(() => {
    const set2 = gsap.utils.toArray(".card");
    console.log(set2);
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        scroller: "body",
        // markers: true,
        start: "top -15%",
        end: "bottom 80%",
        scrub: 2,
      },
    });
    set2.forEach((e) => {
      tl2.to(
        e,
        {
          y: 10,
          opacity: 0.95,
          // xPercent:2,
          // marginTop:-10,
          scale: 0.88,
          stagger: 0.3,
          // ease:"power3"
        },
        "-=0.3"
      );
    });

    gsap.fromTo(
      ".texts",
      {
        y: -15,
        opacity: 0.5,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".texts",
          // markers: true,
          start: "top center",
          end: "bottom 0%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".para",
      {
        x: -40,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".para",
          scroller: "body",
          // markers: true,
          start: "top 70%",
          end: "bottom 15%",
          scrub: 2,
        },
        stagger: 0.2,
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
      }
    );
  });

  useGSAP(() => {
    gsap.to(".rightImgs img ", {
      x: -400,
      opacity: 0.8,
      rotate: -55,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".rightImgs",
        // markers:true,
        start: "top 20%",
        end: "bottom 30%",
        scrub: 3,
      },
    });
    gsap.to(".leftImgs img ", {
      x: 400,
      opacity: 0.8,
      rotate: 55,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".leftImgs",
        // markers:true,
        start: "top 20%",
        end: "bottom 30%",
        scrub: 3,
      },
    });
    gsap.to(".arrow", {
      y: 1800,
      opacity: 0.07,
      duration: 2,
      scrollTrigger: {
        trigger: ".arrow",
        // markers:true,
        start: "top 20%",
        end: "bottom -280%",
        scrub: 3,
      },
    });

  });

  return (
    <>
      <div className="parent w-[100vw] flex lg:ml-52 ml-10  flex-col lg:gap-16">
        {Data &&
          Data.map(({ id, title, para, stars, style }) => {
            return (
              <div
                className={`card w-[70%] h-[70vh] sticky  p-5  ${style} rounded-xl`}
                key={id}
              >
                <h1 className="text-4xl">{title}</h1>
                <div className="lg:mx-16 text-xl lg:mt-24 mt-14 rounded-xl border border-black lg:p-8 p-6 ">
                  <div className="flex text-yellow-400">
                    <span>
                      {stars >= 1 ? <IoStarSharp /> : <RiStarSLine />}
                    </span>
                    <span>
                      {stars >= 2 ? <IoStarSharp /> : <RiStarSLine />}
                    </span>
                    <span>
                      {stars >= 3 ? <IoStarSharp /> : <RiStarSLine />}
                    </span>
                    <span>
                      {stars >= 4 ? <IoStarSharp /> : <RiStarSLine />}
                    </span>
                    <span>
                      {stars >= 5 ? <IoStarSharp /> : <RiStarSLine />}
                    </span>
                  </div>
                  <p>{para}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
