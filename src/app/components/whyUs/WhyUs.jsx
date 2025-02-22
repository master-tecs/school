"use client"
import Image from "next/image";
import { useState } from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function WhyUs() {
  const [isMuted, setIsMuted] = useState(true); // Initial state: muted

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-5 bg-light p-5">
    <div className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
        <h6 className="sec-title__tagline mt-3 mb2">WHY US</h6>
                <h3 className="sec-title__title mb-4">
                Why Choose School Abroad?
                </h3>
          <div className="mb-4">
            <h5 className="fs-4 fw-bold mb-3">Expert Guidance</h5>
            <p className="text-secondary">
              Our experienced counselors provide personalized guidance to help you choose the right course and university. We understand that each student is unique and requires individual attention.
            </p>
          </div>
          <div className="mb-4">
            <h5 className="fs-4 fw-bold mb-3">Comprehensive Support</h5>
            <p className="text-secondary">
              From application to visa processing, we assist you at every step. Our team ensures that your documentation is perfect and your visa application has the highest chance of success.
            </p>
          </div>
          <div className="mb-4">
            <h5 className="fs-4 fw-bold mb-3">University Partnerships</h5>
            <p className="text-secondary">
              We have strong partnerships with top universities worldwide. This allows us to provide you with exclusive opportunities and ensure your application gets the attention it deserves.
            </p>
          </div>
          <div className="abt-btn">
                <a className="sc-primary-btn" href="/about">
                  Read More
                </a>
              </div>
          {/* <button className="btn btn-dark btn-lg px-4">READ MORE</button> */}
        </div>
        <div className="col-lg-6 my-5">
          <div className="position-relative rounded shadow-lg" style={{ width: '100%' }}>
            {/* <Image
              src="/placeholder.svg"
              alt="Students studying"
              fill
              className="object-fit-cover"
            /> */}

{/* <video autoPlay loop style={{ width: "inherit" }}>
          <source src="./assets/images/students/us.mp4" type="video/mp4"  />
        </video> */}
        <video autoPlay loop muted={isMuted} style={{ width: "inherit" }}>
          <source src="./assets/images/students/us.mp4" type="video/mp4" />
      </video>
      {isMuted ? (
        <VolumeOffIcon onClick={toggleMute} style={{ fontSize: '25px', position: "absolute", bottom: "10px", left: "10px", color: "#732efd" }} />
      ) : (
        <VolumeUpIcon onClick={toggleMute} style={{ fontSize: '25px', position: "absolute", bottom: "10px", left: "10px", color: "#732efd" }} />
      )}
      {/* <button onClick={toggleMute} style={{ marginTop: "10px" }}>
        {isMuted ? "Unmute" : "Mute"}
      </button> */}
      
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}