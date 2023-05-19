import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Gellary = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div>
      <div className="mt-40">
        <h1 className="text-5xl font-bold text-center">Our Sponsor</h1>
        <hr className="border-2 border-black w-1/3 mx-auto mt-4 mb-10" />
      </div>
      <div ref={sliderRef} className="keen-slider mt-20 border-2 p-10 mb-20">
        <div className="keen-slider__slide number-slide1">
          <img src="https://i.ibb.co/DkmxRCq/1.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="https://i.ibb.co/PYLLKqX/2.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="https://i.ibb.co/YXxM6Bm/3.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="https://i.ibb.co/6g73vBh/4.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="https://i.ibb.co/k3HDvbh/5.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="https://i.ibb.co/WGM31bz/6.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gellary;
