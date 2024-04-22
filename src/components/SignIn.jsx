import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import Login from "./Login";
import Signup from "./Signup";
import { ToastContainer } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { hideAuth } from "../redux/toggleSlice";

function SignIn() {
  const [isVisible, setIsVisible] = useState(true);
  const [logged, setLogged] = useState(1);
  
  const closeSignIn = () => {
    setIsVisible(false);
  };

  return (
    <>{isVisible && (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
        <div className="animate__animated animate__bounceIn w-[500px]">
          <div className="mx-auto border border-gray-300 pt-3 pb-5 md:px-8 px-4 rounded-xl bg-white text-black">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setIsVisible(false)}
              className="cursor-pointer text-black font-bold pb-3A"
            />
            <h3 className="pb-3 border-b border-gray-300 flex justify-between">
              <span
                onClick={() => setLogged(1)}
                className="cursor-pointer text-black font-bold pl-6 md:pl-10 md:text-base text-sm"
              >
                Login
              </span>
              <span
                onClick={() => setLogged(2)}
                className="cursor-pointer text-black font-bold pr-6 md:pr-10 md:text-base text-sm"
              >
                Signup
              </span>
            </h3>
            {logged === 1 ? (
              <>
                <Login/>
                <ToastContainer />
                <p className="py-3 text-center md:text-base text-sm">
                  Don&apos;t have an account?{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => setLogged(2)}
                  >
                    Signup
                  </span>
                </p>
              </>
            ) : logged === 2 ? (
              <>
                <Signup/>
                <ToastContainer />
                <p className="md:py-3 py-2 text-center md:text-base text-sm">
                  Already have an account?{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => setLogged(1)}
                  >
                    Login
                  </span>
                </p>
                <p className="text-center  md:text-sm text-xs">
                  By continuing, you agree with GiveUmma&apos;s Terms of Use and
                  Privacy Policy
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>)}
    </>
  );
}
export default SignIn;
