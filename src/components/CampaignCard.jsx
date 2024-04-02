import { BsCalendar, BsPeople } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
const CampaignCard = ({ data, id }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
      <Link to={`/details/${id}`} onClick={handleClick}>
        <img src={data.url} className="w-full h-48 object-cover" alt="" />
      </Link>

      <div className="px-4 text-sm mt-3">{data.title}</div>

      <div className="px-4 flex gap-6 items-center mt-3">
        <div className="flex items-center gap-2">
          <BsPeople className="text-lg" />
          <div className="text-xs">
            3 <span className="text-gray-500">Givers</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BsCalendar className="text-sm" />
          <div className="text-xs">
            4 <span className="text-gray-500">Days Left</span>
          </div>
        </div>
      </div>

      <div className="px-4 mt-3 mb-3">
        <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-1 bg-secondary rounded-full"
            style={{
              width: (data?.raisedAmount / data?.goalAmount) * 100 + "%",
            }}
          ></div>
        </div>
      </div>

      <div className="px-4 flex mb-5 justify-between items-center">
        <div>
          <div className="text-lg font-bold">
            <NumericFormat
              value={data?.raisedAmount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </div>
          <div className="text-sm text-gray-500">
            Funded of{" "}
            <NumericFormat
              value={data?.goalAmount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </div>
        </div>
        <Link to={`/details/${id}`} onClick={handleClick}>
        <div>
          <button className="bg-secondary text-white text-xs px-5 py-2 rounded-full">
            Donate
          </button>
        </div></Link>
      </div>
    </div>
  );
};

export default CampaignCard;
