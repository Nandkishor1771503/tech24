import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-orange-800 text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="font-londrina font-semibold text-4xl sm:text-5xl mb-4">
          Let’s Connect
        </h1>
        <div className="h-[2px] w-full bg-black/20 mb-8"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg sm:text-xl font-medium mb-4">Contact</h2>
            <p className="mb-2">
              📞 <span className="font-semibold">8143366416</span>
            </p>
            <p className="mb-1">📧</p>
            <a
              className="hover:text-gray-300 transition break-words"
              href="mailto:andekarsunny2004@gmail.com"
            >
              andekarsunny2004@gmail.com
            </a>
          </div>

          {/* Divider (hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-[1px] h-28 bg-black/30"></div>
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/nktechsolutions24/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              Instagram
            </a>
            <a
              href="https://x.com/Nk_Dev07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              Twitter
            </a>
            <a
              href="https://wa.me/8143366416"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300 text-center w-fit"
            >
              WhatsApp
            </a>
            <h2 className="mt-4 font-medium text-lg sm:text-xl">
              Let’s make your vision into reality ✨
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
