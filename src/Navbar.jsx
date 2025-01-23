import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTireIronCross } from "react-icons/gi";

function Navbar() {
  const [ham, setHam] = useState(true);

  const Tap = () => {
    setHam(!ham);
  };

  const variant = {
    initial: { x: 30 },
    animi: { x: 50 },
  };

  return (
    <>
      <motion.div
        variants={variant}
        initial="initial"
        animate={
          ham
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(50% at 20% 20%)" }
        }
        transition={{ duration: 0.7,type:"tween" }}
        style={{ transformOrigin: "center" }}
        className={`fixed top-5 left-5 ${
          ham ? "w-[4rem] h-[4rem]" : "w-[30vw] h-screen"
        } rounded-full bg-white ${
          ham ? "text-black" : "text-white"
        } text-5xl text-center p-2  z-50`}
      >
        <div onClick={Tap} className="fixed cursor-pointer">
          {ham ? <RxHamburgerMenu /> : <GiTireIronCross />}
        </div>

        <div className=" flex gap-6 flex-col fixed top-28 left-10 text-black text-3xl cursor-pointer text-start ml-10">
          
          <motion.a
           href="#projects"
            whileHover={{ y: -5, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            Projects
          </motion.a>
          <motion.a
           href="#about"
            whileHover={{ y: -5, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            About
          </motion.a>
          <motion.a
            href="#techno"
            whileHover={{ y: -5, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            Technologies
          </motion.a>
          <motion.a
          href="#contact"
            whileHover={{ y: -5, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            Contact
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
