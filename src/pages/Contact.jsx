import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Navigation from "../components/NavigationBar";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const queryRef = collection(db, "queries");
      await addDoc(queryRef, data);
      setLoading(false);
      reset(); 
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <>
      <Navigation />

      <section>
        <div className="lg:px-36 lg:py-10 bg-secondary h-[400px] max-sm:h-min max-sm:pb-4 max-sm:px-3">
          <div className="flex justify-between lg:pt-0 md:pt-8 max-sm:px-0 max-sm:flex-col">
            <div className="grid gap-y-4 px-4">
              <div className="max-sm:pt-4 pt-20 max-sm:pb-0 pb-8 font-bold text-white text-4xl max-sm:text-[18px]">
                Contact Us
              </div>
              <div className="text-xl text-white max-sm:text-xs">
                We are here to help you and answer any questions you may have.
              </div>
              <div className="text-xl text-white max-sm:text-xs">
                Here is how to reach us!
              </div>
            </div>
            <div className="max-sm:flex max-sm:justify-center max-sm:mt-5 max-w-xs mx-auto lg:mx-0">
              <img
                src="https://s3.amazonaws.com/i.snag.gy/m4ouI5.jpg"
                alt="Image Description"
                className="w-full h-auto max-sm:w-[60%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-sm:px-4 px-4">
        <div className="lg:px-36">
          <div className="py-8 max-sm:py-4 text-2xl text-blue-900 flex items-center">
            <FiMapPin className="text-blue-900 text-3xl ml-20 max-sm:ml-6 max-sm:text-sm" />
            <p className="mx-20 max-sm:mx-5 max-sm:text-lg">INDIA</p>
          </div>
          <hr className="bg-blue-900 h-[0.15rem] w-96 max-sm:w-full" />
          <p className="my-5 max-sm:text-sm">
            DHANAWAN, SARWAN BAZAR, Sharmakhas Barachatti, Gaya-824201, Bihar
          </p>
          <p className="mb-5 max-sm:text-sm">
            {" "}
            <FiMail className="inline-block mr-2" /> info@munniwelfare.org
          </p>
          <p className="mb-5 max-sm:text-sm">
            {" "}
            <FiPhone className="inline-block mr-2" /> 7739969027
          </p>
          <div className="my-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1814.95416257941!2d84.97691988860419!3d24.523254384794413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDHANAWAN%2C%20SARWAN%20BAZAR%2C%20Sharmakhas%20Barachatti%2C%20Gaya-824201%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712239450699!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[400px]"
            ></iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:px-36 bg-primary py-10 max-sm:px-4 px-4">
          <p className="pb-8 max-sm:pb-4 max-sm:text-lg text-2xl">
            Join the conversation
          </p>
          <p className="max-sm:text-sm">
            Join us on Facebook, Twitter, Instagram and YouTube as we share
            uplifting stories of successful fundraisers!{" "}
          </p>
        </div>
      </section>

      <section>
        <div className="lg:px-36 max-sm:px-4 px-4 pt-8">
          <p className="lg:py-14 text-2xl max-sm:text-xl max-sm:mt-5">
            Let us know what you think
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-12">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 py-4 max-sm:mr-0 mr-14 w-96 max-sm:w-full"
                {...register("name")}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border-b border-gray-300 py-4 w-96 max-sm:w-full"
                {...register("email")}
              />
            </div>
            <textarea
              className="border border-gray-300 rounded-xl p-3 w-full"
              cols=""
              rows="10"
              placeholder="You can type any suggestions or queries you might have. Let us help you!"
              {...register("message")}
            ></textarea>{" "}
            <br />
            <button
              className={`bg-secondary text-white rounded-3xl my-8 px-28 py-3 max-sm:w-full ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
