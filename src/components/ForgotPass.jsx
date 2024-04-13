import React, { useState } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleVerification = async () => {
    const auth = getAuth();
    try {
      await sendEmailVerification(auth.currentUser);
      alert("Email verification sent!");
    } catch (error) {
      alert("Error sending email verification:");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerification();
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="mx-auto border border-gray-300 pt-3 pb-5 px-8 rounded-xl bg-white text-black">
            <div>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setIsVisible(false)}
                className="absolute cursor-pointer text-black font-bold pt-4 pb-3A"
              />
              <div className="text-lg font-medium text-center p-3 border-b">
                Forgot Password
              </div>
            </div>
            <div>
              <p className="mt-8">
                Enter your registered email address to receive the verification
                code
              </p>
              <form onSubmit={handleSubmit}>
                <div  className="h-[350px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-200 border-gray-300 mt-4 w-full py-3 px-4 shadow-inner rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="">
                  <button
                    type="submit"
                    className=" bg-secondary text-white float-end py-3 px-6 rounded-3xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPass;
