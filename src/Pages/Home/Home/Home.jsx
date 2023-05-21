import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
import useTitle from "../../../../public/useTitle";
import About from "../About/About";
import Category from "../Category/Category";
import Gellary from "../Gellary/Gellary";

import Gellary2 from "../Gellary2/Gellary2";
import Loader from "../Loader/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useTitle("Home");
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="md:w-[100%] mx-auto mt-5 mb-10  ">
          <AwesomeSlider
            className="md:h-[95vh] "
            media={[
              {
                source:
                  "https://i.ibb.co/Zmv29yg/car-crash-accident-traffic-road-insurance-claim-concept-39768-8268.jpg",
              },
              {
                source:
                  "https://i.ibb.co/k0r1sKF/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks-176474-9256.jpg",
              },
              {
                source:
                  "https://i.ibb.co/KyPTZM9/dump-track-toy-loaded-with-blocks-470606-617.jpg",
              },
            ]}
          ></AwesomeSlider>
          <div className="absolute md:top-[25%] top-[2%] z-10  md:h-[94%] h-[26%] mt-32 md:mt-0 bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] ">
            <div className="flex flex-col gap-y-5 md:mt-28 md:ml-32">
              <h1 className="md:text-8xl text-2xl font-bold text-slate-300">
                Best Kids Store <br /> & Online Shop
              </h1>
              <p className="text-xl font-bold  text-slate-300">
                Give The Gift Of Your Children Everyday
              </p>
              <Link>
                <button className="btn btn-secondary">Shop Now</button>
              </Link>
            </div>
          </div>

          <Gellary2></Gellary2>

          <Category></Category>

          {/* Extra section */}
          <About></About>

          <Gellary></Gellary>
        </div>
      )}
    </>
  );
};

export default Home;
