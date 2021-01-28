import { motion, useMotionValue, useViewportScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const variants = {
  open: { top: 0, right: 0, position: "fixed", zIndex: 10000, width: "100%", height: "100%", opacity: 1, x: 0 },
  closed: { top: 0, right: 0, position: "fixed", zIndex: 10000, width: 0, height: "100%", opacity: 1, x: "100%" },
}


export const Framer = () => {

  const x = useMotionValue(0)
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => x.onChange(xLatest => { }), [])
  const y = useMotionValue(useTransform((scrollYProgress), xLatest => xLatest * 1) * 2)
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => y.onChange(yLatest => { }), [])
  useEffect(() => scrollYProgress.onChange(yLatest => { }), [])
  const transY = scrollYProgress * 4;


  //  x.set(100)

  /// x.get() // 100

  // xRel.getVelocity()






  return (

    <>
      <motion.svg style={{ y: y}} width="30%" className="follow" viewBox="0 0 704.05 969.11"><title>Asset 1</title>
        <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
          <motion.path style={{ pathLength: scrollYProgress, y: y, x: x }} strokeWidth="5px"
            fill="transparent" stroke="white"
            d="M120.4.49c381.12,54.55,491,106.88,492,151,2.17,95.65-508.62,92.13-598,350-46.8,135,27.87,324.7,174,412,131.88,78.79,332.74,80.65,442-44,84.14-96,74.33-221.73,71-253" /></g></g>
      </motion.svg>

      <style jsx global>
        {`
.follow {
  position:fixed;
  z-index:1000;
  width: 30%;
  height: 100vh;
  top: 0;
  left: 0;

}
          `}
      </style>
    </>
  )
}

export default Framer;
