import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-[60vh] bg-orange-800 ">
        <h1 className="font-londrina font-semibold ml-5">Lets connect</h1>
        <div className="h-[2px] w-[95vw] bg-black mx-5 my-5"></div>
        <div className="flex items-center justify-center gap-24">
          <div className="">
            <h2 className="text-xl ml-5 mt-5">contact : 8143366416</h2>
            <h2 className="text-xl ml-5 mt-5">Mail : </h2>
            <a
              class="email-link ml-5 text-xl "
              href="mailto:andekarsunny2004@gmail.com?subject=Inquiry&body=Hello, I would like to know more about..."
            >
              andekarsunny2004@gmail.com
            </a>
          </div>

          <div className="w-[1px] h-36 mt-12 bg-black"> </div>

          <div className="flex flex-col gap-4 text-xl">
            <a href="https://www.instagram.com/nktechsolutions24/">Instagram</a>
            <a href="https://x.com/Nk_Dev07"> Twitter </a>
            <a href="https://wa.me/8143366416">Whatsapp</a>
          </div>

          
          
        </div>
      </div>
    </>
  );
}

export default Footer;
