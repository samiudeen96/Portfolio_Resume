import React from "react";
import Image from "next/image";
import { TfiDownload } from "react-icons/tfi";
import { IoIosPhonePortrait } from "react-icons/io";
// import { GrLocationPin } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { location } from "../../public/assets";

const Home = () => {
  return (
    <div
      className="container flex items-center justify-center h-screen"
      id="home"
    >
      <div>
        <div className="flex items-center justify-center gap-5">
          <div className="min-w-35 min-h-35 bg-gray-400 rounded-full overflow-hidden">
            <Image
              src="/display_pic.jpg"
              alt="Display Picture"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <h1 className="sm:text-5xl text-3xl font-bold">Samiudeen</h1>
            <h3 className="sm:text-3xl text-xl font-semibold mt-3 text-primary">
              Web Developer
            </h3>
          </div>
        </div>
        <p className="sm:mt-12 mt-6 text-center sm:text-[22px] text-lg">
          I craft seamless user interfaces, interactive experiences, and modern
          web applications.
        </p>
        <div className="flex flex-wrap divide-x divide-gray-400 mt-6 justify-center sm:text-lg text-sm ">
          <div className="sm:px-4 px-2">Frontend Developer</div>
          <div className="sm:px-4 px-2">Full Stack Developer</div>
          <div className="sm:px-4 px-2">React.js & Node.js</div>
          <div className="sm:px-4 px-2">MERN Stack Developer</div>
          <div className="sm:px-4 px-2">Web Apps & API Development</div>
        </div>
        <div className="flex justify-center flex-wrap mt-8 gap-3">
          <div className="flex items-end sm:px-4 px-4 py-1">
            {/* <GrLocationPin className="text-red-500" size={22} /> */}
            <Image src={location} width={30} height={30} alt="location" />
            <p>Dubai, United Arab Emirates</p>
          </div>

          {/* <div className="flex items-center bg-[#f9f9f9] rounded-md sm:px-4 px-4 py-1">
            <IoIosPhonePortrait className="" size={22} />
            <p>+971 502126746</p>
          </div>

          <div className="flex items-center bg-[#f9f9f9] rounded-md sm:px-4 px-4 py-1">
            <FaWhatsapp className="text-green-400" size={22} />
            <p>+971 502126746</p>
          </div> */}
        </div>
        <div className=" mt-10 flex gap-5 items-center justify-center">
          <a
            href="/Samiudeen_Fullstack_Developer.pdf"
            download
            className="relative p-0 mx-2 border-none bg-transparent cursor-pointer outline-offset-1 transition duration-250 hover:brightness-110"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded-[12px] bg-black/25 shadow-transform transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] translate-y-[2px] hover:translate-y-[4px] active:translate-y-[1px]"></span>
            <span className="absolute top-0 left-0 w-full h-full rounded-[12px] bg-gradient-to-l from-[#7030e0] via-primary to-[#7030e0]"></span>
            <span className="relative flex items-center gap-2 rounded-[12px] px-[30px] py-[10px] text-white text-sm font-semibold border-2 border-primary bg-primary translate-y-[-4px] transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] hover:translate-y-[-6px] hover:duration-[250ms] hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)] active:translate-y-[-2px] active:duration-[34ms]">
              Resume <TfiDownload />
            </span>
          </a>

          <Link href="#contact"
            className="relative p-0 mx-2 border-none bg-transparent cursor-pointer outline-offset-1 transition duration-250 hover:brightness-110"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded-[12px] bg-black/25 shadow-transform transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] translate-y-[2px] hover:translate-y-[4px] active:translate-y-[1px]"></span>
            <span className="absolute top-0 left-0 w-full h-full rounded-[12px] bg-gradient-to-l from-[#7030e0] via-primary to-[#7030e0]"></span>
            <span className="relative flex items-center gap-2 rounded-[12px] px-[30px] py-[10px] text-primary text-sm font-semibold border-2 border-primary bg-background translate-y-[-4px] transition-all duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] hover:translate-y-[-6px] hover:duration-[250ms] hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)] active:translate-y-[-2px] active:duration-[34ms]">
              Contact
            </span>
          </Link>

          {/* <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/samiudeen/" target="_blank">
              <Image
                src="/linkedin.svg"
                width={30}
                height={30}
                alt="linkedin"
              />
            </a>

            <a href="https://github.com/samiudeen96" target="_blank">
              <Image src="/github.svg" width={30} height={30} alt="github" />
            </a>

            <a href="mailto:samiudeen96amm@gmail.com">
              <Image src="/gmail.svg" width={30} height={30} alt="gmail" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
