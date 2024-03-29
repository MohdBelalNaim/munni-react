import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 py-12 px-12 lg:px-36 max-sm:px-4  max-sm:py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2">
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-4 mt-[-0.5rem]">
              Fill in your email to subscribe to our newsletter
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Email"
              className="bg-[#EEEBE1] text-black px-4 py-2 rounded-l focus:outline-none w-3/4 lg:w-2/4"
            />
            <button className="bg-yellow-300 text-black px-4 py-2 rounded-r text-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end pt-5 lg:py-0">
          <div className="mr-8">
            <h6 className="mb-4">About Us</h6>
            <Link href="/campaign">
              <h4 className="mb-4">Campaigns</h4>
            </Link>
            <Link href="/contact">
              <h4 className="mb-4">Contact Us</h4>
            </Link>
          </div>
          <div className="flex flex-col items-end lg:items-start ">
            <FaTwitterSquare size={24} className="mb-4 lg:mr-4" />
            <FaFacebookSquare size={24} className="mb-4 lg:mr-4" />
            <FaLinkedin size={24} className="mb-4 lg:mr-4" />
          </div>
        </div>
      </div>
      <hr className="my-6 bg-yellow-300 h-[0.15rem]" />
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2">
          <p className="text-xs flex items-center">
            <span className="text-xl mr-1">&copy;</span> Copyright
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-end">
          <p className="mr-4 text-sm">Privacy Policy</p>
          <p className="text-sm">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
