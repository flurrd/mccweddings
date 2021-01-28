import Link from "next/link";

export default function Footer(props) {
  return (
    <footer className="footer">


      <section className="footer-info">
        <h4>
          Maureen Catherine Crawley

        </h4>
 
      </section>


        <div className="footer-links">


        </div>
      <style jsx>
        {`
            .footer {
                padding: 4em 2em;
                background-color: var(--theme-color-accent-dark);
                color: white;
                display: flex;

                margin-top: var(--content-section-margin);
            }
            .footer-info {
              flex: 1;
              max-width: 600px;
            }

            .footer-links a {

                color: white;
                font-size: 20px;
                margin: 1em 1.5em;
                font-size: 14px;
            }

            .footer-links {
                display: flex;
                padding-left: 3em;
                justify-content: center;
                align-items: flex-end;
                margin-left: auto;
            }

        `}
      </style>
    </footer>
  );
}

