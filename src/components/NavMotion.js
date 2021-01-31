import { motion, useViewportScroll, useTransform } from "framer-motion"
import { useState } from "react";
import Link from "next/link";
import { Link as ScLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const variants = {
  open: { top: 0, right: 0, position: "fixed", zIndex: 10000, width: "100%", height: "100%", opacity: 1, x: 0},
  closed: { top: 0, right: 0, position: "fixed", zIndex: 10000, width: 0, height: "100%", opacity: 1, x: "100%"},
}

const cicleBg = {
  closed: { "width": "0", "height": "0","transform":"translateX(-50px)translateY(50px)"},
  open: { "width": "300vmax", "height": "300vmax","transform":"translateX(20%)translateY(-20%)"}
}

let navLinks = [
  { title: 'about me', path: 'about' },
  { title: 'book an appointment', path: 'contact' },
  { title: 'services & rates', path: 'servicesandrates' },  
  { title: 'testimonials & gallery', path: 'gallery' },  
  { title: 'contact', path: "contact" }
]
const container = {
  closed: { 
     transition: { duration: 0} 
  },
  open: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  open: { opacity: 1, x: 0, pointerEvents:"all" },
  closed: { opacity: 0, x: "-50%", pointerEvents:"none",  transition: { duration: 0.05}  }
}

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

export const NavMotion = () => {

  const [isOpen, setIsOpen] = useState(false)

  const { scrollYProgress } = useViewportScroll()
  const { iwidth } = scrollYProgress.current;
  

  return (

    <div>

      <Link href="/"
      >
        <div className="logo-wrap">
          {/*           <svg className="logo" x="0px" y="0px"
            viewBox="0 0 582 573">
            <g>
              <path fill="#fff" d="M91-0.4h89.1l111.4,290.5L403.9-0.4h89l80.6,416.6h-88.4l-51.5-263.1L331.5,416.2h-80.6L149.8,153.1L97,416.2H7.8L91-0.4z"
              />
            </g>
            <g>
              <circle fill="#fff" cx="189.7" cy="532.7" r="40.2" />
              <circle fill="#fff" cx="395.5" cy="532.7" r="40.2" />
            </g>
          </svg>
          <span>Maureen Catherine Crawley</span> */}
{/* 
          <div className="img-switcha">
            <img className="avatar-home-link bottom-img" src="../static/circle.png"></img>
            <img className="avatar-home-link top-img" src="../static/circle.png"></img>

          </div> */}

        </div>



      </Link>
      <motion.svg className="content-svg" x="0px" y="0px"
        initial="closed" variants={cicleBg} transition={{ duration: 0.45}}
        animate={isOpen ? "open" : "closed"}
        viewBox="0 0 200 200">
        <circle fill="rgba(255,255,255,1)" cx="100" cy="100" r="100" />
      </motion.svg>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <Path animate={isOpen ? "open" : "closed"}
            initial="closed"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            animate={isOpen ? "open" : "closed"}
            d="M 2 9.423 L 20 9.423"
            initial="closed"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>

      <div className="motion-nav nav-wrap">
   
          <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="nav"
            initial="closed"
            role="navigation"
            aria-label="main navigation"
            transition={{ duration: 0.2, delay: 0.2 }}
          >


            <motion.div className="nav-links" variants={container} initial="closed"
              animate={isOpen ? "open" : "closed"}>

              {navLinks.length > 1 && navLinks.map(navLink => (
                <motion.div className="nav-link-wrap" variants={item} key={navLink.path} whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <ScLink onClick={() => setIsOpen(!isOpen)} className="nav__link" to={navLink.path} spy smooth to={navLink.path}
                  >
                    {navLink.title}
                  </ScLink>
                </motion.div >



              ))}



            </motion.div>
          </motion.nav>
        

      </div>




      <style jsx global>
        {`
          .logo-wrap {
            top: 1.5rem;
            left: 1.5rem;
            position: fixed;
            z-index: 100000;
            color: white;
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .img-switcha {
            width: 80px;
            height: 80px;
            position: relative;
            border-radius: 50%;
            border: 2px solid white;
            transform: scale(1);
            transition: all 0.6s;
          }

          .img-switcha img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.6s;
          }

          .top-img.img {
            opacity: 1;
          }

          .bottom-img {
            opacity: 1;
            mix-blend-mode: screen;
          }

          .logo-wrap:hover .top-img {
            opacity: 0;
          }

          .logo-wrap:hover .img-switcha {
            transform: scale(1.1);
            border-color: var(--theme-color-accent);
            background: var(--theme-color-accent);
          }

          .nav {
            position: fixed;
            color: var(--theme-color-nav-links);
            
            background: var(--fullscreen-nav-background-color);
          }

          .nav-link-wrap {
            cursor: pointer;
          }

          .nav-links a {
            color: var(--fullscreen-nav-color);
            font-size: 18px;
            display: block;
            margin: 1.5em;
            text-transform: uppercase;
          }

          .nav-links {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
          }

          .hamburger {
            top: 1.5rem;
            right: 1.5rem;
            position: fixed;
            border: none;
            outline: none;
            color: white;
            z-index: 100000;
            cursor: pointer;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--theme-color-accent);
        }

        .hamburger:hover {
           
        }


        .hamburger svg {
            width: 15px;
            line-height: 0;
        }
        .hamburger svg path {
            fill: #fff;
        }
        .hamburger svg.menu--open path {
            fill: #fff;
        }

          .hamburger svg {
            width: 15px;
            line-height: 0;
          }
          .hamburger svg path {
            fill: #fff;
          }
          .hamburger svg.menu--open path {
            fill: #fff;
          }

          .avatar-home-link {
            width: 80px;
          }
          .content-svg {
            position: fixed;
            border: none;
            outline: none;
            color: white;
            z-index: 100;
            cursor: pointer;
            right: 0;
            top: 0;
          }


          .content-svg circle {
            fill: var(--theme-color-nav-background);
          }
          `}
      </style>
    </div>
  )
}


export default NavMotion;
