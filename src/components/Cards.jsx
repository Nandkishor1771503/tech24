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
    const mm = gsap.matchMedia();
    // mm.add("(min-width:1024px)", () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          scroller: "body",
          // markers: true,
          start: "top 10%",
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
    // });
    // mm.add("(max-width:500px)", () => {

    //   const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".parent",
    //       scroller: "body",
    //       // pin:true,
    //       // markers: true,
    //       start: "top 10%",
    //       end: "bottom 80%",
    //       scrub: 2,
    //     },
    //   });
    //   set2.forEach((e) => {
    //     tl2.to(
    //       e,
    //       {
    //         y: 10,
    //         opacity: 0.95,
    //         // xPercent:2,
    //         // marginTop:-10,
    //         scale: 0.88,
    //         stagger: 0.3,
    //         // ease:"power3"
    //       },
    //       "-=0.3"
    //     );
    //   });

    // });
  });

  return (
    <>
      <div className="parent w-[100vw] flex lg:ml-52 ml-5 flex-col lg:gap-16">
        {Data &&
          Data.map(({ id, title, para, stars, style }) => {
            return (
              <div
                className={`card lg:w-[70%] w-[90%] lg:h-[70vh]  sticky  p-5  ${style} rounded-xl`}
                key={id}
              >
                <h1 className="lg:text-5xl text-4xl ">{title}</h1>
                <div className="lg:mx-16 text-xl lg:mt-24 mt-14 rounded-xl border border-black lg:p-8 p-6 ">
                  <div className="flex text-yellow-400 mb-3">
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
