import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" pt-14 pb-10 bg-[#363f44] text-white">
      <div className="w-[100%] flex flex-row flex-wrap px-4 lg:px-24 gap-4 mb-8">
        <div className="w-[100%] lg:w-[20%] h-fit flex flex-row flex-wrap">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 w-full">
            <p className="text-2xl pb-4">Logo</p>
            <div className="border-white border-1 rounded-full p-2 bg- text-white flex flex-row gap-2 items-center">
              <p>
                <MdSearch size={20} />
              </p>
              <input
                className="bg-transparent text-base outline-none focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="mt-18 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 w-full gap-8 sm:gap-14 lg:gap-8">
            <div>
              <p className="border-b-2 pb-1 font-semibold">
                International Resources:
              </p>

              <select
                className="mt-4 mb-8 w-full outline-none focus:outline-none "
                name="language"
                id=""
              >
                <option>Select Language</option>
                <option className="text-[#303030]" value="French">
                  French
                </option>
              </select>
            </div>

            <ul className="flex flex-row gap-6 text-2xl items-center">
              <li className="cursor-pointer">
                {" "}
                <FaFacebook />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <FaXTwitter />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <FaInstagram />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <FaLinkedin />{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:block w-[18%]">
          <p className="text-base text-white mb-4 font-semibold">Products</p>
          <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
            <Link className="text-[#6bbf4f] cursor-pointer">
              Key capabiltiy
            </Link>
            <Link className="cursor-pointer hover:underline">Duo Passport</Link>
            <Link className="cursor-pointer hover:underline">
              Cisco Identity Intelligence
            </Link>
            <Link className="hover:underline">Mobile app</Link>
            <Link className="hover:underline">MFA</Link>
            <Link className="hover:underline">What is MFA</Link>
            <Link className="hover:underline">2FA</Link>
            <Link className="hover:underline">Remote Access</Link>
            <Link className="hover:underline">Device Trust</Link>
            <Link className="hover:underline">Single Sign-On</Link>
            <Link className="hover:underline">Passwordless</Link>
            <Link className="hover:underline">Zero Trust</Link>
            <Link className="hover:underline">Adaptive Access Policies</Link>
            <Link className="text-[#6bbf4f] cursor-pointer hover:underline">
              Duo use cases
            </Link>
            <Link className="hover:underline">State & Local Government</Link>
            <Link className="hover:underline">Federal Governments</Link>
            <Link className="hover:underline">Enterprise</Link>
            <Link className="hover:underline">Small to Medium Bysiness</Link>
          </ul>
        </div>

        <div className="hidden lg:block w-[18%]">
          <p className="text-base text-white mb-4">Solutions</p>
          <div>
            <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
              <Link className="text-[#6bbf4f] hover:underline">
                All solutions
              </Link>
              <Link className="hover:underline">
                Continuous Identity Security
              </Link>
              <Link className="hover:underline">Access Management</Link>
              <Link className="hover:underline">Zero Trust Security</Link>
              <Link className="hover:underline">Passwordless</Link>
              <Link className="hover:underline">Phishing Prevention</Link>
              <Link className="hover:underline">Risk-Based Authentication</Link>
            </ul>
          </div>
        </div>

        <div className="hidden lg:block w-[18%]">
          <p className="text-base text-white mb-4">Editors & Partners</p>

          <div>
            <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
              <Link className="text-[#6bbf4f] hover:underline">Editions</Link>
              <Link className="hover:underline">Duo Editions</Link>
              <Link className="hover:underline">Duo Free</Link>
              <Link className="hover:underline">Duo Essentials</Link>
              <Link className="hover:underline">Duo Advantage</Link>
              <Link className="hover:underline">Duo Premier</Link>
              <Link className="hover:underline">Ready to Buy Now?</Link>
              <Link className="text-[#6bbf4f] hover:underline">
                Partner with Duo
              </Link>
              <Link className="hover:underline">Partnership Program</Link>
              <Link className="hover:underline">
                Technology Partner Program
              </Link>
              <Link className="hover:underline">Managed Service Provider</Link>
              <Link className="hover:underline">
                Security Solutions Provider
              </Link>
              <Link className="hover:underline">Partnership Program</Link>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block w-[18%]">
          <p className="text-base text-white mb-4">Resources & Docs</p>
          <div>
            <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
              <Link className="text-[#6bbf4f] hover:underline">Resources</Link>
              <Link className="hover:underline">About Duo</Link>
              <Link className="hover:underline">Careers</Link>
              <Link className="hover:underline">News & Press</Link>
              <Link className="hover:underline">Events & Webinars</Link>
              <Link className="hover:underline">Ebooks</Link>
              <Link className="hover:underline">Duo Videos</Link>
              <Link className="hover:underline">Interactive Demos</Link>
              <Link className="hover:underline">InfoSec Glossary</Link>
              <Link className="text-[#6bbf4f] hover:underline">Docs</Link>
              <Link className="hover:underline">Getting Started with Duo</Link>
              <Link className="hover:underline">Free Trial Onboarding</Link>
              <Link className="hover:underline">Guide</Link>
              <Link className="hover:underline">Admin Overview</Link>
              <Link className="hover:underline">End User Guide</Link>
              <Link className="hover:underline">Docs for Duo Editions</Link>
              <Link className="hover:underline">Docs for Duo Integrations</Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 mx-0 lg:mx-24 lg:justify-items-center space-y-6 lg:place-items-center text-sm py-8 lg:rounded-3xl px-4 lg:px-12 bg-[#22272b] text-white">
        <p className="font-semibold col-span-2 lg:col-span-1 hover:underline cursor-pointer">
          Support
        </p>
        <div>
          <p className="text-[#6bbf4f] cursor-pointer mb-2">Duo Support</p>
          <p className="mb-2 hover:underline cursor-pointer">Duo Support</p>
          <p className="hover:underline cursor-pointer">System Status</p>
        </div>

        <div>
          <p className="text-[#6bbf4f] cursor-pointer mb-2">
            Support For End Users
          </p>
          <ul className="grid grid-cols-1 gap-2 space-x-2">
            <p className="hover:underline cursor-pointer">End User Guides</p>
            <p className="hover:underline cursor-pointer">Duo Mobile FAQ</p>
          </ul>
        </div>

        <ul className="grid grid-cols-1 gap-2 space-x-2 pt-8">
          <p className="hover:underline cursor-pointer">Get Duo Mobile iOS</p>
          <p className="hover:underline cursor-pointer">
            Get Duo Mobile Android
          </p>
        </ul>

        <div className="mt-[-18px]">
          <p className="text-[#6bbf4f] cursor-pointer pb-2">
            Support for Admins
          </p>
          <ul className="flex flex-col gap-2">
            <p className="hover:underline cursor-pointer">Knowledge Base</p>
            <p className="hover:underline cursor-pointer">Community Forum</p>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap flex-row gap-6 space-y-12 pt-10 lg:hidden px-4 lg:px-24">
        <div className=" w-[45%]">
          <p className="text-base text-white mb-4 font-semibold">Products</p>
          <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
            <Link className="text-[#6bbf4f] cursor-pointer">
              Key capabiltiy
            </Link>
            <Link className="cursor-pointer hover:underline">Duo Passport</Link>
            <Link className="cursor-pointer hover:underline">
              Cisco Identity Intelligence
            </Link>
            <Link className="hover:underline">Mobile app</Link>
            <Link className="hover:underline">MFA</Link>
            <Link className="hover:underline">What is MFA</Link>
            <Link className="hover:underline">2FA</Link>
            <Link className="hover:underline">Remote Access</Link>
            <Link className="hover:underline">Device Trust</Link>
            <Link className="hover:underline">Single Sign-On</Link>
            <Link className="hover:underline">Passwordless</Link>
            <Link className="hover:underline">Zero Trust</Link>
            <Link className="hover:underline">Adaptive Access Policies</Link>
            <Link className="text-[#6bbf4f] cursor-pointer hover:underline">
              Duo use cases
            </Link>
            <Link className="hover:underline">State & Local Gorvenment</Link>
            <Link className="hover:underline">Federal Governments</Link>
            <Link className="hover:underline">Enterprise</Link>
            <Link className="hover:underline">Small to Medium Bysiness</Link>
          </ul>
        </div>

        <div className=" w-[45%]">
          <p className="text-base text-white mb-4">Solutions</p>
          <div>
            <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
              <Link className="text-[#6bbf4f] hover:underline">
                All solutions
              </Link>
              <Link className="hover:underline">
                Continuous Identity Security
              </Link>
              <Link className="hover:underline">Access Management</Link>
              <Link className="hover:underline">Zero Trust Security</Link>
              <Link className="hover:underline">Passwordless</Link>
              <Link className="hover:underline">Phishing Prevention</Link>
              <Link className="hover:underline">Risk-Based Authentication</Link>
            </ul>
          </div>
        </div>

        <div className=" w-[45%]">
          <p className="text-base text-white mb-4">Editors & Partners</p>

          <div>
            <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
              <Link className="text-[#6bbf4f] hover:underline">Editions</Link>
              <Link className="hover:underline">Duo Editions</Link>
              <Link className="hover:underline">Duo Free</Link>
              <Link className="hover:underline">Duo Essentials</Link>
              <Link className="hover:underline">Duo Advantage</Link>
              <Link className="hover:underline">Duo Premier</Link>
              <Link className="hover:underline">Ready to Buy Now?</Link>
              <Link className="text-[#6bbf4f] hover:underline">
                Partner with Duo
              </Link>
              <Link className="hover:underline">Partnership Program</Link>
              <Link className="hover:underline">
                Technology Partner Program
              </Link>
              <Link className="hover:underline">Managed Service Provider</Link>
              <Link className="hover:underline">
                Security Solutions Provider
              </Link>
              <Link className="hover:underline">Partnership Program</Link>
            </ul>
          </div>
        </div>
        <div className=" w-[45%]">
          <p className="text-base text-white mb-4">Resources & Docs</p>
          <div>
            <ul className="text-sm text-[#f4f4f4] flex flex-col gap-2">
              <Link className="text-[#6bbf4f] hover:underline">Resources</Link>
              <Link className="hover:underline">About Duo</Link>
              <Link className="hover:underline">Careers</Link>
              <Link className="hover:underline">News & Press</Link>
              <Link className="hover:underline">Events & Webinars</Link>
              <Link className="hover:underline">Ebooks</Link>
              <Link className="hover:underline">Duo Videos</Link>
              <Link className="hover:underline">Interactive Demos</Link>
              <Link className="hover:underline">InfoSec Glossary</Link>
              <Link className="text-[#6bbf4f] hover:underline">Docs</Link>
              <Link className="hover:underline">Getting Started with Duo</Link>
              <Link className="hover:underline">Free Trial Onboarding</Link>
              <Link className="hover:underline">Guide</Link>
              <Link className="hover:underline">Admin Overview</Link>
              <Link className="hover:underline">End User Guide</Link>
              <Link className="hover:underline">Docs for Duo Editions</Link>
              <Link className="hover:underline">Docs for Duo Integrations</Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-6 px-4 lg:px-24">
        <p className="text-sm font-semibold"> &copy;2025 Duo</p>
        <div className="flex flex-col sm:flex-row gap-1 sm:items-center text-sm">
          <p>Terms of Service</p>
          <p className="hidden sm:block">|</p>
          <p>Privacy Statement</p>
          <p className="hidden sm:block">|</p>
          <p>Duo Privacy Data Sheet</p>
          <p className="hidden sm:block">|</p>
          <p>Copyright Dispute Policy</p>
          <p className="hidden sm:block">|</p>
          <p>Service Level Agreement</p>
          <p className="hidden sm:block">|</p>
          <p>Security Response Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
