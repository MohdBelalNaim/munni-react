import Footer from "../components/Footer";
import DonationCard from "../components/DonationCard";
import Navigation from "../components/NavigationBar";
import React, { useEffect } from "react";
import { BsCalendar2, BsFlag, BsPerson, BsStar, BsTags } from "react-icons/bs";
import { PiChartLineUp, PiHandHeart } from "react-icons/pi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/Loader";
import { NumericFormat } from "react-number-format";
import daysBetween from "../utils/dateDifference";
import AllDonations from "../components/AllDonations";
import TopDonations from "../components/TopDonations";

const Details = () => {
  const [showDonate, setDonate] = useState(false);

  const { id } = useParams();
  const campaign = doc(db, "campaigns", id);
  const [campaignData, setCampaignData] = useState({});
  const [donations, setDonations] = useState([]);
  const [recDonations,setRecDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allDonations, setAllDonations] = useState(false);
  const [topDonations, setTopDonations] = useState(false);

  async function recentDonations() {
    const q = query(
      collection(db, "donations"),
      where("campaign", "==", id),
      orderBy("amount","desc"),
      limit(5)
    );
    const data = await getDocs(q);
    setRecDonations(data.docs);
  }

  async function getDonations() {
    const q = query(collection(db, "donations"), where("campaign", "==", id));
    const data = await getDocs(q);
    setDonations(data.docs);
  }

  async function getData() {
    setLoading(true);
    const data = await getDoc(campaign);
    setCampaignData(data.data());
    setLoading(false);
  }

  useEffect(() => {
    getData();
    getDonations();
    recentDonations();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Navigation />

      <div className="py-5 px-5 max-sm:px-4 lg:px-36 max-sm:py-6">

        <div className="max-sm:text-[20px] max-sm:leading-8 text-3xl font-medium mt-4 mb-4 max-sm:mb-0 max-sm:mt-0">
          {campaignData?.title}
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-[1.3fr,0.7fr]">
          <div>
            <img
              src={campaignData?.url}
              className="w-full max-sm:h-[200px] max-sm:rounded-sm h-[400px] mt-4 object-cover rounded-xl"
              alt=""
            />
            <div className="flex items-center gap-4 border-b border-gray-300 py-4">
              <div className="bg-gray-100 w-max p-2 rounded-full">
                <BsPerson size={22} />
              </div>
              <div className="text-sm">
                {campaignData?.benificiaryName} has started this fundraiser
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-300 py-4 text-sm">
              <div className="flex items-center gap-2">
                <BsCalendar2 />
                {daysBetween(campaignData?.endDate)} days left
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <BsTags size={18} /> {campaignData?.category || "Miscellaneous"}
              </div>
            </div>
            <div className="text-sm mt-5 leading-relaxed">
              {campaignData?.story}
            </div>
            <div className="flex gap-5 py-5 border-b border-gray-300">
              <button
                className="font-medium w-full border border-gray-300 py-2 rounded-lg shadow"
                onClick={() => setDonate(!showDonate)}
              >
                Donate
              </button>
              <button
                className="font-medium w-full border border-gray-300 py-2 rounded-lg shadow"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      url: window.location.href,
                    });
                  }
                }}
              >
                Share
              </button>
            </div>
            <div className="py-7 border-b border-gray-300">
              <div className="font-medium text-2xl">Benificiary</div>
              <div className="flex items-start gap-4 mt-5">
                <div className="bg-gray-100 w-max p-2 rounded-full">
                  <BsPerson size={22} />
                </div>
                <div className="grid gap-y-1">
                  <div className="font-medium">
                    {campaignData?.benificiaryName}
                  </div>
                  <div className="text-sm">
                    {campaignData?.benificiaryEmail}
                  </div>
                  <a
                    href={`tel:${campaignData?.benificiaryPhone}`}
                    className="font-medium text-xs text-center mt-4 border border-gray-300 py-2 rounded-lg shadow"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="py-7 border-b border-gray-300">

              <div className="font-medium text-2xl">
                Words of support ({donations?.length})
              </div>

              <div className="text-gray-500 text-sm mt-3">
                Please donate to share the words of support
              </div>

              {donations != "" ? (
                 <div className="grid gap-y-4 mt-3">
                 {recDonations.map((item, index) => {
                   return (
                     <div key={index} className="flex items-start gap-4 mt-5">
                       <div className="bg-gray-100 w-max p-2 rounded-full">
                         <PiHandHeart size={22} />
                       </div>
                       <div className="grid gap-y-1">
                         <div className="font-medium">{item.data()?.name}</div>
                         <div className="text-[14px] text-gray-500">
                           <NumericFormat
                             value={item.data()?.amount}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"₹ "}
                           />{" "}
                         </div>
                         <div className="text-sm text-gray-500 max-w-[80%] text-justify">
                           {item.data()?.note && item.data()?.note}
                         </div>
                       </div>
                     </div>
                   );
                 })}
                  <button
                    onClick={() => setAllDonations(true)}
                    className="w-full py-2 border rounded-lg text-sm"
                  >
                    Show more
              </button>
               </div>
               

              ) : (
                <div className="text-sm border rounded text-center py-14 mt-5">
                  No one has donated yet, Be the first one to make a change!
                </div>
              )}

             

            </div>
            
            <div className="flex items-center gap-4 py-5">
              <BsFlag size={24} />
              Report this fundraiser
            </div>
          </div>

          <div>
            <div className="border shadow-md sticky top-5 rounded-lg mt-4 p-4 grid gap-y-3">
              <div className="text-xl flex gap-2 items-center">
                <NumericFormat
                  value={campaignData?.raisedAmount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <span className="text-sm text-gray-500">
                  raised of{" "}
                  <NumericFormat
                    value={campaignData?.goalAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹ "}
                  />{" "}
                  target
                </span>{" "}
              </div>
              <div className="w-full rounded-full bg-gray-400 h-1 overflow-hidden">
                <div
                  className={`rounded-full bg-secondary h-1`}
                  style={{
                    width:
                      (campaignData?.raisedAmount / campaignData?.goalAmount) *
                        100 +
                      "%",
                  }}
                ></div>
              </div>
              <div className="text-sm text-gray-500">
                {donations.length} donations
              </div>
              <button
                className="w-full text-sm bg-secondary text-white py-3 rounded-md mt-4"
                onClick={() => setDonate(!showDonate)}
                style={{ cursor: "pointer" }}
              >
                Donate
              </button>
              {donations != "" && (
                <div className="mt-3 flex text-sm font-medium gap-4 items-center text-secondary">
                  <div className="bg-[#202e5223] p-2 rounded-full">
                    {" "}
                    <PiChartLineUp size={22} />
                  </div>
                  {donations?.length} people have recently donated to this
                  fundraiser
                </div>
              )}
              <div>
                {donations != "" ? (
                  donations.map((item, index) => {
                    if (index > 2) return;
                    return (
                      <div key={index} className="flex items-start gap-4 mt-3">
                        <div className="bg-gray-100 w-max p-2 rounded-full">
                          <PiHandHeart size={22} />
                        </div>
                        <div className="grid">
                          <div className="text-sm">{item.data()?.name}</div>
                          <div className="text-xs text-gray-500">
                            <NumericFormat
                              value={item.data()?.amount}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₹ "}
                            />{" "}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-sm text-center border rounded py-4">
                    No one has donated yet, Be the first one to donate!
                  </div>
                )}
              </div>
              {donations != "" && (
                <div className="flex gap-4 mt-5">
                  <button
                    onClick={() => setAllDonations(true)}
                    className="w-full py-2 border rounded-lg text-sm"
                  >
                    See all
                  </button>
                  <button
                    onClick={() => setTopDonations(true)}
                    className="flex items-center gap-2 justify-center w-full py-2 border rounded-lg text-sm"
                  >
                    <BsStar />
                    See top
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      {showDonate == true ? (
        <DonationCard
          id={id}
          campaign={getData}
          donation={getDonations}
          controller={setDonate}
        />
      ) : null}
      {allDonations && (
        <AllDonations data={donations} controller={setAllDonations} />
      )}
      {topDonations && (
        <TopDonations id={id} data={donations} controller={setTopDonations} />
      )}
    </>
  );
};

export default Details;
