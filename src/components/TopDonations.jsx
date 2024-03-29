import { db } from "../firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { PiHandHeart } from "react-icons/pi";
import { TailSpin } from "react-loader-spinner";
import { NumericFormat } from "react-number-format";

const TopDonations = ({ controller, id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getTopDonations() {
    setLoading(true);
    const q = query(
      collection(db, "donations"),
      where("campaign", "==", id),
      orderBy("amount", "desc")
    );
    const donations = await getDocs(q);
    setData(donations.docs);
    setLoading(false);
  }
  useEffect(() => {
    getTopDonations();
  }, []);
  return (
    <div className="inset-0 glass fixed z-50 grid place-items-center">
      <div className="w-[min(400px,96%)] bg-white rounded h-[480px] overflow-scroll">
        <div className="flex gap-2 items-center text-lg p-3 border-b">
          <BsX
            size={24}
            className="cursor-pointer"
            onClick={() => controller(false)}
          />
          Top Donations
        </div>
        <div>
          {loading ? (
            <div className="h-[400px] w-full grid place-items-center">
              <TailSpin color="darkblue" height={40} width={40} />
            </div>
          ) : (
            data.map((item, index) => {
              return (
                <div key={index} className="flex p-3 gap-3 border-b">
                  <div className="p-3 rounded-full bg-gray-100">
                    <PiHandHeart size={22} />
                  </div>
                  <div className="text-sm">
                    <div>{item.data()?.name}</div>
                    <div>
                      <NumericFormat
                        value={item.data()?.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹ "}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TopDonations;
