import React from "react";
import { PiHandHeart } from "react-icons/pi";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Navigation from "../components/NavigationBar";
const Contact = () => {
  return (
    <>
      <Navigation />

      <section>
        <div className="lg:px-36 lg:py-10 bg-secondary h-[400px]">
          <div className="flex justify-between">
            <div className="max-w-2xl">
              <h1 className="pt-20 pb-8 font-bold text-white text-4xl">
                Contact Us
              </h1>
              <p className="text-xl text-white">
                We are here to help you and answer any questions you may have.
              </p>
              <p className="text-xl text-white">Here is how to reach us!</p>
            </div>
            <div className="max-w-xs">
              <img
                src="https://s3.amazonaws.com/i.snag.gy/m4ouI5.jpg"
                alt="Image Description"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:px-36">
          <div className="py-8 text-2xl text-blue-900 flex items-center">
            <FiMapPin className="text-blue-900 text-3xl ml-20" />
            <p className="mx-20">INDIA</p>
          </div>
          <hr className="bg-blue-900 h-[0.15rem] w-96" />
          <p className="my-5">
            Milaap Social Ventures India Pvt. Ltd. Nextcoworks JP Nagar -
            Coworking Space JP Nagar Alankar Plaza, Bk circle, Nayak Layout, 8th
            Phase, J. P. Nagar, Bangalore, Karnataka, India 560078
          </p>
          <p className="mb-5">
            {" "}
            <FiMail className="inline-block mr-2" /> feedback@milaap.org
          </p>
          <p className="mb-5">
            {" "}
            <FiPhone className="inline-block mr-2" /> 9916174848
          </p>
          <div className="my-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9679463135576!2d80.93813697514358!3d26.872759461806925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd00079a7793%3A0x86da40b44df7cc21!2sThe%20Hazelnut%20Factory%20-%20Cafe%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1709392835341!5m2!1sen!2sin"
              width="1200"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:px-36 bg-primary py-10">
          <p className="pb-8 text-2xl">Join the conversation</p>
          <p>
            Join us on Facebook, Twitter, Instagram and YouTube as we share
            uplifting stories of successful fundraisers!{" "}
          </p>
        </div>
      </section>

      <section>
        <div className="lg:px-36">
          <p className="lg:py-14 text-2xl">Let us know what you think</p>
          <div className="mb-12">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-300 py-4 mr-14 w-96"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-b border-gray-300 py-4 w-96"
            />
          </div>
          <textarea
            className="border border-gray-300 rounded-xl p-3 w-full"
            cols=""
            rows="10"
            placeholder="You can type any suggestions or queries you might have. Let us help you!"
          ></textarea>{" "}
          <br />
          <button className="bg-secondary text-white rounded-3xl my-8 px-28 py-3">
            Send
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
