import Link from "next/link";
import { Link as ScLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default function Header(props) {
  
  return (
    <header className="header" id="header">

      

{/* <ScLink className="home-link mar-r-auto btn mar-l-1" to="home" spy smooth to="home"
                  >
                 
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
</ScLink> */}


<ScLink className="btn" to="contact" spy smooth to="contact"
                  >
                  Get in touch
                  </ScLink>

      <style jsx>
        {`
          .header {
            position: fixed;
            top:0;
            right:0;
            width: 100%;
            height: 65px;
            z-index:9;
            background: transparent;
            display: flex;
            align-items: center;
            display: flex;
            justify-content: flex-end;
            padding-right: 100px;
            padding-top: 36px;
          }

        `}
      </style>
    </header>
  );
}

