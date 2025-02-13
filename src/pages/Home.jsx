import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaCommentDots,
  FaQuoteLeft,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FloatingLabel from "../components/FloatingLabel";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Important for accessibility

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
          className="fixed text-center flex flex-col items-center z-60 bottom-26 text-sm right-1 bg-gray-700 text-white px-3 py-1 shadow-md hover:bg-gray-500 transition-all"
        >
          <FaChevronUp size={15} />
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
              className="text-gray-500 hover:text-[#009956]"
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
          <button className="mt-2 w-full greenBg text-white p-2 rounded-md hover:bg-[#009956]/70 transition-all">
            Send
          </button>
        </div>
      )}

      {/* Chatbox Icon (Reappear after closing the popup) */}
      {!showChatbox && (
        <div>
          <button
            onClick={() => setShowChatbox(true)}
            className="fixed z-60 bottom-6 right-4 greenBg text-white p-3 rounded-full shadow-md hover:bg-green-700 transition-all"
          >
            <FaWhatsapp size={20} />
          </button>
          <span className="text-xs bg-gray-50 w-fit flex flex-row items-center gap-1 px-3 py-2 rounded-lg fixed right-17 z-60 bottom-7">
            <p>Need help?</p>
            <p className="font-semibold">Chat with us</p>
          </span>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const mailchimpUrl = "http://eepurl.com/i9bMFw";

  const initialTime = 4320 * 60; // 72 hour in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="px-4 lg:px-24 pt-18 text-[#61615d] bg-[#fdfdfd]">
      {/* <span className="flex flex-row text-base md:text-sm uppercase gap-1 mb-10">
        <p className="underline">partnerships</p>
        <p>/ duo</p>
        <p className="font-bold"> msp program</p>
      </span> */}
      <div className="flex flex-col-reverse md:flex-row  gap-4 ">
        <div className="flex flex-col gap-2 w-full md:w-[60%]">
          <h1 className="mb-4">
            Convoke ICS – The Complete Solution for Business Growth
          </h1>
          <p className="text-lg md:text-base mb-4">
            Growing a business takes time. Convoke ICS offers everything you
            need to grow your business online. A 3-way solution to business
            success: identity, community, and sales.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <button
              onClick={() => window.open(mailchimpUrl, "_blank")}
              className="button-two"
            >
              Request a demo
            </button>
            <div className="flex flex-row items-end gap-2">
              <div className="button-one w-[50%] flex items-center justify-center md:w-full md:w-auto px-8 font-semibold">
                {formatTime(timeLeft)}
              </div>
              <p className="text-xs w-[40%] md:w-full">
                Limited slots remaining
              </p>
            </div>
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const mailchimpUrl = "http://eepurl.com/i9bMFw";

  return (
    <div className="">
      <div className="mt-16 lg:mt-24 pb-8 px-4 lg:px-24">
        <h1 className="mb-6">Why Convoke ICS</h1>
        <p className="w-full text-lg md:text-base md:w-[70%]">
          Your brand is more than just a name. It’s how people recognize, trust,
          and connect with you. The Convoke ICS helps you establish a strong
          presence, build a loyal community, and turn loyal followers into
          buying customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-24">
        <div>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/bAXuGTUifmE?si=lqpKiLoxIi45KWy-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <ul className="flex flex-col text-lg md:text-base gap-2.5 items-start pb-6">
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#6bbf4f] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Establishing a strong identity</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#009956] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p> Building active communities</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#009956] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Excellent Sales Acquisition Strategy</p>
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
              <p>Pay-as-you-go model</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="greenBg text-center border-[#009956] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Excellent support service</p>
            </li>
          </ul>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => window.open(mailchimpUrl, "_blank")}
              className="bg-[#009e3d] text-white py-[16px] px-[24px] border border-[009e3d] rounded-[4px] text-sm w-[100%] md:w-fit"
            >
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Started = () => {
  return (
    <div className="px-4 lg:px-24 place-items-center pt-18 lg:pt-24 grid grid-cols-1 md:grid-cols-6 gap-8">
      <div className=" md:col-span-2">
        <img
          src="https://duo.com/assets/img/content-text/Duo-MSP-Playbook.png"
          alt=""
        />
      </div>
      <div className="md:col-span-4">
        <h1 className="pb-8">Need an in-depth understanding of Convoke ICS.</h1>
        <p className="pb-6 text-lg md:text-base">
          Zero worries, we prepared a document for you to help you get started
          and learn more about why MCS is the exact solution your business needs
          to drive in this digital space.
        </p>
        <p className="underline cursor-pointer text-xl md:text-lg">
          Download PDF
        </p>
      </div>
    </div>
  );
};

const Grow = () => {
  return (
    <div className="px-4 lg:px-24 text-white pt-28 pb-20">
      <div className="greenBg py-12 px-8">
        <div className="flex flex-col gap-8 lg:flex-row pb-8 justify-between items-baseline ">
          <div className="flex flex-col gap-2 w-full lg:w-[45%]">
            <p className="text-[#fcb52f] uppercase text-sm">
              Industries we serve
            </p>
            <p className="text-[1.8em] leading-8 text-white font-semibold">
              Our professional services customized for your industry
            </p>
          </div>

          <div className="w-full lg:w-[45%]">
            <p className="text-white text-sm">
              Our customized solutions also provide the highest
              quality-perfection in whatever field we work in. No matter the
              business We have you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <Link
            to={"https://staymedia.ng/case-studies/"}
            className="group hover:scale-95 hover:bg-gray-100/10 hover:border-[#88d39f]/50 py-4 px-2 border-[0.05px] border-[#88d39f] flex flex-col gap-6 items-center justify-center ease-in-out duration-200"
          >
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
          </Link>

          <Link
            to={"https://staymedia.ng/case-studies/"}
            className="group hover:scale-95 hover:bg-gray-100/10 hover:border-[#88d39f]/50 py-4 px-2 border-[0.05px] border-[#88d39f] flex flex-col gap-6 items-center justify-center ease-in-out duration-200"
          >
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
          </Link>

          <Link
            to={"https://staymedia.ng/case-studies/"}
            className="group hover:scale-95 hover:bg-gray-100/10 hover:border-[#88d39f]/50 py-4 px-2 border-[0.05px] border-[#88d39f]  flex flex-col gap-6 items-center justify-center ease-in-out duration-200"
          >
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
          </Link>

          <Link
            to={"https://staymedia.ng/case-studies/"}
            className="group hover:scale-95 hover:bg-gray-100/10 hover:border-[#88d39f]/50 py-4 px-2 border-[0.05px] border-[#88d39f]  flex flex-col gap-6 items-center justify-center ease-in-out duration-200"
          >
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
          </Link>

          <Link
            to={"https://staymedia.ng/case-studies/"}
            className="group hover:scale-95 hover:bg-gray-100/10 hover:border-[#88d39f]/50 py-4 px-2 border-[0.05px] border-[#88d39f]  flex flex-col gap-6 items-center justify-center ease-in-out duration-200"
          >
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
          </Link>
        </div>
      </div>
    </div>
  );
};

const Learn = () => {
  return (
    <div className="px-4 lg:px-24 py-16">
      <div className="w-full md:w-[70%] pb-8">
        <h1 className="pb-6">Learn more about Convoke ICS</h1>
        <p className="text-base mb-16">
          Join our AMA event spaces where we discuss how Convoke ICS helps your
          business generate incredible sales within the stipulated duration.
        </p>
      </div>

      <div className="grid grid-cols-1 place-items-start gap-12">
        {/* <div className="">
          <img
            src="https://png.pngtree.com/png-clipart/20221006/ourmid/pngtree-calendar-3d-icon-render-png-image_6275730.png"
            alt=""
          />
        </div>

        <div>
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
        </div> */}

        <div className="bg-[#fcb52f] px-4 py-6 w-full grid grid-cols-4 md:grid-cols-5 gap-2 place-items-center">
          <img src="" alt="" />

          <div className="flex flex-col col-span-2 md:col-span-3 gap-1">
            <p className="text-sm md:text-base uppercase">Upcoming events</p>
            <p className="text-white font-semibold text-xl md:text-2xl">
              AMA with STAY MEDIA
            </p>
          </div>

          <button className="greenBg text-white h-fit rounded-[10px] w-full text-sm md:text-lg py-4 md:px-3">
            Remind Me
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "Can I set a specific during I would love to use ICS",
      // answer:
      // "The MSP Duo Account you receive as a partner offers multi-tenancy so that you can manage your client accounts easily. Other than this, the account types have the same feature/functionality, across all editions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12">
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
      <div className="w-[100%] flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="pb-8">Contact us for a demo</h1>
          <p className="pb-8">
            Find out if ICS is right for your business. Let’s schedule a time to
            walk you through the ICS Package and product demonstration.
          </p>
        </div>
        <button className="border border-[#303030] px-[24px] py-[16px] rounded-[4px] bg-[#fff] h-fit w-full md:w-fit">
          Speak to an expert
        </button>
        {/* <div className="text-sm">
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
              <p>By applying to the MCS Package I agree to the MCS Package </p>
              <Link className="underline">terms and conditions.</Link>
            </span>
          </div>

          <button className="button-two mb-8">Schedule Your Demo</button>

          <span className="flex flex-row flex-wrap gap-1 items-center text-sm">
            <p>Information you provide is subject to the</p>
            <Link className="underline">Cisco Online Privacy Statement.</Link>
          </span>
        </div> */}
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
        <button
          onClick={() => window.open(mailchimpUrl, "_blank")}
          className="button-two mt-8 capitalize"
        >
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Home;
