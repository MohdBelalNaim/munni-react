import React from "react";
import Google from "./Google";
function Signup(){
    return(
    <>
    <h1 className="text-3xl font-bold py-5">Signup</h1>
    <Google />
    <p className="p-3 text-center">or</p>
    <div>
        <input type="text" placeholder="First Name" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg" />
    </div>
    <div>
        <input type="text" placeholder="Last Name" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg" />
    </div>
    <div>
        <input type="email" placeholder="Email Address" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg" />
    </div>
    <div>
        <input type="password" placeholder="Password" className="mb-3 bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg" />
    </div>
    <div className="text-xs">
        <input type="checkbox" id="termsCheckbox" />
        <label htmlFor="termsCheckbox"><span> </span>I&apos;d like to receive awesome emails and updates from GiveUmma</label>
    </div>
    <button className="w-full bg-black text-white border border-black rounded-lg p-2 mt-5">Sign Up</button>
    
    </>
    );
}
export default Signup;