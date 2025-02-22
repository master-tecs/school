'use client'

import { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import {sendEmail} from '../../utils/resend'
// import AppointmentConfirmationPopup from './AppointmentConfirmationPopup';

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  // const [isPopupOpen, setIsPopupOpen] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
  
    // Enable loading state (if applicable)
    setLoading(true);
  
    try {
      // Get form data as an object
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
  
      console.log('Form Data:', data);
  
      // Send email
      await sendEmail(data);
  
      // Provide user feedback
      setSuccess(true);
      // setIsPopupOpen(true);
      // alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    } finally {
      // Disable loading state
      setLoading(false);
    }
  }

  return (
    <div className="sc-accordion-section-area">
      <div className="container">
        <div className="row">
          <div className="frm-step">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-hdng">
                  <h4>HOW IT WORKS</h4>
                </div>
              </div>

              {/* Step 1 */}
              <div className="col-lg-4 col-md-4">
                <div className="process-single-box">
                  <div className="process-icon">
                    <i className="fa-regular fa-users">
                      <InsertDriveFileIcon style={{ fontSize: '40px' }} />
                    </i>
                  </div>
                  <div className="process-number">
                    <span>01</span>
                  </div>
                  <div className="process-content">
                    <div className="process-title">
                      <h2>Fill Required Form</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-lg-4 col-md-4">
                <div className="process-single-box">
                  <div className="process-icon">
                    <i className="fa-regular fa-users">
                      <MarkEmailReadIcon style={{ fontSize: '40px' }} />
                    </i>
                  </div>
                  <div className="process-number">
                    <span>02</span>
                  </div>
                  <div className="process-content">
                    <div className="process-title">
                      <h2>Get an email Confirming Your Appointment</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-lg-4 col-md-4">
                <div className="process-single-box bdr-none">
                  <div className="process-icon">
                    <i className="fa-regular fa-users">
                      <GroupsIcon style={{ fontSize: '40px' }} />
                    </i>
                  </div>
                  <div className="process-number">
                    <span>03</span>
                  </div>
                  <div className="process-content">
                    <div className="process-title">
                      <h2>Meet 1-to-1 With Our Experts</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="p-4 pb-4 form-start">
            <div className="row">
              {/* Contact Details */}
              <div className="col-lg-4 col-md-5" style={{ height: "auto" }}>
                <div className="form_metterial">
                  <div className="detels_bar">
                    <h4 style={{ fontStyle: "bold" , fontSize: "25px" }}>School Abroad</h4>
                    <ul>
                      <li>
                        <AccessTimeIcon style={{ fontStyle: "bold", fontSize: "20px", marginRight: "5px" }} /> 30 Minutes Free Counselling
                      </li>
                      <li>
                        <VideocamIcon style={{ fontStyle: "bold", fontSize: "20px", marginRight: "5px" }} /> Web conferencing details provided{" "}
                        <span className="mrl-1">upon confirmation.</span>
                      </li>
                      <li>
                        <EmailIcon style={{ fontStyle: "bold", fontSize: "20px", marginRight: "5px" }} /> info@schoolabroad.com
                      </li>
                      <li>
                        <LocalPhoneIcon style={{ fontStyle: "bold", fontSize: "20px", marginRight: "5px" }} />{" "}
                        <a href="tel:+2347081416069" style={{ marginRight: "5px" }}>+234 708 1416 069</a>{" "}
                        <a href="tel:+33769020091">{" "}+33 769 020 091</a>
                      </li>
                      <li>
                        <LocationOnIcon style={{ fontStyle: "bold", fontSize: "20px", marginRight: "5px" }} /> Europe: pierre vermeir, Antony, Paris, France.
                      </li>
                      <li>
                        <LocationOnIcon style={{ fontStyle: "bold", fontSize: "20px", marginRight: "5px" }} />{" "}
                        <a href="#">Africa: 1A Junction Road, Kaduna, Nigeria</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form_metterial2 mt-4 pt-4">
                  <h2>
                    <PersonIcon style={{ fontSize: "50px", border: "1px solid #fff", borderRadius: "50%", padding: "5px", margin: "10px" }} />
                  </h2>
                  <h3 className='mb-4'>We will get back to you within 24 hours</h3>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="col-lg-8 col-md-7">
                <div className="section-title with-desc">
                  <div className="online-titel">
                    <h2>Book Your Appointment by Entering Details</h2>
                  </div>
                </div>

                <div className="sc-slider-form-box mb-5">
                  <div className="sc-form-area">
                    {success ? (
                      <div className="alert alert-success">
                        Thank you! We will get back to you within 24 hours.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} id="appForm">
                        <input type="hidden" name="Appointment" value="Appointment" />
                        <div className="row">
                          <div className="col-lg-6">
                            <input className="form-control mb-3 p-3 fs-5" type="text" name="fullName" placeholder="Full Name" required />
                          </div>
                          <div className="col-lg-6">
                            <input className="form-control  mb-3 p-3 fs-5" type="tel" name="phone" placeholder="Phone" required />
                          </div>
                          <div className="col-lg-6">
                            <input className="form-control  mb-3 p-3 fs-5" type="email" name="email" placeholder="Email" required />
                          </div>
                          <div className="col-lg-6">
                            <input className="form-control  mb-3 p-3 fs-5" type="text" name="city" placeholder="City" required />
                          </div>
                          <div className="col-lg-6   mb-3 fs-5">
                            <select className="form-select" name="studyAbroad" required>
                              <option value="">Choose Study Abroad</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="USA">USA</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                              <option value="Europe">Europe</option>
                              <option value="Asia">Asia</option>
                            </select>
                          </div>
                          <div className="col-lg-6 fs-5">
                            <select className="form-select" name="course" required>
                              <option value="">Choose Service Interested?</option>
                              <option value="School Admission">School Admission</option>
                              <option value="IELTS">IELTS</option>
                              <option value="TOEFL">TOEFL</option>
                              <option value="DELF">DELF</option>
                              <option value="TEF">TEF</option>
                              <option value="SAT">SAT</option>
                            </select>
                          </div>
                          <div className="col-lg-12 mt-3 mb-3">
                            <textarea className="form-control fs-5" name="message" rows="4" placeholder="Write Your Message"></textarea>
                          </div>

                          <div className="abt-btn">
                            <button type="submit" className="sc-primary-btn" disabled={loading}>
                              {loading ? 'Submitting...' : 'Submit Request'}
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                  {/* <AppointmentConfirmationPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

