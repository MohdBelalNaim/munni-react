import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";

function EditProfile() {
  const [isVisible, setIsVisible] = useState(true);
  const [photo, setPhoto] = useState("");
  const [user, setUser] = useState({});
  const { register, handleSubmit, setValue } = useForm();

  async function getUserData() {
    const user = query(
      collection(db, "users"),
      where("email", "==", localStorage.getItem("user"))
    );
    const data = await getDocs(user);
    setUser(data.docs[0].data());
    setValue("name", data.docs[0].data()?.name);
    setValue("dob", data.docs[0].data()?.dob);
    setValue("pan", data.docs[0].data()?.pan);
    setValue("aadhar", data.docs[0].data()?.aadhar);
    setValue("address", data.docs[0].data()?.address);
  }
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="bg-white relative rounded-md w-[min(440px,96%)]">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setIsVisible(false)}
              className="absolute cursor-pointer text-black font-bold px-4 pt-4"
            />
            <div className="text-lg font-medium text-center p-3 border-b">
              Edit Your Profile
            </div>

            <div className="px-8 py-4 space-y-4">
              <div className="flex items-center justify-center">
                <img
                  src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt=""
                  width="100px"
                  height="100px"
                  className="rounded-full"
                />
              </div>

              <input
                type="file"
                name="photo"
                className="w-full border p-3 text-sm"
                onChange={(e) => setPhoto(e.target.files[0])}
              ></input>
              <input
                type="text"
                className="w-full border-b p-3 text-sm"
                placeholder="Name"
                {...register("name")}
              />

              <input
                type="date"
                className="w-full border-b p-3 text-sm"
                placeholder="Date of Birth"
                {...register("dob")}
              />
              <input
                type="tel"
                className="w-full border-b p-3 text-sm"
                placeholder="PAN Number"
                {...register("pan")}
              />
              <input
                type="tel"
                className="w-full border-b p-3 text-sm"
                placeholder="Aadhar Number"
                {...register("aadhar")}
              />
              <input
                type="tel"
                className="w-full border-b p-3 text-sm"
                placeholder="Address"
                {...register("address")}
              />
              <div className="flex justify-center mt-4">
                <button className="text-sm px-4 py-2 bg-secondary text-white rounded-full">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default EditProfile;
