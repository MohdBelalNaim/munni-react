import React from "react";
import { PiHandHeart } from "react-icons/pi";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, showAuth, showMenu } from "../redux/toggleSlice";

import logo from "../assets/logo.svg";
import {
  BsHeart,
  BsHouse,
  BsInfoCircle,
  BsPerson,
  BsPhone,
  BsPower,
  BsX,
} from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";

function Navigation() {
  const auth = useSelector((state) => state.toggleSlice.auth);
  const loggedIn = useSelector((state) => state.toggleSlice.loggedIn);
  const menu = useSelector((state) => state.toggleSlice.menu);

  function userlogout() {
    dispatch(logout());
    localStorage.clear();
  }

  const dispatch = useDispatch();

  return (
    <>
      {menu && <MobileMenu />}

      <div className="flex justify-between items-center border-b lg:px-36 px-4 py-8 max-sm:py-4">
        <div className="flex items-end gap-3 ">
          <img src={logo} alt="Ni load hua" className="w-[8%]" />
          <div className="text-sm max-sm:text-xs">Munni Welfare Foundation</div>
        </div>
        <div className="max-sm:hidden flex lg:gap-8 gap-4 text-sm items-center">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          {/* <div>Get Involved</div> */}

          {!loggedIn && (
            <div
              onClick={() => dispatch(showAuth())}
              style={{ cursor: "pointer" }}
            >
              Login
            </div>
          )}

          {loggedIn && (
            <>
              <div>
                <Link to="/profile">My Profile</Link>
              </div>
              <div onClick={userlogout} className="cursor-pointer">
                logout
              </div>
            </>
          )}

          <Link to="/campaign">
            <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
              Donate <PiHandHeart className="text-xl" />
            </div>
          </Link>
        </div>
        <FaBars
          onClick={() => dispatch(showMenu())}
          size={22}
          className="hidden max-sm:block"
        />
      </div>

      {auth && <SignIn />}
    </>
  );
}
export default Navigation;
