import React, { useState } from "react";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase";
import Google from "./Google";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { SpinnerCircular } from "spinners-react";
import { useDispatch } from "react-redux"; 
import { login } from "../redux/toggleSlice";

const auth = getAuth(app);
const firestore = getFirestore(app);

function Signup(props) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [panNo, setPanNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const dispatch = useDispatch(); 

  const createUser = async () => {
    setLoading(true);
    try {
      if (!email || !password || !fname || !lname) {
        toast.error("Please fill all required fields.");
        setLoading(false); 
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${fname} ${lname}`,
      });

      const userData = {
        email: email,
        fullName: `${fname} ${lname}`,
        dob: dob,
        phone: phone,
        address: address,
        panNo: panNo,
        aadharNo: aadharNo,
      };

      // Add user data to Firestore
      await addDoc(collection(firestore, "users"), userData);
      console.log("User data saved to Firestore:", userData);
      dispatch(login());
      props.closeSignIn();
      setLoading(false);
    } catch (error) {
      toast.error("Error creating user: " + error.message); 
      console.error("Error creating user:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="lg:text-3xl text-2xl  font-bold py-5">Signup</h1>
      <Google />

      <div>
        <input
          type="text"
          placeholder="First Name"
          className="bg-gray-100 border-gray-300 w-full py-3 md:px-4 px-2 mt-2 shadow-inner rounded-lg text-sm md:text-base"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="bg-gray-100 border-gray-300 w-full py-3 md:px-4 px-2 mt-3 shadow-inner rounded-lg text-sm md:text-base"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="bg-gray-100 border-gray-300 w-full py-3 md:px-4 px-2 mt-3 shadow-inner rounded-lg text-sm md:text-base"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="mb-3 bg-gray-100 border-gray-300 w-full py-3 md:px-4 px-2 mt-3 shadow-inner rounded-lg text-sm md:text-base"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <div className="text-xs">
        <input type="checkbox" id="termsCheckbox" />
        <label htmlFor="termsCheckbox">
          <span> </span>I'd like to receive awesome emails and updates from
          GiveUmma
        </label>
      </div>
      {/* <button
        className="w-full bg-black text-white border border-black rounded-lg p-2 md:mt-5 mt-3"
        onClick={createUser}
      >
        Sign Up
      </button> */}
      {loading ? (
        <button
          disabled
          type="submit"
          className="w-full bg-gray-800 text-white border border-black rounded-lg p-2 md:mt-5 mt-3 flex justify-center"
        >
          Signing Up
          <SpinnerCircular color="white" secondaryColor="gray" size={20} />
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-black text-white border border-black rounded-lg p-2 md:mt-5 mt-3"
          onClick={createUser}
        >
          Sign Up
        </button>
      )}
    </>
  );
}
export default Signup;
