import Link from "next/link";
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';
import { Link as ScLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React, { useRef, useState } from "react";


const { scrollY } = useViewportScroll();


class Hero extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);

  };


  scrollToTop() {
    scroll.scrollToTop();
  }


  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }


  render() {
    const icon = {
      hidden: {
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)",
        stroke: "aliceblue",
        strokeWidth: "3px",
      },
      visible: {
        pathLength: 1,
        fill: "rgba(255, 255, 255, 0.4)",
        stroke: "aliceblue",
        strokeWidth: "3px",
      }
    }

    return (
      <>
      <section className="hero" name="home" id="home">

<img className="mandala-circle" src="../static/circle.png"></img>

        <div className="hero__content">

          <h1>
<span className="h3">Celebrant</span>
          <span className="h2">Maureen Catherine Crawley</span>
        
    
           <span className="h1">Celebrating Grace & Love</span>

           </h1>

           <div className="btn-grp">

              <ScLink className="btn" to="contact" spy smooth to="contact"
                  >
                   Book an appointment
                  </ScLink>
              <ScLink className="btn" to="servicesandrates" spy smooth to="servicesandrates"
                  >
                    Services & Rates
                  </ScLink>
                  <ScLink className="btn" to="gallery" spy smooth to="gallery"
                  >
                  Testimonials & Gallery
                  </ScLink>

           </div>


        </div>
        </section>
        <svg className="svg-divider" viewBox="0 0 800 56.51"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M0,0V56.51H800V0C706.28,18.6,561.93,30.51,400,30.51S93.72,18.6,0,0Z"/></g></g></svg>
        <style jsx>
          {`



            .hero {

              background-image: url(../static/heroimg.jpg);
              background-size: cover;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              height: calc(100vh - 87px);
              overflow: hidden;
              position: relative;
              padding: 2vmax;
            }

            .hero .btn-group {
              max-width: 340px;
              margin-left: auto;
              margin-right: auto;
            }

            .hero .btn {
              font-size: 14px;
            }
            .svg-divider {
              display: block;
              background: var(--hero-background-color);
              z-index: 2;
              bottom: 0;
              width: 100%;
              transform: translateY(-98%);
            }


            .mandala-circle {
              opacity: 0.2 !important;
              max-width: 90vh;
              max-height: 90vh;
            }



            .hero video {
              opacity: 0.7;
              object-fit: cover;
              min-height: 100vh;
            }
            .hero h2 {
              background: linear-gradient(90deg,#ff7500,#ff00fa);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-box-decoration-break: clone;
              box-decoration-break: clone;
              display: block;
            }

            .intro {
              max-width: 1000px;
              margin-left: auto;
              margin-right: auto;
            }

            .hero__content {
              margin-top:-85px;
              position: absolute;
              padding-left: 8vw;
              padding-right: 8vw;
              padding-top: 16vw;
              padding-bottom: 8vw;
              z-index: 1;
              transform: translateY(-4vw);
              max-width: 980px;
            }


            .cls-1 {fill: var(--theme-color-white) !important; }



        `}
        </style>

      </>
    );

  }
}

export default Hero;






