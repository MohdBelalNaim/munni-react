import React from "react";
import {
  BsHeart,
  BsHouse,
  BsInfoCircle,
  BsPerson,
  BsPhone,
  BsPower,
  BsX,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu, logout, showAuth } from "../redux/toggleSlice";
import { useNavigate } from "react-router-dom";
const MobileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function getThere(path) {
    navigate(path);
    dispatch(hideMenu());
  }
  function handleLogin() {
    dispatch(showAuth());
    dispatch(hideMenu());
  }
  function userLogout() {
    dispatch(logout());
    dispatch(hideMenu());
    navigate("/");
  }
  const auth = useSelector((state) => state.toggleSlice.loggedIn);

  return (
    <section className="h-[100dvh] w-full bg-white fixed z-50 py-4 px-8">
      <BsX
        onClick={() => dispatch(hideMenu())}
        className="absolute top-3 right-3 text-3xl "
      />
      <div className="flex gap-y-7 mt-12 flex-col font-medium">
        <div
          onClick={() => getThere("/")}
          className="flex items-center gap-3 animate__animated animate__fadeinUp"
        >
          <BsHouse /> Home
        </div>
        <div
          onClick={() => getThere("/about")}
          className="flex items-center gap-3"
        >
          <BsInfoCircle /> About
        </div>
        <div
          onClick={() => getThere("/contact")}
          className="flex items-center gap-3"
        >
          <BsPhone /> Contact
        </div>
        {!auth && (
          <div onClick={handleLogin} className="flex items-center gap-3">
            <BsPerson /> Login
          </div>
        )}
        {auth && (
          <>
            <div className="flex items-center gap-3" onClick={userLogout}>
              <BsPower />
              Logout
            </div>
            <div
              onClick={() => getThere("/profile")}
              className="flex items-center gap-3"
            >
              <BsPerson />
              My Profile
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MobileMenu;
