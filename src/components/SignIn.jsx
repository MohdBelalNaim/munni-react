import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import Login from "./Login";
import Signup from "./Signup";
import { useDispatch } from "react-redux";
import { hideAuth } from "../redux/toggleSlice";

function SignIn() {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(1);
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
        <div className="animate__animated animate__bounceIn w-[500px]">
          <div className="mx-auto border border-gray-300 pt-3 pb-5 px-8 rounded-xl bg-white text-black">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => dispatch(hideAuth())}
              className="cursor-pointer text-black font-bold pb-3A"
            />
            <h3 className="pb-3 border-b border-gray-300 flex justify-between">
              <span
                onClick={() => setLoggedIn(1)}
                className="cursor-pointer text-black font-bold pl-10"
              >
                Login
              </span>
              <span
                onClick={() => setLoggedIn(2)}
                className="cursor-pointer text-black font-bold pr-10"
              >
                Signup
              </span>
            </h3>
            {loggedIn === 1 ? (
              <>
                <Login />
                <p className="py-3 text-center text-base">
                  Don&apos;t have an account?{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => setLoggedIn(2)}
                  >
                    Signup
                  </span>
                </p>
              </>
            ) : loggedIn === 2 ? (
              <>
                <Signup />
                <p className="py-3 text-center text-base">
                  Already have an account?{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => setLoggedIn(1)}
                  >
                    Login
                  </span>
                </p>
                <p className="text-center text-sm">
                  By continuing, you agree with GiveUmma&apos;s Terms of Use and
                  Privacy Policy
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
