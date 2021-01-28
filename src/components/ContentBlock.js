import Link from "next/link";
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';

import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "./hook";


export default function ContentBlock(props) {

  const root = useRef();
  const target = useRef();
  const rootMargin = "40px"

  const [isThingIntersecting, setThingIntersecting] = useState();


  // Here's our hook! Let's give it some configuration...
  useIntersectionObserver({
    root,
    target,
    rootMargin,

    // What do we do when it intersects?
    // The signature of this callback is (collectionOfIntersections, observerElement).
    onIntersect: ([{ isIntersecting }]) => setThingIntersecting(isIntersecting)
  });



  return (
    <div className="content-block">
    
      <div  ref={target}>
        {isThingIntersecting && <motion.h2
        initial={{opacity: 0, x: "100%", rotateX: 90, height: "3rem"}}
        animate={{opacity: 1, x:0, rotateX: 0, height: "3rem"}}
        transition={{ duration: 0.25}}
        whileHover={{ rotateX: 180, duration: 0.3 }}
        whileTap={{ rotateX: 180, duration: 0.3 }}>
        {props.title}</motion.h2>}

</div>


      <style jsx>
        {`

          .content-block{
      
            display: flex; 
            justify-content: center;
            align-items: center;
            min-height: 70vh;
            background: white;
          }
        `}
      </style>

    </div>
  );



}



