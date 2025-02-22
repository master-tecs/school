import Image from 'next/image';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <div>
      {/* Call-to-Action Section */}
      <div className="sc-cta-section-area mt-5">
        <div className="sc-footer-cta sc-cta-content-box d-flex align-items-center">
          <a href="/" className="sc-cta-image mt-5" style={{ cursor: 'pointer' }}>
            <Image src="/assets/images/transparent-logo.png" alt="School Abroad" width={500} height={50} />
            {/* <img src="./assets/images/Schhol_Abroad_logo.jpeg" alt="schoolabroad" /> */}
          </a >
          {/* <div className="sc-cta-content rounded-0 d-flex align-items-center justify-content-between">
            <div className="sc-cta-text" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
              <h2 className="title white-color">Call Us Now</h2>
              <p className="des white-color">Have any questions? Ask a Specialist</p>
            </div>
            <div className="sc-cta-btn" data-sal="slide-up" data-sal-duration="800" data-sal-delay="400">
              <a className="sc-secondary-btn" href="tel:+23445666576">
                <i className="fa-regular fa-phone"></i> +234 4566 6576
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* Footer Section */}
      <section className="sc-footer-section footer-bg-image2">
        <div className="container">
          <div className="row sc-pt-180 sc-md-pt-120 sc-pb-50 sc-md-pb-20 sc-sm-pt-140 sc-sm-pb-30">
            {/* About Us */}
            <div
              className="col-xl-4 col-lg-4 col-md-12 col-12"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="500"
            >
              <div className="footer-menu-area sc-footer-user sc-pl-75 sc-md-pl-0 sc-md-mb-40 sc-lg-pl-0">
                <h4 className="footer-title white-color sc-md-mb-15">About Us</h4>
                <p>
                At School Abroad, we are your reliable partner for international education and study visa assistance.
                  <ul className="about-icon">
                    <li>
                      <Link href="https://m.facebook.com/schooloutsideng/" target="_blank">
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/schooloutside_ng/" target="_blank">
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://linkedin.com/company/schooloutside"
                        target="_blank"
                      >
                        <LinkedInIcon />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.youtube.com/@schooloutside"
                        target="_blank"
                      >
                        <YouTubeIcon />
                      </Link>
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Useful Links */}
            <div
              className="col-xl-4 col-lg-4 col-md-8 col-12"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="500"
            >
              <div className="footer-menu-area sc-footer-user sc-pl-75 sc-md-pl-0 sc-md-mb-20 sc-lg-pl-0">
                <h4 className="footer-title white-color sc-md-mb-15">Useful Links</h4>
                <ul className="footer-menu-list ftr-links list-icon-rgt usfl-link">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/destination">Destination</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/global-partnerships">Global Partnerships</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-12"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="700"
            >
              <div className="footer-menu-area sc-footer-service sc-pl-40 sc-blg-pl-30 sc-lg-pl-0 sc-md-mt-20 sc-sm-pt-10 sc-sm-mt-0">
                <h4 className="footer-title white-color sc-md-mb-15">Contact Us</h4>
                <div className="foot-list">
                  <ul className="footer-menu-list foot-cont-lst">
                    <li>
                      <PhoneIcon style={{ marginRight: '10px' }} />
                      <a href="tel:+33769020091">+33 769 020 091</a>
                    </li><li>
                      <PhoneIcon style={{ marginRight: '10px' }} />
                    <a href="tel:+2347081416069">+234 708 1416 069</a>
                    </li>
                    <li>
                      <EmailIcon style={{ marginRight: '10px' }}  />
                       <a href="mailto:info@schoolabroad.org"> info@schoolabroad.org</a>
                    </li>
                    <li>
                      <LocationOnIcon style={{ marginRight: '10px' }}  /> Europe: pierre vermeir, Antony, Paris, France.
                    </li>
                    <li>
                      <LocationOnIcon style={{ marginRight: '10px' }}  /> Africa: 1A Junction Road, Kaduna, Nigeria
                      Zone
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 col-12">
                <div className="copyright-text" data-sal="slide-up" data-sal-duration="800" data-sal-delay="400">
                  <p>Copyright © 2025 School Abroad, All Rights Reserved</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-12">
                <div className="cpyrgt-right-text">
                  <p>
                    Developed By <a href="https://mastertecs.com/" target="_blank">Master Tecs</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}