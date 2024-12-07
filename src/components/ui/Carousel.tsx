import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'
import Autoplay from 'embla-carousel-autoplay'
import carousel1 from "../../assets/carousel5.png";
import carousel2 from "../../assets/carousel6.png";
import carousel3 from "../../assets/carousel4.png";

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const images: string[] = [carousel1,carousel2,carousel3]
const imageByIndex = (index: number): string => images[index % images.length]
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]) 
  

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
