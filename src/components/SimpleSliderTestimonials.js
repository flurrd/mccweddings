import React from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";

export default function SimpleSliderTestimonials() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  };
  return (
  <section id="testimonials"  className="testimonials-slider mar-t-3">

  <Slider {...settings}>


<Testimonial content={"<p>Ben and I would like to thank you from the bottom of our hearts for the most perfect wedding ceremony. Everyone came up to us and commented on how warm and loving your service was. We cannot recommend you highly enough. You are thoughtful, professional, loving and kind.</p><p>We know and feel that your job is your vocation and your beautiful soul shines through.</p><p>- Angie</p>"}></Testimonial>

<Testimonial content={"<p>We were so impressed by the way you asked questions and listened with empathy to draw out the essence of Pat and to reflect that in your delivery with such a soft and caring nature. It was as if you had known her all your life.</p><p>It’s a special gift you have. We were so lucky to find you. We also recognize the amount of effort that you put into crafting and delivering the words for the service. It was the most beautiful service to honour Pat... You are indeed at the height of your profession, and I thank you for being there for us.</p><p> - Warren Anthes</p>"}></Testimonial>

<Testimonial content={"<p>We would like to express our appreciation for the compassion and empathy you showed yesterday.  With all that was happening, we were not able to properly thank you for all you did. Hazel's send-off was perfect. In fact, a number of people commented that you must have been a friend of the family and known Hazel yourself!</p><p>Saying goodbye was never going to be easy but your handling of everything from start to finish was warm and yet professional,made it so much easier for us all.</p><p> - Daryll and Anne Lloyd</p>"}></Testimonial>

    </Slider>
    </section>
    
  )
}