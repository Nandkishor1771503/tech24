import React, { useRef, useState } from "react";
import gsap from "gsap";
import Img1 from "../images/Img1.png";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";
import Img4 from "../images/Img4.png";
import Img5 from "../images/Img5.png";

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Carousel() {
  const imgStyle =
    "myImg lg:h-[80vh] lg:w-[50vw] lg:mx-[13%] mx-[5%] my-[5%] rounded-xl sticky";

  const containerRef = useRef(null);
  const [scroll, useScroll] = useState(0);

  const handleScroll = () => {
    let val = containerRef.current.scrollX;
    useScroll(val);
    console.log(scroll);
  };

  useGSAP(() => {
    const set = gsap.utils.toArray(".container > .myImg");
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      // Pinning the container  ( Parent animation  )
      ScrollTrigger.create({
        trigger: ".pin",
        pin: true, // Pin the entire ".pin" section
        start: "top -3%", // Pin starts when ".pin" reaches the top of the viewport
        end: "bottom -50%", // Adjust the scroll duration
        scrub: 2,
        // markers: true, // For debugging purposes
      });

      // Animating individual images        ( Children Animation )
      gsap.to(set, {
        xPercent: -125 * set.length, // Move all images horizontally
        scrollTrigger: {
          trigger: ".pin",
          start: "top top", // Trigger starts when the container reaches the viewport
          end: "bottom -100%", // Ensure this matches the ScrollTrigger duration
          scrub: 2,
          // markers: true,
          // pin:true
        },
      });
    });

    mm.add("(max-width:500px)", () => {
      ScrollTrigger.create({
        trigger: ".pin",
        pin: true, // Pin the entire ".pin" section
        start: "top 37%", // Pin starts when ".pin" reaches the top of the viewport
        end: "bottom -40%", // Adjust the scroll duration
        scrub: 2,
        // markers: true, // For debugging purposes
      });

      // Animating individual images        ( Children Animation )
      gsap.to(set, {
        xPercent: -125 * set.length, // Move all images horizontally
        scrollTrigger: {
          trigger: ".pin",
          start: "top 50%", // Trigger starts when the container reaches the viewport
          end: "bottom -100%", // Ensure this matches the ScrollTrigger duration
          scrub: 2,
          // markers: true,
          // pin:true
        },
      });
    });
  });

  return (
    <>
      <h1 className="text-white ml-8 mt-5 font-thin font-londrina">Our work</h1>
      <div className="pin w-full flex items-center justify-center lg:gap-0 p-0 overflow-x-hidden">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="container top-0 flex items-center lg:mb-20 "
        >
          <img src={Img1} alt="" className={imgStyle} />

          <img src={Img2} alt="" className={imgStyle} />
          <img src={Img3} alt="" className={imgStyle} />
          <img src={Img4} alt="" className={imgStyle} />
          <img src={Img5} alt="" className={imgStyle} />
        </div>
      </div>
    </>
  );
}

export default Carousel;
