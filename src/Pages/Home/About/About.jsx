import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="md:flex gap-10 mt-20 w-[90%] mx-auto">
      <div
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
        className="w-full"
      >
        <img src="https://i.ibb.co/P1Hn02K/4.png" alt="" />
      </div>
      <div data-aos="fade-left" className="w-[90%]">
        <h1 className="text-4xl font-extrabold">About Us</h1>
        <hr className="border-2 border-black w-1/3  mt-4 mb-10" />

        <p className="font-bold text-slate-400 mb-20">
          Tiny Rider is a one-stop shop for all your kids toy needs. We carry a
          wide variety of toys for all ages, from babies to big kids. Whether
          your looking for educational toys, action figures, dolls, or anything
          else in between, we have you covered. We also offer a variety of
          features that make shopping with us easy and convenient. Our website
          is easy to navigate, and we offer free shipping on orders over $50. We
          also have a customer satisfaction guarantee, so you can be sure that
          youre making a wise investment when you shop with us.
        </p>
        <button className="btn btn-secondary">Buy Toys</button>
      </div>
    </div>
  );
};

export default About;
