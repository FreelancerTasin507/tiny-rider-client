import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

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
      })

    return (
        <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1"><img src="https://i.ibb.co/Zmv29yg/car-crash-accident-traffic-road-insurance-claim-concept-39768-8268.jpg" alt="" /></div>
      <div className="keen-slider__slide number-slide2"><img src="https://i.ibb.co/Zmv29yg/car-crash-accident-traffic-road-insurance-claim-concept-39768-8268.jpg" alt="" /></div>
      <div className="keen-slider__slide number-slide3"><img src="https://i.ibb.co/Zmv29yg/car-crash-accident-traffic-road-insurance-claim-concept-39768-8268.jpg" alt="" /></div>
      <div className="keen-slider__slide number-slide4"><img src="https://i.ibb.co/Zmv29yg/car-crash-accident-traffic-road-insurance-claim-concept-39768-8268.jpg" alt="" /></div>
      <div className="keen-slider__slide number-slide5"><img src="https://i.ibb.co/Zmv29yg/car-crash-accident-traffic-road-insurance-claim-concept-39768-8268.jpg" alt="" /></div>
      <div className="keen-slider__slide number-slide6"><img src="https://i.ibb.co/Zmv29yg/car-crash-accident-traffic-road-insurance-claim-concept-39768-8268.jpg" alt="" /></div>
    </div>
    );
};

export default Gellary;