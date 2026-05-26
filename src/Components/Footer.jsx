import React from "react";
import YT from "../assets/icon-youtube.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";
import Facebook from "../assets/icon-facebook.svg";
import Logo from "../assets/logo.svg";

const socialIcons = [Facebook, YT, Twitter, Pinterest, Instagram];

const footerLinks = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <footer className="bg-(--blue-950) text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-12 grid gap-10 md:grid-cols-3 xl:gap-12 items-start">
        <div className="flex flex-col items-center md:items-center xl:items-start gap-6 ">
          <div className="flex flex-col gap-6">
            <img
              className="filter brightness-0 invert"
              src={Logo}
              alt="Easybank Logo"
            />

            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="Social icon"
                  className="cursor-pointer hover:opacity-70 transition"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-lg text-center">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="hover:text-green-400 transition">
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-6 items-center md:items-center text-center md:text-right">
          <button className=" bg-linear-to-r from-[hsl(136,64%,51%)] to-[hsl(192,69%,51%)] text-white py-3 px-8 rounded-full text-sm font-medium shadow-md hover:opacity-70 transition-opacity duration-200">
            Request invite
          </button>

          <p className="text-sm text-gray-400">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
