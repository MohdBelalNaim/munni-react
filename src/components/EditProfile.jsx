import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
import { SpinnerCircular } from "spinners-react";

function EditProfile({ docId, userData }) {
  const [isVisible, setIsVisible] = useState(true);
  const [photo, setPhoto] = useState("");
  // const [user, setUser] = useState({});
  const { register, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState(false);

  // async function getUserData() {
  //   const user = query(
  //     collection(db, "users"),
  //     where("email", "==", localStorage.getItem("user"))
  //   );
  //   const data = await getDocs(user);
  //   setUser(data.docs[0].data());
  //   setValue("name", data.docs[0].data()?.name);
  //   setValue("dob", data.docs[0].data()?.dob);
  //   setValue("pan", data.docs[0].data()?.pan);
  //   setValue("aadhar", data.docs[0].data()?.aadhar);
  //   setValue("address", data.docs[0].data()?.address);
  // }
  // useEffect(() => {
  //   getUserData();
  // }, []);

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name || "Not Added");
      setValue("dob", userData.dob || "Not Added");
      setValue("pan", userData.pan || "Not Added");
      setValue("aadhar", userData.aadhar || "Not Added");
      setValue("address", userData.address || "Not Added");
    }
  }, [userData, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "users", docId), data);
      setLoading(false);
      window.location.reload()
    } catch (error) {
      console.error("Error updating document: ", error);
      setLoading(false);
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-8 py-4 space-y-4">
                <div className="flex items-center justify-center">
                  <div
                    className="rounded-full overflow-hidden"
                    style={{ width: "100px", height: "100px" }}
                  >
                    {photo ? (
                      <img
                        src={URL.createObjectURL(photo)}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    ) : (
                      <img
                        src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                </div>

                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="w-full border p-3 text-sm"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
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
                  {loading ? (
                  <button
                    disabled
                    type="submit"
                    className="bg-blue-500 flex justify-center text-sm px-4 py-2 text-white rounded-full"
                  >
                    Updating
                    <SpinnerCircular
                      color="white"
                      secondaryColor="gray"
                      size={20}
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="text-sm px-4 py-2 bg-secondary text-white rounded-full"
                  >
                    Update Profile
                  </button>
                )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default EditProfile;
