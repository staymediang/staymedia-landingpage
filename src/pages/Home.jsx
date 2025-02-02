import React, { useState } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaQuoteLeft,
  FaRegFileAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
import { PiUserCircleBold, PiShieldPlusBold } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import FloatingLabel from "../components/FloatingLabel";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Why />
      <Started />
      <Grow />
      <Learn />
      <FAQS />
      <Contact />
      <Better />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="px-4 lg:px-24 py-10 text-[#61615d] bg-[#fdfdfd]">
      <span className="flex flex-row text-sm md:text-xs uppercase gap-1 mb-10">
        <p className="underline">partnerships</p>
        <p>/ duo</p>
        <p className="font-bold"> msp program</p>
      </span>
      <div className="flex flex-col-reverse md:flex-row  gap-4 ">
        <div className="flex flex-col gap-2 w-full md:w-[60%]">
          <h1 className="mb-4">Duo MSP Program</h1>
          <p className="text-lg md:text-base mb-4">
            Duo’s modern approach to security deserves a modern program approach
            for our Managed Service Providers (MSP). That means a partner
            program that provides you with simple-to-set-up security solutions
            that easily scales with your business.
          </p>
          <div className="flex flex-row gap-2">
            <button className="button-two">Get a demo</button>
            <button className="button-one">Become a partner</button>
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
        <h1 className="mb-6">Why Duo MSP</h1>
        <p className="w-full text-lg md:text-base md:w-[70%]">
          The Duo Managed Service Provider (MSP) Program enables partners to
          leverage Duo’s cloud-based, multi-tenant architecture to swiftly
          secure customers’ environments—all without the hassle of deploying
          physical agents. Grow your security stack and ensure application
          access to only trusted users and devices.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 lg:px-24 pb-24">
        <div>
          <video src="https://fast.wistia.com/embed/medias/9dqe6nrt8z.jsonp"></video>
        </div>
        <div className="">
          <ul className="flex flex-col text-lg md:text-base gap-2.5 items-start pb-6">
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="bg-[#6bbf4f] text-center border-[#6bbf4f] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Conveniently manage all your customers in one console</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="bg-[#6bbf4f] text-center border-[#6bbf4f] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Pay-as-you-go pricing to scale with your business</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="bg-[#6bbf4f] text-center border-[#6bbf4f] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>
                Lower TCO with speed to deployment and reduced support tickets
              </p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="bg-[#6bbf4f] text-center border-[#6bbf4f] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Faster ROI for your MSP business</p>
            </li>
            <li className="flex flex-row gap-2 items-start md:items-center justify-start">
              <p className="bg-[#6bbf4f] text-center border-[#6bbf4f] mt-2 p-1 h-fit w-fit rounded-full">
                <FaCheck color="#fff" size={12} />
              </p>
              <p>Excellent documentation and sales enablement support</p>
            </li>
          </ul>
          <button className="button-two">Get the MSP at a glance</button>
        </div>
      </div>

      <div className="bg-[#f5f6f8] relative px-0 lg:pl-24 grid grid-cols-1 md:grid-cols-6 gap-14">
        <div className="md:col-span-3 px-4 lg:px-0 py-14">
          <p className="absolute top-[-1.8rem] ">
            <FaQuoteLeft color="#6bbf4f" size={55} />
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
        <div className="md:col-span-3 py-8">
          <div className="bg-[#6bbf4f] relative w-[100%] h-[200px] md:h-[300px] lg:h-[100%] pl-8 py-2">
            <span className="absolute left-[22%] lg:left-0 top-[-1.6rem] lg:top-[-1.2rem]">
              <img
                className="w-[12rem] md:w-[14rem]"
                src="https://duo.com/assets/img/featured-quote/tigunia-customer-photo.png"
                alt=""
              />
            </span>
            <span className="absolute w-[6.5rem] shadow-2xl bg-white py-10 md:py-8 bottom-1 md:bottom-10 lg:bottom-1 left-60 lg:left-40 flex items-center justify-center z-50">
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
    <div className=" bg-[#363f44] text-white py-16">
      <p className="px-4 lg:px-24 text-white text-[2em] font-bold">
        Grow your business with Duo!
      </p>
      <div className="py-6">
        <div className="border-b-gray-500 border-b-2 lg:border-none">
          <div className="px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
            <div className="">
              <p className="mb-3">
                <PiUserCircleBold size={25} color="#6bbf4f" />
              </p>
              <p className="text-xl md:text-lg font-semibold mb-2">
                New! Role-based access controls
              </p>
              <div className="text-base md:text-sm pt-2 flex flex-col gap-2">
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
                <HiOutlineInformationCircle size={25} color="#6bbf4f" />{" "}
              </p>
              <p className="text-xl md:text-lg font-semibold mb-2">
                Knowledge base
              </p>
              <div className="text-base md:text-sm flex flex-col gap-2 pt-4">
                <p className="">
                  Quickly find the support you need to resolve your issue, with
                  helpful documentation and relevant articles. Plus, you can
                  view your support cases or create a new case.
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
              <PiShieldPlusBold size={25} color="#6bbf4f" />{" "}
            </p>
            <p className="text-xl md:text-lg font-semibold mb-2">
              Secure MSP Center{" "}
            </p>
            <div className="text-base md:text-sm pt-4 flex flex-col gap-2">
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
              <FaRegFileAlt size={25} color="#6bbf4f" />{" "}
            </p>
            <p className="text-xl md:text-lg font-semibold mb-2">
              Duo documentation
            </p>
            <div className="text-base md:text-sm pt-4 flex flex-col gap-2 ">
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
              <FaRegQuestionCircle size={25} color="#6bbf4f" />{" "}
            </p>
            <p className="text-xl md:text-lg font-semibold mb-2">
              More questions? Connect with your partner manager{" "}
            </p>
            <p className="text-base md:text-sm pt-4 mb-2">
              Email msp@duo.com for anything related to the MSP program or your
              multi-tenant console, or if you need Partner Manager or Sales
              Engineer support!{" "}
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
              <p className="underline cursor-pointer">Access the brandfolder</p>
            </div>
          </div>
        </div>
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
        <p className="text-base md:text-sm mb-16">
          Our no-barriers-to-entry model ensures there is no downtime to get
          products deployed. With no certifications or lengthy sign-up
          processes, you can generate revenue in a shorter timeframe. Check out
          the additional resources below to find out how!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="">
          <div className="pb-4">
            <img
              src="https://duo.com/assets/img/content-text/circle_1-1706636498.png"
              alt=""
            />
          </div>
          <p className="text-[#303030] font-bold text-2xl pb-3">
            More resources
          </p>
          <div className="flex flex-col gap-3 text-base md:text-sm pt-2">
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
          <div className="text-base md:text-sm pt-2 flex flex-col gap-3">
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
          <div className="text-base md:text-sm pt-2 flex flex-col gap-3">
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
              className="flex justify-between px-4 lg:px-24 items-center w-full text-left font-medium text-base md:text-sm py-6 bg-white hover:bg-gray-200 transition-all"
            >
              <span className="font-bold">{faq.question}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">
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
        <p className="text-[2.5rem] md:text-[4.8rem] leading-10 md:leading-18 text-white font-bold">
          We're better together. Become a partner today.
        </p>
        <button className="button-two mt-8"> Find out more</button>
      </div>
    </div>
  );
};

export default Home;
