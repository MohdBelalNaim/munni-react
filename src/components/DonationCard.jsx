import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { SpinnerCircular } from "spinners-react";

function DonationCard({ id, campaign, controller, donation }) {
  const { register, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState(false);

  async function updateCampaign(data) {
    setLoading(true);
    try {
      const campaignRef = doc(database, "campaigns", id);
      await updateDoc(campaignRef, data);
      setLoading(false);
      navigate("/campaigns"); 
    } catch (error) {
      console.error("Error updating campaign document: ", error);
      setLoading(false);
    }
  }

  async function getCurrentRaised() {
    const docRef = doc(db, "campaigns", id);
    const data = await getDoc(docRef);
    return data.data().raisedAmount;
  }

  const donate = async (data) => {
    setLoading(true); // Set loading state to true when donation process starts
    data.campaign = id;
    const ref = collection(db, "donations");
    const newdoc = await addDoc(ref, data, id);
    await updateDoc(doc(db, "campaigns", id), {
      raisedAmount: +data.amount + +(await getCurrentRaised()),
    });
    campaign();
    donation();
    controller(false);
    setLoading(false); // Set loading state to false when donation process finishes
  };

  return (
    <>
      <div className="fixed inset-0 glass z-50 flex justify-center items-center">
        <div className="bg-white relative rounded-md w-[90%] md:w-[440px]">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => controller(false)}
            className="absolute cursor-pointer text-black font-bold px-4 pt-4"
          />
          <div className="md:text-lg text-sm font-medium text-center p-3 pt-4 border-b">
            Choose a donation amount
          </div>
          <div className="p-4 md:p-8 space-y-5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <div className="flex flex-wrap justify-center">
                <input
                  onChange={() => setValue("amount", "199")}
                  type="radio"
                  name="amount"
                  className="checked:bg-secondary checked:text-white appearance-none before:content-['₹199'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full mb-2 md:mb-0 mr-2"
                />
                <input
                  onChange={() => setValue("amount", "299")}
                  type="radio"
                  name="amount"
                  className="checked:bg-secondary checked:text-white appearance-none before:content-['₹299'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full mb-2 md:mb-0"
                />
              </div>
              <div className="flex flex-wrap justify-center">
                <input
                  onChange={() => setValue("amount", "999")}
                  type="radio"
                  name="amount"
                  className="checked:bg-secondary checked:text-white appearance-none before:content-['₹999'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full mb-2 md:mb-0 mr-2"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit(donate)}>
              <input
                type="text"
                className="w-full border-b py-3 mb-1 text-sm"
                placeholder="Full Name"
                {...register("name")}
              />

              <input
                type="number"
                className="w-full border-b py-3 mb-1 text-sm"
                placeholder="Amount"
                {...register("amount")}
              />

              <input
                type="email"
                className="w-full border-b py-3 text-sm"
                placeholder="Email Address"
                {...register("email")}
              />
              <input
                type="tel"
                className="w-full border-b py-3 text-sm"
                placeholder="Phone number"
                {...register("phone", { minLength: 10 })}
              />
              <input
                type="text"
                className="w-full border-b py-3 text-sm"
                placeholder="Address"
                {...register("address")}
              />
              <textarea
                className="w-full border-b py-3 text-sm"
                placeholder="Add a note (optional)"
                {...register("note")}
                cols="30"
                rows="4"
              ></textarea>
              <div className="flex justify-center mt-4">
                {loading ? ( 
                  <button disabled className="disabled:bg-gray-600 w-max bg-black text-white flex items-center gap-2 px-3 py-2 rounded-full">
                  Proceeding Payment
                  <SpinnerCircular color="white" secondaryColor="gray" size={20} />
                </button>
                ) : ( 
                  <button type="submit" className="text-sm px-4 py-2 bg-secondary text-white rounded-full">
                    Proceed to Pay
                  </button>
                )}
              </div>
              
            </form>
            <div className="text-xs mt-4">
              By continuing, You agree to terms and conditions of Munni Welfare
              Foundation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonationCard;
