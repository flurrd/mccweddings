

import { Link as ScLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


let footerLinks = [
  { title: 'About me', path: 'about' },
  { title: 'Get in touch', path: "contact" },
  { title: 'Services & rates', path: 'servicesandrates' },  
  { title: 'Testimonials', path: 'testimonials' }

]
export default function Footer(props) {
  return (
    <footer className="footer">

      <div className="footer-content">
      <section className="footer-info">
      <img width="100px" className="mandala" src="../static/circle.png"></img>
        <h5>CELEBRANT</h5>
        <h2>
          Maureen Catherine Crawley

        </h2>
        <a className="footer__contact-link" href="tel:+61 448 914 993">+61 448 914 993</a><br></br>
        <a className="footer__contact-link" href="mailto:mc@mccweddings.com">mc@mccweddings.com</a>
      </section>


        <div className="footer-links">


        {footerLinks.length > 1 && footerLinks.map(footerLink => (
                <div className="footer__link" key={footerLink.path} 
                  >
                  <ScLink className="footer__link-a" to={footerLink.path} spy smooth to={footerLink.path}
                  >
                    {footerLink.title}
                  </ScLink>
                </div >



              ))}

        </div>

        
      <style jsx>
        {`
           

        `}
      </style>

      </div>
    </footer>
  );
}

