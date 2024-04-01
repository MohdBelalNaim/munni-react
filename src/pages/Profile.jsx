import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "../components/NavigationBar";
import EditProfile from "../components/EditProfile";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/Loader";

function Profile() {
  const [editProfile, seteditProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getUserData() {
      setLoading(true);
      const q = query(
        collection(db, "users"),
        where("email", "==", localStorage.getItem("user"))
      );
      const user = await getDocs(q);
      setUserData(user.docs[0].data());
      setLoading(false);
    }
    getUserData();
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Navigation></Navigation>
      <div className="mt-5 mb-10 mx-36">
        <div className="flex justify-center w-full xl:flex-row flex-col px-2">
          <div className="container w-full relative rounded-xl border border-gray-200 bg-white py-6 px-4">
            <div className="flex justify-end lg:mr-8 absolute right-0">
              <button
                className="bg-secondary text-white px-8 py-2 mx-4 rounded-full max-sm:hidden"
                onClick={() => seteditProfile(!editProfile)}
              >
                EDIT
              </button>
            </div>

            <div className="flex lg:gap-8 gap-5 mb-4">
              <img
                src={
                  userData?.photo ||
                  "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                }
                alt=""
                width="100px"
                height="100px"
                className="rounded-full"
              />

              <div className="pt-8">
                <p className="xl:text-md text-gray-500 text-sm">Name</p>
                <p className="xl:text-lg">{userData?.name}</p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-14 justify-between pr-14">
              <div>
                <div className="mb-4">
                  <p className="xl:text-md text-gray-500 text-sm">Email</p>
                  <p className="xl:text-lg">{userData?.email}</p>
                </div>
                <div className="mb-4">
                  <p className="xl:text-md text-gray-500 text-sm">
                    Phone Number
                  </p>
                  <p className="xl:text-lg">{userData?.phone || "Not added"}</p>
                </div>
                <div className="mb-4">
                  <p className="xl:text-md text-gray-500 text-sm">PAN Number</p>
                  <p className="xl:text-lg">{userData?.pan || "Not added"}</p>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <p className="xl:text-md text-gray-500 text-sm">
                    Date of Birth
                  </p>
                  <p className="xl:text-lg">{userData?.dob || "Not added"}</p>
                </div>
                <div className="mb-4">
                  <p className="xl:text-md text-gray-500 text-sm">
                    City of Residence
                  </p>
                  <p className="xl:text-lg">
                    {userData?.address || "Not added"}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="xl:text-md text-gray-500 text-sm">
                    Aadhar Number
                  </p>
                  <p className="xl:text-lg">
                    {userData?.aadhar || "Not added"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:hidden md:hidden">
              <button
                className="bg-secondary text-sm text-white px-8 py-2 rounded-full"
                onClick={() => seteditProfile(!editProfile)}
              >
                EDIT
              </button>
            </div>
          </div>

          {/* <div className="lg:mx-36 xl:ml-4 relative rounded-xl border border-gray-200 bg-white lg:px-14 xl:px-4 my-8 px-4 py-2 mx-4 xl:w-1/3 xl:h-[375px]">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 lg:mt-6 mt-2">
              <div
                style={{ width: "45%" }}
                className="bg-blue-600 h-2.5 rounded-full"
              ></div>
            </div>
            <p className="font-bold pb-2 border-b border-gray-400 text-sm">
              YOUR PROFILE STRENGTH: STRONG
            </p>
            <div>
              <div className="pt-4 pb-1 flex">
                <p className="w-3/4 text-sm">Verify phone number</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Add city location</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Verify Email ID</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Link Facebook Profile</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Link LinkedIn Profile</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Add profile pic</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Add PAN card number</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Add Aadhar card number</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
              <div className="py-1 flex">
                <p className="w-3/4 text-sm">Add date of birth</p>
                <FaCheck size={15} className="w-1/4" />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {editProfile == true ? <EditProfile /> : null}
    </>
  );
}
export default Profile;
