import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useGSAP } from "@gsap/react";

function Services() {
  useGSAP(() => {
    const set2 = gsap.utils.toArray(".cards2 > div");
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards2",
        scroller: "body",
        // markers:true,
        start: "top -5%",
        end: "bottom 15%",
        scrub: true,
      },
    });

    set2.forEach((element) => {
      tl2.to(element, {
        scale: 0.5,
        opacity: 0,
        y: 500,
        // duration:.3,
        zIndex: -3,
        duration: 0.3,
      });
    });
  });

  return (
    <>
      <div className="cards2 m-auto  lg:my-40 lg:w-[60%] w-[90%] text-orange-500  ">
        <div className="ani sticky lg:h-[80vh]  flex flex-col gap-10 mt-12 lg:p-16 p-2 pb-14 rounded-2xl bg-[#181818] ">
          <div className="flex lg:gap-2 gap-4 my-2 mx-5 text-5xl">
            {" "}
            <span className="font-londrina shadow-xl p-3">01.</span>
            <h2 className="font-londrina font-medium shadow-xl p-3">
              Custom design
            </h2>
          </div>

          <h2 className="lg:text-3xl lg:mt-6 text-lg lg:leading-[3.2rem] p-2">
            We value your time and dedication to your brand, which is why we
            offer a set of revisions to ensure your website design aligns
            perfectly with your needs and satisfaction. This allows our clients
            the flexibility to modify and refine their designs, creating a final
            product that truly represents their vision.
          </h2>
        </div>
        <div className="ani sticky lg:h-[80vh]  flex flex-col gap-10 mt-12 lg:p-16 p-2 pb-14 rounded-2xl bg-[#181818] ">
          <div className="flex lg:gap-2 gap-4 my-2 mx-5 text-5xl">
            {" "}
            <span className="font-londrina shadow-xl p-3">02.</span>
            <h2 className="font-londrina font-medium shadow-xl p-3">
              UI/UX design selection
            </h2>
          </div>

          <h2 className="lg:text-3xl lg:mt-6 text-lg lg:leading-[3.2rem] p-2">
            If you're uncertain about the design direction for your website, we
            offer a design selection session to help you choose the best style
            for your brand. During this session, we'll guide you through various
            options and provide expert advice to ensure the design aligns with
            your vision and goals.
          </h2>
        </div>
        <div className="ani sticky lg:h-[80vh]  flex flex-col gap-10 mt-12 lg:p-16 p-2 pb-14 rounded-2xl bg-[#181818] ">
          <div className="flex lg:gap-2 gap-4 my-2 mx-5 text-5xl">
            {" "}
            <span className="font-londrina shadow-xl p-3">03.</span>
            <h2 className="font-londrina font-medium shadow-xl p-3">
              Hosting & deployment
            </h2>
          </div>
          <h2 className="lg:text-3xl lg:mt-6 text-lg lg:leading-[3.2rem] p-2">
            Our agency also handles the deployment and hosting of your website,
            ensuring a smooth launch and reliable performance. We take care of
            all technical aspects, from server setup to ongoing hosting
            management, so your site runs seamlessly.
          </h2>
        </div>
        <div className="ani sticky lg:h-[80vh]  flex flex-col gap-10 mt-12 lg:p-16 p-2 pb-14 rounded-2xl bg-[#181818] ">
          <div className="flex lg:gap-2 gap-4 my-2 mx-5 text-5xl">
            {" "}
            <span className="font-londrina shadow-xl p-3">04.</span>
            <h2 className="font-londrina font-medium shadow-xl p-3">
              Maintenance and Support
            </h2>
          </div>
          <h2 className="lg:text-3xl lg:mt-6 text-lg lg:leading-[3.2rem] p-2">
            Regularly updating, monitoring, and maintaining websites to ensure
            optimal performance and security. Offering ongoing technical support
            and troubleshooting.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Services;
