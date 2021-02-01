import React from "react";
import Slider from "react-slick";
import Testimonial from "../components/Testimonial";

export default function SimpleSlider(props) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
  
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div className="image-slider">

  
    <Slider {...settings}>

{props.galleryImages.length > 1 &&
							props.galleryImages.map((image) => (
								<div className="gallery__grid-item slider-image" key={image.source}>
									<div className="gallery__image-wrapper">
										<img src={image.source}></img>
									</div>
								</div>
							))}


    </Slider>
    </div>
  )
}