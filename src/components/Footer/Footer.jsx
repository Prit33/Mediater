import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const ContactUs = [
  {
    title: "Phone: +91 7994076261",
    link: "/#phone",
  },
  {
    title: "Email: official@mediater.in",
    link: "/#email",
  },
  {
    title: "Address: Karicode, Kollam",
    link: "/#map.address",
  },
];

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <img
              src="https://d1yei2z3i6k35z.cloudfront.net/5927876/65735da0d7017_Group21.png"
              alt="Company-Logo"
              className="w-20"
            />

            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/mediaterofficial/">
                <FaInstagram className="text-2xl hover:text-sky-300 duration-300" />
              </a>
              <a href="https://twitter.com/mediater_">
                <FaTwitter className="text-2xl hover:text-sky-300 duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/mediater-in/about/?viewAsMember=true">
                <FaLinkedin className="text-2xl hover:text-sky-300 duration-300" />
              </a>
              <a href="https://medium.com/@mediaterofficial">
                <FaMedium className="text-2xl hover:text-sky-300 duration-300" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-sky-300 space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact us
                </h1>
                <ul className="flex flex-col gap-3">
                  {ContactUs.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-sky-300 space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h2>Mediater © 2024</h2>
      </section>
    </div>
  );
};

export default Footer;
