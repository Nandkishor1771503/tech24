import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(Draggable);

// const LeaveRef = useRef(null)

function SVG() {
  const initialPath = "M 10 80 Q 500 80 1000 80";
  const moveRef = useRef(null);
  const svgpath = useRef(null);

  const Move = (e) => {
    // let cal = e.clientY - 550
    let path = `M 10 80 Q ${e.clientX} ${e.clientY} 1000 80`;

    console.log(e);
    // console.log(path)
    console.log(e.clientY);
    gsap.to("svg path", {
      attr: { d: path },
      duration: 1,
      ease: "power4.out",
    });
  };

  const Leave = (e) => {
    gsap.to("svg path", {
      attr: { d: initialPath },
      duration: 1,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const myRef = moveRef.current;
    if (myRef) {
      myRef.addEventListener("mouseenter", Move);
    } else {
      myRef.addEventListener("mouseleave", Leave);
    }
  });

  useGSAP(() => {
    Draggable.create(".drag", {
      type: "x,y",
      bounds: ".box2",
      ease: "bounce",
      throwProps: true,
      snap: (value) => Math.round(value / 45) * 45,
    });
  });

  return (
    <>
      <div
        className=" hidden h-[50vh] lg:flex items-center lg:mx-56 lg:m-5 justify-center content-center"
        onMouseMove={Move}
        onMouseLeave={Leave}
        ref={moveRef}
      >
        <svg width="1500" height="300" className="svg mx-auto">
          <path
            ref={svgpath}
            d="M 10 80 Q 500 80 2000 80"
            stroke="white"
            fill="transparent"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
}

export default SVG;
