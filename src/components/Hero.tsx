// import hero from "../assets/heroimg.jpg";
import EmblaCarousel from "@/components/ui/Carousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {
  loop: true,
}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Hero = () => {
  return (
    <div>
       <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* <img src={hero} className="w-full max-h-[600px] object-cover" /> */}
    </div>
  );
};

export default Hero;
