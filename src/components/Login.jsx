import React from "react";
import Google from "./Google";
function Login(){
    return(
        <>
        <h1 className="text-3xl font-bold py-4">Login</h1>
        <Google />
        <p className="p-3 text-center">or</p>
        <div>
            <input type="email" placeholder="Email Address" className="bg-gray-100 border-gray-300 w-full py-3 px-4 shadow-inner rounded-lg" />
        </div>
        <div>
            <input type="password" placeholder="Password" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg" />
        </div>
        <p className="py-5 font-bold text-base">Forgot Password?</p>
        <button className="w-full bg-black text-white border border-black rounded-lg p-2">Log In</button>
        
        </>
    );
}
export default Login;