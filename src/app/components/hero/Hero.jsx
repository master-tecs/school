"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www-cdn.icef.com/scripts/iasbadgeid.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bnnr-video">
      <div className="innr-video-bx">
        <video autoPlay muted loop>
          <source src="./assets/images/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="bnn-content">
        {/* <div className="accrdation-bx">
          <span id="iasBadge" data-account-id="5701"></span>
        </div> */}

        <h5 className="smll-txt wow fadeInLeft">
          Welcome To <span>School Abroad</span>
        </h5>

        <h2 className="bnnr-hdng wow fadeInLeft">
          Our <span className="primary-color">mission is to</span> broaden horizons and foster cultural exchange 
        </h2>

        <div
          className="bttn-bx wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <a
            className="sc-primary-btn"
            href="#"
            // onClick={() => showModal(1)}
          >
            I&apos;m a student seeking global opportunities
          </a>
          <br />
          <a
            className="sc-transparent-btn text-white"
            href="#"
            // onClick={() => showModal(2)}
          >
            I&apos;m a partner in student recruitment
          </a>
          <a
            className="sc-transparent-btn text-white"
            href="#"
            // onClick={() => showModal(3)}
          >
            I&apos;m an academic leader in higher education
          </a>
        </div>
      </div>
    </section>
  );
}