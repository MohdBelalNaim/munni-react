import React from "react";
import { BsX } from "react-icons/bs";
import { PiHandHeart } from "react-icons/pi";
import { NumericFormat } from "react-number-format";

const AllDonations = ({ controller, data }) => {
  return (
    <div className="inset-0 glass fixed z-50 grid place-items-center">
      <div className="w-[min(400px,96%)] bg-white rounded h-[480px] overflow-scroll">
        <div className="flex gap-2 items-center text-lg p-3 border-b">
          <BsX
            size={24}
            className="cursor-pointer"
            onClick={() => controller(false)}
          />
          All Donations
        </div>
        <div>
          {data.map((item, index) => {
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
                      prefix={"₹"}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllDonations;
