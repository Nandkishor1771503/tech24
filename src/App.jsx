import { useEffect, useRef, useState } from "react";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import SVG from "./components/SVG";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);

const Text = "sunnyNK".split("");

function App() {
  // const aniRef = useRef(null);
  // const [ham, setHam] = useState(!true);

  // const handleNav = () => {
  //   setHam(!ham);
  //   console.log(ham);

  //   if (!ham) {
  //     const t1 = gsap.timeline();

  //     t1.fromTo(
  //       ".nav",
  //       {
  //         x: -200,
  //         opacity: 0,
  //         scale: -1,
  //         duration: 1,
  //         visibility: "hidden",
  //       },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         scale: 1,
  //         visibility: "visible",
  //       }
  //     ).fromTo(
  //       ".stagger",
  //       {
  //         x: -40,
  //         opacity: 0,
  //         duration: 2,
  //         delay: 0.1,
  //       },
  //       {
  //         x: 0,
  //         opacity: 0.8,
  //         stagger: 0.5,
  //       }
  //     );
  //   } else {
  //     gsap.fromTo(
  //       ".nav",
  //       {
  //         x: 0,
  //         opacity: 1,
  //         scale: -1,
  //         visibility: "hidden",
  //       },
  //       {
  //         x: -200,
  //         opacity: 0,
  //         scale: 1,
  //         visibility: "visible",
  //       }
  //     );
  //   }
  // };

  const cursorMove = (e) => {
    gsap.to(".cursor", {
      x: e.clientX,
      y: e.clientY,
      opacity: 0.9,
      visibility: "visible",
      duration: 0.5,
      scale: 2,
    });
  };

  const cursorLeave = () => {
    gsap.to(".cursor", {
      opacity: 0,
      // visibility: "hidden",
      duration: 0.5,
      scale: 0,
    });
  };

  // useEffect(() => {
  // const t1 = gsap.timeline();

  // gsap.to(aniRef.current, {
  //   opacity: 1,
  //   x: 700,
  //   color: "brown",
  //   backgroundColor: "white",
  //   borderRadius: "50%",
  //   rotate: 360,
  //   scale: 1,
  //   duration: 1.5,
  //   yoyo: true,
  // });

  //   gsap.fromTo(
  //     ".img",
  //     {
  //       opacity: 0,
  //       borderRadius: "10%",
  //       scale: 0,
  //     },
  //     {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 2,
  //       borderRadius: "70%",
  //     }
  //   );
  // }, []);

  useEffect(() => {
    gsap.to("#parent .box", {
      borderRadius: "100%",
      x: 400,
      rotation: 360,
      duration: 3,
      backgroundColor: "blue",
      scrollTrigger: {
        trigger: "#parent",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "bottom 50%",
        scrub: 1,
        // pin: true,
        // pinSpacing: false,
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".letter",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
      },
      {
        scrollTrigger: {
          trigger: ".letter",
          scroller: "body",
          // markers: true,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 2,
        },
        stagger: 0.2,
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  useGSAP(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".cards",
    //     scroller: "body",
    //     // markers: true,
    //     start: "top 110%",
    //     end: "bottom 130%",
    //     scrub: 2,
    //   },
    // });
    // const set = gsap.utils.toArray(".cards > div"); // used for many divs to animate in a same way

    // set.forEach((e) => {
    //   tl.fromTo(
    //     e,
    //     {
    //       y: 70,
    //       scale: 0.75,
    //       duration: 0.2,
    //     },
    //     {
    //       y: 0,
    //       scale: 1,
    //     }
    //   );
    // });

    

    // tl.fromTo(
    //   ".scale1 ",
    //   {
    //     y: 70,
    //     scale: 0.75,
    //     duration: 0.2,
    //   },
    //   {
    //     y: 0,
    //     scale: 1,
    //   }
    // ).fromTo(
    //   ".scale2",
    //   {
    //     y: 70,
    //     scale: 0.75,
    //     duration: 0.2,
    //   },
    //   {
    //     y: 0,
    //     scale: 1,
    //   }
    // );
  });

  return (
    <>
      {/* <div className="cursor opacity-0 m-4 pointer-events-none text-white bg-black w-10 rounded-full text-center z-50 fixed">
        h1
        </div> */}

      {/* <div onClick={handleNav} className=" top-0 mt-4">
        {!ham ? (
          <GiHamburgerMenu className="text-3xl  z-50 cursor-pointer" />
          ) : (
            <RxCross1 className="text-3xl font-thin z-50 cursor-pointer" />
            )}
            </div> */}

      {/* <div ref={aniRef} className="w-40 bg-black p-5 mt-4 text-blue-600">
        <h1>GSAP</h1>
      </div> */}

      {/* <div className="nav opacity-0 z-30 bg-gray-500 w-[20vw]  h-screen  absolute p-4 rounded-xl top-24 ">
        <h2 className="text-3xl m-2 opacity-0 bg-black rounded-lg mt-2 p-2  stagger">
        Nandkishor
        </h2>
        <h2 className="text-3xl m-2 opacity-0  bg-black rounded-lg mt-2 p-2  stagger">
        Learning
        </h2>
        <h2 className="text-3xl m-2 opacity-0 bg-black rounded-lg mt-2 p-2  stagger">
        GSAP
        </h2>
        <h2 className="text-3xl m-2 opacity-0 bg-black rounded-lg mt-2 p-2  stagger">
        Nandkishor
        </h2>
        <h2 className="text-3xl m-2 opacity-0  bg-black rounded-lg mt-2 p-2  stagger">
        Learning
        </h2>
        <h2 className="text-3xl m-2 opacity-0 bg-black rounded-lg mt-2 p-2  stagger">
          GSAP
          </h2>
          <h2 className="text-3xl m-2 opacity-0 bg-black rounded-lg mt-2 p-2  stagger">
          Nandkishor
          </h2>
          <h2 className="text-3xl m-2 opacity-0  bg-black rounded-lg mt-2 p-2  stagger">
          Learning
          </h2>
          <h2 className="text-3xl m-2 opacity-0 bg-black rounded-lg mt-2 p-2  stagger">
          GSAP
          </h2>
          </div> */}

      {/* <div className="mb-28">
        <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt=""
        className="ml-72 rounded-2xl w-[60%] mt-5 opacity-0 img"
        />
        </div> */}

      {/* <div id="parent" className="bg-black  w-full relative">
        <div
        className="box w-[30%] bg-blue-400  h-[500px] "
        onMouseMove={cursorMove}
        onMouseLeave={cursorLeave}
        ></div> 
        </div>
        */}

      {/* <div className=" w-full h-screen bg-blue-400 text-center flex items-center justify-center">
        <div className="word w-[50%] m-auto flex overflow-hidden text-center">
        {Text.map((letter, index) => {
          return (
            <h1 key={index} className="letter">
            {letter}
            </h1>
            );
            })}
            </div>
            </div> */}

      {/* <div className="scale1 w-full h-screen bg-amber-500 mt-10 p-2 rounded-lg">
          <h1>HELLO</h1>
          </div>
          <div className="scale2 w-full h-screen bg-amber-500 mt-10 p-2 rounded-lg">
          <h1>HELLO</h1>
          </div> */}

      {/* <div className="cards">
        <div className="scale w-full h-screen bg-amber-500 mt-10 p-2 rounded-lg">
        <h1>HELLO</h1>
        </div>
        <div className="scale w-full h-screen bg-amber-500 mt-10 p-2 rounded-lg">
        <h1>HELLO</h1>
        </div>
        <div className="scale w-full h-screen bg-amber-500 mt-10 p-2 rounded-lg">
        <h1>HELLO</h1>
        </div>
        <div className="scale w-full h-screen bg-amber-500 mt-10 p-2 rounded-lg">
        <h1>HELLO</h1>
        </div>
        </div> */}

      <Hero />
      <About />
      <Services />
      <Carousel />
      <Cards />
      <Pricing />
      <Gallery />
      <SVG />
      <Footer />
    </>
  );
}
export default App;
