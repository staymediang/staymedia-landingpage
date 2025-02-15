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
import FooterLogo from "../assets/img/footerlogo.png";

const Footer = () => {
  return (
    <div className="  text-white">
      <div className="pt-14 pb-10 w-[100%] greenBg text-sm space-y-6  flex flex-row flex-wrap justify-between px-4 lg:px-24 gap-4 item">
        <div className="w-[100%] lg:w-[30%] flex flex-col gap-4">
          <img
            className="w-[10rem]"
            src={FooterLogo}
            alt=""
          />
          <p>
            A prolific creative community-oriented certified professional,
            committed to building excellent and credible output based in Lagos,
            Nigeria.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-[45%] md:w-[20%] lg:w-[18%]">
          <Link
            to={"https://staymedia.ng/services/"}
            className="text-white hover:text-[#fbb52f] cursor-pointer"
          >
            Services
          </Link>
          <div className="capitalize text-white/70 flex flex-col gap-4">
            <Link
              to={"https://staymedia.ng/services/graphic-design/"}
              className="hover:text-[#fbb52f]"
            >
              Graphic Design
            </Link>
            <Link
              to={"https://staymedia.ng/services/social-media-marketing/"}
              className="hover:text-[#fbb52f]"
            >
              Social media marketing
            </Link>
            <Link
              to={"https://staymedia.ng/services/website-development/"}
              className="hover:text-[#fbb52f]"
            >
              Website development
            </Link>
          </div>
        </div>

        <div className="capitalize flex flex-col w-[45%] md:w-[20%] lg:w-[12%] gap-4 ">
          <Link
            to={"https://staymedia.ng/#"}
            className="text-white hover:text-[#fbb52f]"
          >
            Solution
          </Link>
          <Link
            to={"https://staymedia.ng/case-studies/"}
            className="text-white/70 hover:text-[#fbb52f]"
          >
            case studies
          </Link>
        </div>

        <div className="flex flex-col gap-4 w-[45%] md:w-[20%] lg:w-[12%]">
          <Link
            to={"https://staymedia.ng/#"}
            className="text-white hover:text-[#fbb52f] cursor-pointer"
          >
            Company
          </Link>

          <div className="capitalize text-white/70 flex flex-col gap-4">
            <Link
              to={"https://staymedia.ng/about/"}
              className="text-white/70 hover:text-[#fbb52f]"
            >
              About
            </Link>
            <Link
              to={"https://staymedia.ng/careers/"}
              className="text-white/70 hover:text-[#fbb52f]"
            >
              Careers
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[45%] md:w-[20%] lg:w-[15%]">
          <Link
            to={"https://staymedia.ng/#"}
            className="text-white hover:text-[#fbb52f] cursor-pointer"
          >
            Support
          </Link>

          <div className="capitalize text-white/70 flex flex-col gap-4">
            <Link
              to={"https://staymedia.ng/contact-us/"}
              className="text-white/70 hover:text-[#fbb52f]"
            >
              Enquire
            </Link>
            <Link
              to={"https://staymedia.ng/faq/"}
              className="text-white/70 hover:text-[#fbb52f]"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-3 w-[100%] space-y-4 px-4 lg:px-24 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-row gap-2  text-xs items-center">
          <Link
            to={"https://www.facebook.com/staymediang/"}
            className="text-white bg-blue-800 hover:bg-[#fcb52f] p-2"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={"https://twitter.com/staymediang"}
            className="text-white bg-blue-400 hover:bg-[#fcb52f] p-2"
          >
            <FaTwitter />
          </Link>
          <Link
            to={"https://www.instagram.com/staymediang/"}
            className="bg-red-600 hover:bg-[#fcb52f] text-white p-2"
          >
            {" "}
            <FaInstagram />
          </Link>
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
