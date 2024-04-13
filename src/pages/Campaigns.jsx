import React, { useEffect, useState } from "react";
import Navigation from "../components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  async function getCampaigns() {
    const ref = collection(db, "campaigns");
    const data = await getDocs(ref);
    setCampaigns(data.docs);
  }
  useEffect(() => {
    getCampaigns();
  }, []);
  return (
    <>
      <Navigation></Navigation>

      <div className="flex my-8 lg:px-36">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-black mr-4 mt-1 font-bold lg:text-2xl text-lg ml-4 lg:ml-0"
          />
        </Link>
        <h1 className="font-bold lg:text-2xl text-lg">
          Discover All Campaigns
        </h1>
      </div>

      {campaigns.length === 0 && (
        <section className="max-sm:px-4 lg:px-36 h-[170px]  flex justify-center items-center">
          <div className="text-center lg:text-4xl text-lg font-semibold">No active campaigns available</div>
        </section>
      )}

      <section className="mb-14">
        <div className="grid grid-cols-3 gap-4 mt-4 max-sm:grid-cols-1 max-sm:px-2 lg:px-36 md:px-4">
          {campaigns.map((item, index) => {
            return <CampaignCard id={item.id} data={item.data()} />;
          })}
        </div>
      </section>
    </>
  );
}
export default Campaigns;
