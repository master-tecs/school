"use client";

import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isCanvasExpanded, setIsCanvasExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCanvasMenu = (e) => {
    e.preventDefault();
    setIsCanvasExpanded((prevState) => !prevState);
  };

  return (
    <header className={`sc-header-section ${isSticky ? "sc-header-sticky" : ""}`}>
      {/* Topbar Section */}
      <div className="sc-topbar-section sc-topbar-section-two">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-9 col-12">
              <div className="sc-header-content-left">
                <ul className="list-gap white-color">
                  <li className="header-mail">
                    <EmailIcon style={{ color: "white" }} />
                    <a href="mailto:info@schoolabroad.org"> info@schoolabroad.org</a>
                  </li>
                  <li>
                    <PhoneIcon style={{ color: "white" }} />
                    <a href="tel:+33769020091"> +33 769 020 091</a>
                    <a href="tel:+2347081416069"> +234 708 1416 069</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="sc-header-social-icon">
                <ul className="list-gap sc-social-list">
                  <li>
                    <a href="https://m.facebook.com/schooloutsideng/" target="_blank" rel="noopener noreferrer">
                      <FacebookIcon style={{ color: "white" }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/schooloutside_ng/" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon style={{ color: "white" }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/company/schooloutside" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon style={{ color: "white" }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@schooloutside" target="_blank" rel="noopener noreferrer">
                      <YouTubeIcon style={{ color: "white" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="sc-header-content sc-header-content-two">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-12">
              <div className="sc-menu-inner d-flex align-items-center">
                <div className="sc-header-logo">
                <a href="/">
  <Image
    height={40}
    width={500}
    src="/assets/images/Schhol_Abroad_logo.jpeg" 
    alt="schoolabroad"
  />
</a>
                  <div className="sc-hambagur-icon">
                    <a id="canva_expander" href="#" onClick={toggleCanvasMenu}>
                      <span className="dot1"></span>
                      <span className="dot2"></span>
                      <span className="dot3"></span>
                    </a>
                  </div>
                </div>
                <div className="sc-main-menu d-lg-block d-none">
                  <ul className="list-gap main-menu">
                    <li className="current-menu-item">
                      <a className="active" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">Students</a>
                    </li>
                    <li>
                      <a href="#">Recruitment Partners</a>
                    </li>
                    <li>
                      <a href="#">Institutions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        id="sc-overlay-bg2"
        className={`sc-overlay-bg2 ${isCanvasExpanded ? "active" : ""}`}
        onClick={toggleCanvasMenu}
      ></div>

      {/* Offcanvas Area */}
      <div className={`sc-product-offcanvas-area ${isCanvasExpanded ? "expanded" : ""}`}>
        {/* Offcanvas Header */}
        <div className="sc-offcanvas-header d-flex align-items-center justify-content-between">
          <div className="sticky-logo logo-area">
            <Link href="/">
              <Image src="/assets/images/logo.png" alt="Logo" width={150} height={50} />
            </Link>
          </div>
          <div className="offcanvas-icon">
            <a id="canva_close" href="#" onClick={toggleCanvasMenu}>
              <i className="fa-regular fa-xmark"></i>
            </a>
          </div>
        </div>

        {/* Canvas Mobile Menu */}
        <nav className="right_menu_toggle mobile-navbar-menu">
          <ul className="nav-menu list-unstyled">
            <li className="list-gap current-menu-item">
              <Link href="/">Home</Link>
            </li>
            <li className="list-gap">
              <Link href="/about">About Us</Link>
            </li>
            <li className="list-gap">
              <Link href="/services">Services</Link>
            </li>
            <li className="list-gap">
              <Link href="/destination">Destination</Link>
            </li>
            <li className="list-gap">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="list-gap">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="list-gap">
              <Link href="/global-partnerships">Global Partnerships</Link>
            </li>
            <li className="list-gap">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}