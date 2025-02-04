import React, { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaCommentDots,
  FaQuoteLeft,
  FaRegFileAlt,
  FaRegQuestionCircle,
  FaTimes,
} from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
import { PiUserCircleBold, PiShieldPlusBold } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import FloatingLabel from "../components/FloatingLabel";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showChatbox, setShowChatbox] = useState(true);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Hero />
      <Why />
      <Started />
      <Grow />
      <Learn />
      <FAQS />
      <Contact />
      <Better />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed z-60 bottom-26 text-sm right-0 bg-gray-700 text-white px-4 py-1 shadow-md hover:bg-gray-500 transition-all"
        >
          <FaChevronUp size={20} />
          <p>Top</p>
        </button>
      )}

      {/* Chatbox Popup */}
      {showChatbox && (
        <div className="fixed z-60 bottom-16 right-6 bg-white shadow-lg rounded-lg w-80 p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chat with us</h3>
            <button
              onClick={() => setShowChatbox(false)}
              className="text-gray-500 hover:text-[#6bbf4f]"
            >
              <FaTimes size={18} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Hi there! How can we help you today?
          </p>
          <textarea
            className="w-full p-2 mt-2 border rounded-sm text-sm"
            placeholder="Type your message..."
          ></textarea>
          <button className="mt-2 w-full bg-[#6bbf4f] text-white p-2 rounded-md hover:bg-[#6bbf4f]/70 transition-all">
            Send
          </button>
        </div>
      )}

      {/* Chatbox Icon (Reappear after closing the popup) */}
      {!showChatbox && (
        <button
          onClick={() => setShowChatbox(true)}
          className="fixed z-60 bottom-6 right-4 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition-all"
        >
          <FaCommentDots size={20} />
        </button>
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="px-4 lg:px-24 py-10 text-[#61615d] bg-[#fdfdfd]">
      {/* <span className="flex flex-row text-base md:text-sm uppercase gap-1 mb-10">
        <p className="underline">partnerships</p>
        <p>/ duo</p>
        <p className="font-bold"> msp program</p>
      </span> */}
      <div className="flex flex-col-reverse md:flex-row  gap-4 ">
        <div className="flex flex-col gap-2 w-full md:w-[60%]">
          <h1 className="mb-4">MCS Package</h1>
          <p className="text-lg md:text-base mb-4">
            The MCS Package offers a modern approach to driving exceptional
            business sales. A all-in-one solution that allows STAY MEDIA handles
            the online marketing of your business while driving more sales or
            generating leads.
          </p>
          <div className="flex flex-row gap-2">
            <button className="button-two">Join The WaitList</button>
            {/* <button className="button-one">Become a partner</button> */}
          </div>
        </div>
        <div className="">
          <img
            className="w-fit"
            src="https://duo.com/assets/img/product/header-graphic-1706634067.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Why = () => {
  return (
    <div className="">
      <div className="mt-8 lg:mt-16 pb-20 px-4 lg:px-24">
        <h1 className="mb-6">Why MCS Package</h1>
        <p className="w-full text-lg md:text-base md:w-[70%]">
          The Marketing-Community-Sales Package enables our prospective clients
          and customers to outsource these aspect of their online marketing to
          professionals like STAY MEDIA for certain period. Grow your
          follower-base and guaranteed remarkable sales from only trusted
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 lg:px-24 pb-24">
        <div>
          <video src="https://fast.wistia.com/embed/medias/9dqe6nrt8z.jsonp"></video>
        </div>
        <div className="">
          <ul className="flex flex-col text-lg md:text-base gap-2.5 items-start pb-6">
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#6bbf4f] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Conveniently manage all your customers in one console</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#009956] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Pay-as-you-go pricing to scale with your business</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#009956] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Lower hassle</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#009956] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Faster ROI for your business</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#009956] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Excellent support service</p>
            </li>
          </ul>
          <button className="button-two">Join the waitlist</button>
        </div>
      </div>

      <div className="bg-[#f5f6f8] relative px-0 lg:pl-24 grid grid-cols-1 md:grid-cols-6 gap-14">
        <div className="md:col-span-3 px-4 lg:px-0 py-14">
          <p className="absolute top-[-1.8rem] ">
            <FaQuoteLeft color="#009956" size={55} />
          </p>
          <p className="text-lg md:text-base leading-8">
            At Ntiva we see Cisco’s Duo portfolio as a beacon of continuous
            innovation, consistently adapting to the evolving landscape of
            cybersecurity. Its user-friendly interface, efficiency, and robust
            security measures make it an indispensable asset for any company
            striving for comprehensive multi-factor authentication coverage.”
          </p>
          <p className="text-base md:text-sm pt-6 font-bold text-gray-900">
            — Ted Brown, Director of Product Management, Ntiva
          </p>
        </div>
        <div className="md:col-span-3 py-8 flex items-center">
          <div className="greenBg relative w-[100%] h-[200px] md:h-[250px] pl-8 py-2">
            <span className="absolute left-[22%] lg:left-6 top-[-1.6rem] lg:top-[-1.2rem]">
              <img
                className="w-[12rem] md:w-[14rem]"
                src="https://duo.com/assets/img/featured-quote/tigunia-customer-photo.png"
                alt=""
              />
            </span>
            <span className="absolute w-[6.5rem] shadow-2xl drop-shadow-2xl bg-white py-10 md:py-8 bottom-1 md:bottom-10 lg:bottom-1 left-60 lg:left-40 flex items-center justify-center z-50">
              <img
                className="w-[4rem]"
                src="https://duo.com/img/asset/aW1nL2N1c3RvbWVybG9nb3MvTnRpdmEtTG9nby1CbHVlLVRhZ2xpbmUucG5n?filt=greyscale&gam=0.1&s=8e4a467c7ae624be93881f55a9d6025e"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Started = () => {
  return (
    <div className="px-4 lg:px-24 place-items-center py-20 grid grid-cols-1 md:grid-cols-6 gap-8">
      <div className=" md:col-span-2">
        <img
          src="https://duo.com/assets/img/content-text/Duo-MSP-Playbook.png"
          alt=""
        />
      </div>
      <div className="md:col-span-4">
        <h1 className="pb-8">Get started with Duo MSP</h1>
        <p className="pb-6 text-lg md:text-base">
          Duo's Managed Service Provider program delivers security solutions
          that are simple to set up and can easily scale with your business as a
          service. Whether supporting you in your first install, helping you
          troubleshoot a customer problem, or powering you to land the next
          winning deal, our team, and access to our extensive documentation
          library are available to you any time, anywhere. After all: your
          success is our success.
        </p>
        <p className="underline cursor-pointer text-xl md:text-lg">
          Get the playbook
        </p>
      </div>
    </div>
  );
};

const Grow = () => {
  return (
    <div className="px-4 lg:px-24 text-white py-16">
      <div className="greenBg px-4 py-6">
        <div className="flex flex-row justify-between items-baseline ">
          <div className="flex flex-col gap-4 w-[45%]">
            <p className="text-[#fbb52f] uppercase text-sm">
              Industries we serve
            </p>
            <p className="text-[1.5em] text-white font-semibold">
              Our professional services customized for your industry
            </p>
          </div>

          <div className="w-[45%]">
            <p className="text-white text-base">
              Our customized solutions also provide the highest
              quality-perfection in whatever field we work in. No matter the
              business We have you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols- py-12 px-8 lg:grid-cols-5 gap-4">
          <div className="group hover:scale-95 hover:bg-white/20 py-4 px-4 border-[0.1px] border-[#c2c2c2] flex flex-col gap-6 items-center justify-center">
            <img
              className="group-hover:animate-bounce duration-600 w-[4rem]"
              src="https://staymedia.ng/wp-content/uploads/2020/01/stay-web-img1.svg"
              alt=""
            />

            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-base font-semibold">Logistics</p>
              <p className="text-center text-sm">
                Let us show you what we can do
              </p>
            </div>
          </div>

          <div className="group hover:scale-95 hover:bg-white/20 py-4 px-4 border-[0.1px] border-[#c2c2c2] flex flex-col gap-6 items-center justify-center">
            <img
              className="group-hover:animate-bounce duration-600 w-[4rem]"
              src="https://staymedia.ng/wp-content/uploads/2020/01/stay-web-img2.svg"
              alt=""
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-base font-semibold">Information</p>
              <p className="text-center text-sm">
                Let us show you how our experience
              </p>
            </div>
          </div>

          <div className="group hover:scale-95 hover:bg-white/20 py-4 px-4 border-[0.1px] border-[#c2c2c2] flex flex-col gap-6 items-center justify-center">
            <img
              className="group-hover:animate-bounce duration-600 w-[4rem]"
              src="https://staymedia.ng/wp-content/uploads/2020/01/stay-web-img3.svg"
              alt=""
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-base font-semibold">Event</p>
              <p className="text-center text-sm">
                Hold on a sec, and have a look
              </p>
            </div>
          </div>

          <div className="group hover:scale-95 hover:bg-white/20 py-4 px-4 border-[0.1px] border-[#c2c2c2] flex flex-col gap-6 items-center justify-center">
            <img
              className="group-hover:animate-bounce duration-600 w-[4rem]"
              src="https://staymedia.ng/wp-content/uploads/2020/01/stay-web-img6.svg"
              alt=""
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-base font-semibold">News</p>
              <p className="text-center text-sm">
                Let us show you how our experience
              </p>
            </div>
          </div>

          <div className="group hover:scale-95 hover:bg-white/20 py-4 px-4 border-[0.1px] border-[#c2c2c2] flex flex-col gap-6 items-center justify-center">
            <img
              className="group-hover:animate-bounce duration-600 w-[4rem]"
              src="https://staymedia.ng/wp-content/uploads/2020/01/stay-web-img5.svg"
              alt=""
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-base font-semibold">NGO</p>
              <p className="text-center text-sm">
                We've worked for your niche market.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="py-6">
          <div className="border-b-gray-500 border-b-2 lg:border-none">
            <div className="px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
              <div className="">
                <p className="mb-3">
                  <PiUserCircleBold size={40} color="#6bbf4f" />
                </p>
                <p className="text-xl font-semibold mb-2">
                  New! Role-based access controls
                </p>
                <div className="text-base pt-2 flex flex-col gap-3">
                  <p className="">
                    Simplify your multi-tenant management routine with new
                    subaccount role and access tagging features in the Duo Admin
                    Panel—improving efficiency without compromising security.
                  </p>
                  <p className="underline  cursor-pointer">
                    {" "}
                    Check out the infographic
                  </p>
                  <p className="underline  cursor-pointer">
                    {" "}
                    Get the RBAC Admin Guide
                  </p>
                  <p className="underline  cursor-pointer">
                    {" "}
                    Read the announcement
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-3">
                  {" "}
                  <HiOutlineInformationCircle size={40} color="#6bbf4f" />{" "}
                </p>
                <p className="text-xl font-semibold mb-2">Knowledge base</p>
                <div className="text-base flex flex-col gap-3 pt-2">
                  <p className="">
                    Quickly find the support you need to resolve your issue,
                    with helpful documentation and relevant articles. Plus, you
                    can view your support cases or create a new case.
                  </p>
                  <p className="underline cursor-pointer">
                    Visit the Duo Help Center{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
            <div>
              <p className="mb-3">
                {" "}
                <PiShieldPlusBold size={40} color="#6bbf4f" />{" "}
              </p>
              <p className="text-xl font-semibold mb-2">Secure MSP Center </p>
              <div className="text-base  pt-2 flex flex-col gap-3">
                <p className="">
                  Interested in selling other SaaS-security products? Check out
                  Secure MSP Center, our direct buying model for Umbrella and
                  Secure Endpoint modelled after the success of the Duo Managed
                  Service Provider program.{" "}
                </p>
                <p className="underline text-sm cursor-pointer">
                  Simplify your buying experience
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3">
                {" "}
                <FaRegFileAlt size={40} color="#6bbf4f" />{" "}
              </p>
              <p className="text-xl font-semibold mb-2">Duo documentation</p>
              <div className="text-base pt-2 flex flex-col gap-3 ">
                <p className="">
                  Duo supports a wide range of devices and applications. Visit
                  this page for detailed documentation, installation, and
                  configuration information.{" "}
                </p>
                <p className="underline cursor-pointer">Get expert guidance </p>
              </div>
            </div>
          </div>

          <div className=" px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-3">
                {" "}
                <FaRegQuestionCircle size={40} color="#6bbf4f" />{" "}
              </p>
              <p className="text-xl font-semibold mb-2">
                More questions? Connect with your partner manager{" "}
              </p>
              <p className="text-base pt-2 mb-2">
                Email msp@duo.com for anything related to the MSP program or
                your multi-tenant console, or if you need Partner Manager or
                Sales Engineer support!{" "}
              </p>
            </div>

            <div>
              <p className="mb-3">
                {" "}
                <FiFilePlus size={25} color="#6bbf4f" />{" "}
              </p>
              <p className="text-xl md:text-lg font-semibold mb-2">
                There’s more where that came from{" "}
              </p>
              <div className="text-base md:text-sm pt-4 flex flex-col gap-2">
                <p className="">
                  No matter the sale, we’ve got the materials to help you sell
                  Duo, including training materials, collateral, and sales
                  enablement resources.{" "}
                </p>
                <p className="underline cursor-pointer">
                  Access the brandfolder
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Learn = () => {
  return (
    <div className="px-4 lg:px-24 py-16">
      <div className="w-full md:w-[70%] pb-8">
        <h1 className="pb-6">
          Learn more about the Duo Managed Service Provider Program
        </h1>
        <p className="text-base mb-16">
          Our no-barriers-to-entry model ensures there is no downtime to get
          products deployed. With no certifications or lengthy sign-up
          processes, you can generate revenue in a shorter timeframe. Check out
          the additional resources below to find out how!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* <div className="">
          <div className="pb-4">
            <img
              src="https://duo.com/assets/img/content-text/circle_1-1706636498.png"
              alt=""
            />
          </div>
          <p className="text-[#303030] font-bold text-2xl pb-3">
            More resources
          </p>
          <div className="flex flex-col gap-4 text-base pt-2">
            <p className="underline leading-5.5 cursor-pointer text-[#5b6063]">
              {" "}
              How MSPs Help Small Businesses with Essential Cyber Insurance
              Cover
            </p>
            <p className="underline leading-5.5 cursor-pointer text-[#5b6063]">
              5 Key Findings for MSPs to Strengthen Security from Duo's Trusted
              Access Report
            </p>
            <p className="underline cursor-pointer text-[#5b6063]">Read more</p>
          </div>
        </div>

        <div>
          <img
            className="pb-4"
            src="https://duo.com/assets/img/content-text/circle_2.png"
            alt=""
          />
          <p className="text-[#303030] font-bold text-2xl pb-3">Webinars</p>
          <div className="text-base pt-2 flex flex-col gap-4">
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              Duo MSP Tech Talks: Customer Deployment in 60-Minutes
            </p>
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              Duo MSP Tech Talks: Land and Expand
            </p>
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              Six Key Mistakes MSPs Make with SMB Security
            </p>
          </div>
        </div> */}

        <div>
          <img
            src="https://png.pngtree.com/png-clipart/20221006/ourmid/pngtree-calendar-3d-icon-render-png-image_6275730.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="pb-4"
            src="https://duo.com/assets/img/content-text/circle_3.png"
            alt=""
          />
          <p className="text-[#303030] font-bold text-2xl pb-3">
            Upcoming events
          </p>
          <div className="text-base pt-2 flex flex-col gap-4">
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              Managed Service Summit London - Sept 11
            </p>
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              TeamLogic IT Owner's Summit - Sept 16-19
            </p>
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              MSP Global - Oct 9-10
            </p>
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              Kaseya DattoCon Miami - Oct 28-30
            </p>
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              IT Nation Connect - Nov 6-8
            </p>
            <p className="underline cursor-pointer leading-5.5 text-[#5b6063]">
              Kaseya DattoCon Asia-Pacific - Nov 12-14
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question:
        "What difference(s) are there between an MSP Duo Account and a regular Duo Commercial Account?",
      answer:
        "The MSP Duo Account you receive as a partner offers multi-tenancy so that you can manage your client accounts easily. Other than this, the account types have the same feature/functionality, across all editions.",
    },
    {
      question:
        "Do I have access to a Partner Account team after I’ve signed up?",
      answer:
        "Yes – You will be aligned with a Partner Account Manager, who has access to Business Development and Technical resources to ensure you’re getting the most out of your partnership with Duo.",
    },
    {
      question:
        "What’s the catch? Are there any initial barriers to becoming an MSP Partner?",
      answer:
        "No catch! Partnerships with the Duo MSP Program are free and do not require any sales commitments (or minimums). There are also no special certifications required to participate.",
    },
    {
      question:
        "Does the MSP Partner Program offer both monthly and annual billing options?",
      answer:
        "Our program bills monthly, based on the total number of billable users in your console at the end of each month.",
    },
    {
      question:
        "Where do I find resources to train my team? Or who can I contact if I have additional questions?",
      answer:
        "As a Duo MSP Partner, you can reach out to your Partner Manager, or msp@duo.com, for assistance. Not quite ready to become a partner? You can reach out to our team at mspadr@duosecurity.com for answers to questions you may have and to help get signed up!",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className=" py-12">
      <div className="px-4 lg:px-24">
        <h1>Frequently asked questions</h1>
      </div>

      <div className="pt-16">
        {faqsData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between px-4 lg:px-24 items-center w-full text-left font-medium text-base  py-6 bg-white hover:bg-gray-200 transition-all"
            >
              <span className="font-bold">{faq.question}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm hidden md:block">
                  {openIndex === index ? "Read Less" : "Read More"}
                </span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>

            <div
              className={`grid transition-all px-4 lg:px-24 duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 p-4"
                  : "grid-rows-[0fr] opacity-0 p-0"
              }`}
            >
              <p className="overflow-hidden">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const [countries, setCountries] = useState([]);
  return (
    <div className="px-4 lg:px-24 py-10">
      <div className="w-[100%] md:w-[50%]">
        <h1 className="pb-8">Contact us for a demo</h1>
        <p className="pb-8">
          Find out if Duo is right for your business. Let’s schedule a time to
          walk you through the MSP Program and product demonstration.
        </p>
        <div className="text-sm">
          <p className="text-right pb-6 text-base md:text-sm"> * Required</p>

          <form className="flex flex-col gap-4 pb-8" action="">
            <FloatingLabel label="First Name *" type="text" name="name" />
            <FloatingLabel label="Last Name *" type="text" name="name" />
            <FloatingLabel label="Business Email *" type="email" name="email" />
            <FloatingLabel label="Title *" type="text" name="title" />
            <FloatingLabel
              label="Select Country *"
              type="select"
              name="country"
              options={countries}
              setOptions={setCountries}
            />
            <FloatingLabel label="Phone Number *" type="tel" name="phone" />
            <FloatingLabel label="Company Name *" type="text" name="company" />
            <FloatingLabel
              label="Company Size *"
              type="select"
              name="size"
              options={[
                "Please select*",
                "Just me",
                "2 - 10 employees",
                "11. -  50 employees",
                "51 - 200 employees",
                "201 - 500 employees",
                "501 - employees",
                "1001 - 5000 employees",
                "5001 - 10,000 employees",
                "More than 10,000",
              ]}
            />
            <FloatingLabel
              label="Have a preferred day or time for your demo? Let us know here."
              type="textarea"
              name="message"
            />
          </form>
          <div className="flex flex-row gap-2 items-start pb-8">
            <input className="mt-1 w-5 h-5" type="checkbox" name="" id="" />
            <span className="flex flex-row flex-wrap gap-1 items-center text-xs">
              <p>By applying to the MSP Program I agree to the MSP Program </p>
              <Link className="underline">terms and conditions.</Link>
            </span>
          </div>

          <button className="button-two mb-8">Schedule Your Demo</button>

          <span className="flex flex-row flex-wrap gap-1 items-center text-sm">
            <p>Information you provide is subject to the</p>
            <Link className="underline">Cisco Online Privacy Statement.</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const Better = () => {
  return (
    <div className="better h-[250px] md:h-[500px] px-4 lg:px-24 flex flex-col justify-center">
      <div className="w-[100%] md:w-[84%] lg:w-[78%] ">
        <p className="text-[2.8rem] md:text-[4.8rem] lg:text-[5rem] leading-10 md:leading-18 text-white font-bold">
          We're better together. Become a partner today.
        </p>
        <button className="button-two mt-8"> Find out more</button>
      </div>
    </div>
  );
};

export default Home;
