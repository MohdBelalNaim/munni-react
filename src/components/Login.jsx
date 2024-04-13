import React,{useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
import Google from "./Google";
import ForgotPass from "./ForgotPass";

const auth = getAuth(app);

function Login(){
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [forgotpass,setforgotpass] = useState(false);

    const logIn = () => {
        signInWithEmailAndPassword(auth, email,password).then((value) => alert("Log In Successful")).catch((err)=> console.log(err));
      };

    return(
        <>
        <h1 className="lg:text-3xl text-2xl font-bold py-4">Login</h1>
        <Google></Google>
        <div>
            <input type="email" placeholder="Email Address" className="bg-gray-100 border-gray-300 w-full py-3 mt-2 md:px-4 px-2 shadow-inner rounded-lg text-sm md:text-base" onChange={(e) => setemail(e.target.value)} value={email}/>
        </div>
        <div>
            <input type="password" placeholder="Password" className="bg-gray-100 border-gray-300 w-full py-3 md:px-4 px-2 mt-3 shadow-inner rounded-lg text-sm md:text-base"  onChange={(e) => setpassword(e.target.value)} value={password}/>
        </div>
        <p className="md:py-5 py-3 font-bold md:text-base text-sm cursor-pointer" onClick={() => setforgotpass(!forgotpass)}>Forgot Password?</p>
        <button className="w-full bg-black text-white border border-black rounded-lg p-2" onClick={logIn}>Log In</button>
        
        {forgotpass == true ? <ForgotPass /> : null}
        </>
    );
}
export default Login;