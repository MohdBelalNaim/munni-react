import { useEffect, useState } from "react";
import { VscQuote } from "react-icons/vsc";
import { PiHandHeart } from "react-icons/pi";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";
import { useDispatch, useSelector } from "react-redux";

import {
  hideMenu,
  login,
  logout,
  showAuth,
  showMenu,
} from "../redux/toggleSlice";
import { BsArrowRight } from "react-icons/bs";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../firebase";
import CampaignCard from "../components/CampaignCard";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import "animate.css";
import MobileMenu from "../components/MobileMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.toggleSlice.auth);
  const loggedIn = useSelector((state) => state.toggleSlice.loggedIn);
  const menu = useSelector((state) => state.toggleSlice.menu);
  if (localStorage.getItem("user")) dispatch(login());
  const [campaigns, setCampaigns] = useState([]);

  const ref = query(collection(db, "campaigns"), limit(3));
  useEffect(() => {
    async function getCampaigns() {
      const data = await getDocs(ref);
      setCampaigns(data.docs);
    }
    getCampaigns();
  }, []);

  function userLogout() {
    dispatch(logout());
    localStorage.clear();
    router.push("/");
  }
  return (
    <>
      {menu && <MobileMenu />}

      <section
        style={{
          backgroundImage:
            "url('https://www.cry.org/wp-content/uploads/Poverty-In-India.png')",
        }}
        className="bg-cover"
      >
        <div className="inset-0 backdrop-brightness-50 ">
          <div className="">
            <div className="text-white flex justify-between items-center lg:px-36 lg:py-14 px-4 py-8">
              <div className="flex items-end gap-3 ">
                <img src={logo} alt="Ni load hua" className="w-[8%]" />
                <div className="text-sm max-sm:text-xs">
                  Munni Welfare Foundation
                </div>
              </div>
              <div className="max-sm:hidden flex lg:gap-8 gap-4 text-sm items-center">
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <Link to="/about">About</Link>
                </div>
                <div>
                  <Link to="/contact">Contact</Link>
                </div>
                <div>Get Involved</div>

                {!loggedIn && (
                  <div
                    onClick={() => dispatch(showAuth())}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </div>
                )}

                {loggedIn && (
                  <>
                    <div>
                      <Link to="/profile">My Profile</Link>
                    </div>
                    <div onClick={userLogout} className="cursor-pointer">
                      Logout
                    </div>
                  </>
                )}

                <Link href="/campaign">
                  <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
                    Donate <PiHandHeart className="text-xl" />
                  </div>
                </Link>
              </div>
              <FaBars
                onClick={() => dispatch(showMenu())}
                size={22}
                className="hidden max-sm:block"
              />
            </div>

            <div className="h-[500px] grid content-center justify-items-start max-sm:h-[260px] max-sm:content-start lg:px-36 lg:py-14 px-4 py-8">
              <div className="font-medium text-white text-5xl w-[26%] max-sm:w-full max-sm:text-2xl">
                Children&apos;s joy is play
              </div>
              <div className="text-primary mt-4 text-lg w-[26%] max-sm:w-full max-sm:text-sm">
                OUR MISSION
              </div>
              <div className="text-white mt-4 text-sm w-[26%] max-sm:w-[80%]">
                to warm a child &apos;s heart through coordinated play
              </div>
              <Link href="/campaign">
                <button className="bg-primary px-6 rounded-md mt-8 py-4 font-medium max-sm:px-3 max-sm:py-2 max-sm:text-xs">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="grid place-items-center lg:container lg:w-3/5 lg:pl-36 lg:pr-8 p-4">
            <div className="bg-white-300 ">
              <div className="max-sm:text-[18px] text-2xl font-medium text-secondary pb-2">
                Smile challenge
              </div>
              <div className="max-sm:text-xs text-sm text-justify">
                Welcome to Munni Welfare Foundation&apos;s Smile Challenge! Join
                us in spreading joy and making a difference in the lives of
                children in need. With your support, we aim to bring smiles to
                countless faces by providing education, healthcare, and
                essential resources. Together, let&apos;s embark on this
                heartwarming journey of kindness and compassion. Your
                contribution, no matter how big or small, can brighten a
                child&apos;s day and create lasting positive change. Take the
                Smile Challenge today and be a part of something truly
                remarkable.
              </div>
            </div>
          </div>
          <div className="max-sm:py-12 text-black grid place-items-center lg:container lg:w-2/5 bg-primary lg:pr-36 py-4 px-4">
            <div className="text-3xl max-sm:text-xl italic w-full lg:w-[52%] text-center">
              <VscQuote className="text-3xl" />
              There is so much joy you can share in this world
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="bg-secondary px-12 py-4 text-white lg:px-36">
          <section className="grid grid-cols-3 mx-auto container max-sm:grid-cols-1">
            <div className="flex items-center justify-center gap-3">
              <PiHandHeart className="text-6xl" />
              <div className="py-5">
                <div className="text-3xl font-medium">2324+</div>
                <div className="">Donations Recieved</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TbLayoutGridAdd className="text-6xl" />
              <div className="py-5">
                <div className="text-3xl font-medium">393</div>
                <div className="">Coordination Plays</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaChild className="text-6xl" />
              <div className="py-5">
                <div className="text-3xl font-medium">2323+</div>
                <div className="">Childrens Helped</div>
              </div>
            </div>
          </section>
        </div>
      </section> */}

      <section className="lg:px-36 px-4 border-t  ">
        <div className="text-2xl max-sm:text-[18px] font-medium text-secondary flex items-center justify-between lg:my-8 mt-4">
          Active Fundraisers
        </div>
        <div className="max-sm:hidden grid grid-cols-3 gap-4 max-sm:grid-cols-1 lg:my-8 my-4">
          {campaigns.map((item, index) => {
            return (
              <>
                <SwiperSlide>
                  <CampaignCard key={index} data={item.data()} id={item.id} />
                </SwiperSlide>
              </>
            );
          })}
        </div>
        <Swiper className="hidden max-sm:block mb-4 mt-3">
          <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 lg:my-8 my-4">
            {campaigns.map((item, index) => {
              return (
                <>
                  <SwiperSlide>
                    <CampaignCard key={index} data={item.data()} id={item.id} />
                  </SwiperSlide>
                </>
              );
            })}
          </div>
        </Swiper>

        <div className="max-sm:flex mb-4 flex justify-center">
          <button>
            <Link
              href="/campaign"
              className="bg-secondary text-white font-light text-sm py-2 px-4 rounded-full flex items-center gap-2"
            >
              {" "}
              All Campaigns <BsArrowRight />
            </Link>
          </button>
        </div>
      </section>

      <section className="bg-orange-100">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:px-36 lg:py-8 p-4">
          <div className="grid gap-y-6 max-sm:gap-y-4">
            <div className="font-medium text-4xl w-[20%] leading-tight text-orange-500 max-sm:w-full max-sm:text-[18px] max-sm:text-center">
              Support the children
            </div>
            <div className="w-[50%] h-1.5 bg-orange-500 max-sm:hidden"></div>
            <div className="text-sm w-[80%] max-sm:w-full max-sm:text-xs text-justify">
              Join us in empowering underprivileged children with vital support.
              Your generosity provides tools for their flourishing. Together,
              let&apos;s break barriers and inspire young minds to dream, learn,
              and thrive. Your contribution is more than an investment;
              it&apos;s a testament to the transformative power of compassion.
              Join our cause and ignite change in the lives of these deserving
              children.
            </div>
            <Link href="/campaign">
              <button className="bg-secondary text-white font-medium py-3 px-6 rounded-md w-max max-sm:hidden">
                Donate Now
              </button>
            </Link>
          </div>
          <div className="flex justify-end items-center">
            <img
              src="https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg')",
        }}
      >
        <div className="backdrop-brightness-[20%]">
          <div className="container mx-auto py-24 grid place-items-center gap-y-8">
            <div className=" text-white text-3xl max-sm:text-sm">
              Support us to make a difference in society
            </div>
            <div className="flex gap-4 max-sm:flex-wrap max-sm:justify-center max-sm:text-xs">
              <div className="border hover:bg-white cursor-pointer hover:text-black text-white px-4 py-2 rounded-full">
                ₹1,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹2,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹3,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full flex items-center gap-3">
                ₹{" "}
                <input
                  type="text"
                  className="bg-transparent w-max outline-none control"
                  placeholder="Custom amount"
                />
              </div>
            </div>
            <button className="bg-primary text-black text-sm px-8 py-3 rounded-full flex items-center gap-3 max-sm:text-xs max-sm:px-3 max-sm:py-2">
              Donate Tip <PiHandHeart className="text-lg" />
            </button>
          </div>
        </div>
      </section>

      {auth && <SignIn />}
    </>
  );
};

export default Home;
