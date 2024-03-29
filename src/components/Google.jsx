import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { createUser } from "../utils/createUser";
import { useDispatch } from "react-redux";
import { hideAuth, login } from "../redux/toggleSlice";

function Google() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(async (value) => {
      await createUser(value.user);
      localStorage.setItem("user", value.user.email);
      dispatch(hideAuth());
      dispatch(login());
    });
  };

  return (
    <button
      onClick={signUpWithGoogle}
      className="w-full bg-white text-black border border-black rounded p-2 font-bold"
    >
      Continue with
      <span className="text-blue-500"> G</span>
      <span className="text-red-500">o</span>
      <span className="text-orange-500">o</span>
      <span className="text-blue-500">g</span>
      <span className="text-green-500">l</span>
      <span className="text-red-500">e</span>
    </button>
  );
}
export default Google;
