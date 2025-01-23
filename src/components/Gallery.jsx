import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BsArrowDown } from "react-icons/bs";
gsap.registerPlugin(ScrollTrigger);



function Gallery() {
  const imgStyle = "w-full rounded-[18%] p-8";


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
          y: 1700,
          // opacity: 0.5,
          duration: 2,
          scrollTrigger: {
            trigger: ".arrow",
            // markers:true,
            start: "top 20%",
            end: "bottom -280%",
            scrub: 3,
          },
        });
    
        // gsap.to("element", {
        //   duration: 2,
        //   physics2D: { velocity: 300, angle: -60, gravity: 400 },
        // });
      });

  return (
    <>
      <div className="relative overflow-hidden mt-16 lg:flex items-center gap-[30%] hidden ">
        <div className="w-[60%] rightImgs">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.EWpuCKIOy01chpyGuAeoMwHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.hzazTk12gyBeui1_rOfFyQHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.tzZah8wAwnVVODO5A19VjwHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Ep7bc1ERO5QT_SPCTs7zvgHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.o58xsdbOl4KFaHlKOwDQfgHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.nUzEw4Jpzs2B4JeZovIpuwHaDK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
        </div>

        <BsArrowDown className="arrow text-9xl text-white absolute left-[48%] top-0 mt-12 block" />

        <div className="w-[60%] leftImgs">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.fzo83_9SHqVL2JEofRK4mQHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.W8QLDBLaGSl0QCIANdi2JAHaEo&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.p-vR0Es5sgoS5FF089NYqQHaEP&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.C93leS6xCW1JceldoN86EwHaE8&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.mm3rH2ub5SfjX0BaMQ_0LgHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.VlVt8YzYcJOEcoqaJ7jtUwHaEo&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
        </div>
      </div>
    </>
  )
}

export default Gallery
