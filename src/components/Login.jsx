import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import Google from "./Google";
import ForgotPass from "./ForgotPass";
import { SpinnerCircular } from "spinners-react";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { useDispatch } from "react-redux"; 
import { login } from "../redux/toggleSlice";
import { hideAuth } from "../redux/toggleSlice";

const auth = getAuth(app);

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [forgotpass, setforgotpass] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const logIn = () => {
    setLoading(true);
    if (!email || !password) {
      toast.error("Please fill all required fields.");
      setLoading(false); 
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        localStorage.setItem("user", email);
        dispatch(login());
        alert("Log In Successful");
        dispatch(hideAuth());
        setLoading(false);
      })
      .catch((error) => {
        if(error.message.includes('auth/invalid-email')){
          toast.error("Invalid email address");
        }
        else{
          toast.error("Invalid Credentials")
        }
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="lg:text-3xl text-2xl font-bold py-4">Login</h1>
      <Google></Google>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="bg-gray-100 border-gray-300 w-full py-3 mt-2 md:px-4 px-2 shadow-inner rounded-lg text-sm md:text-base"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-100 border-gray-300 w-full py-3 md:px-4 px-2 mt-3 shadow-inner rounded-lg text-sm md:text-base"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
      </div>
      <p
        className="md:py-5 py-3 font-bold md:text-base text-sm cursor-pointer"
        onClick={() => setforgotpass(!forgotpass)}
      >
        Forgot Password?
      </p>
      {/* <button
        className="w-full bg-black text-white border border-black rounded-lg p-2"
        onClick={logIn}
      >
        Log In
      </button> */}
      {loading ? (
        <button
          disabled
          type="submit"
          className="w-full bg-gray-800 text-white border border-black rounded-lg p-2 md:mt-5 mt-3 flex justify-center"
        >
          Logging In
          <SpinnerCircular color="white" secondaryColor="gray" size={20} />
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-black text-white border border-black rounded-lg p-2 md:mt-5 mt-3"
          onClick={logIn}
        >
          Log In
        </button>
      )}

      {forgotpass == true ? <ForgotPass /> : null}
    </>
  );
}
export default Login;
