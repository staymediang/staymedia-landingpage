import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  text-white">
      <div className="pt-14 pb-10 w-[100%] greenBg text-sm space-y-6  flex flex-row flex-wrap justify-between px-4 lg:px-24 gap-4 item">
        <div className="w-[100%] lg:w-[30%] flex flex-col gap-4">
          <img
            className="w-[10rem]"
            src="https://staymedia.ng/wp-content/uploads/2021/03/web-graphics-28.png"
            alt=""
          />
          <p>
            A prolific creative community-oriented certified professional,
            committed to building excellent and credible output based in Lagos,
            Nigeria.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-[45%] md:w-[20%] lg:w-[18%]">
          <p className="text-white hover:text-[#fbb52f] cursor-pointer">
            Services
          </p>
          <div className="capitalize text-white/70 flex flex-col gap-4">
            <Link className="hover:text-[#fbb52f]">Graphic Design</Link>
            <Link className="hover:text-[#fbb52f]">Social media marketing</Link>
            <Link className="hover:text-[#fbb52f]">Website development</Link>
          </div>
        </div>

        <div className="capitalize flex flex-col w-[45%] md:w-[20%] lg:w-[12%] gap-4 ">
          <p className="text-white hover:text-[#fbb52f]">Solution</p>
          <p className="text-white/70 hover:text-[#fbb52f]">case studies</p>
        </div>

        <div className="flex flex-col gap-4 w-[45%] md:w-[20%] lg:w-[12%]">
          <p className="text-white hover:text-[#fbb52f] cursor-pointer">
            Company
          </p>

          <div className="capitalize text-white/70 flex flex-col gap-4">
            <Link className="text-white/70 hover:text-[#fbb52f]">About</Link>
            <Link className="text-white/70 hover:text-[#fbb52f]">Careers</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[45%] md:w-[20%] lg:w-[15%]">
          <p className="text-white hover:text-[#fbb52f] cursor-pointer">
            Support
          </p>

          <div className="capitalize text-white/70 flex flex-col gap-4">
            <Link className="text-white/70 hover:text-[#fbb52f]">Enquire</Link>
            <Link className="text-white/70 hover:text-[#fbb52f]">FAQ</Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-3 w-[100%] space-y-4 px-4 lg:px-24 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-row gap-2  text-xs items-center">
          <span className="text-white bg-blue-800 p-2">
            <FaFacebookF />
          </span>
          <span className="text-white bg-blue-400 p-2">
            <FaTwitter />
          </span>
          <span className="bg-red-600 text-white p-2">
            {" "}
            <FaInstagram />
          </span>
        </div>

        <div className="text-sm flex flex-row gap-1 items-center text-[#303030]">
          <p className="">Copyright</p>
          <p>&copy;</p>
          <p>2018-2023 STAY MEDIA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
