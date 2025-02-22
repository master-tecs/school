import Image from 'next/image';
import styles from './services.css'; // Assume custom CSS module
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import HelpIcon from '@mui/icons-material/Help';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import FlightIcon from '@mui/icons-material/Flight';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const services = [
    {
      title: 'Psychometric Testing',
      description: 'Our Psychometric Testing Service Helps You Understand Your Strengths and Career Preferences.',
      Icon: AccessTimeIcon,
    },
    {
      title: 'Educational Consultation',
      description: 'Personalized counseling to help students select the most suitable program and institution.',
      Icon: CastForEducationIcon,
    },
    {
      title: 'Application & Admission Assistance',
      description: 'Guiding students through application forms, documentation, and prerequisites.',
      Icon: HelpIcon,
    },
    {
      title: 'Visa Guidance & Processing',
      description: 'End-to-end support to ensure visa requirements are correctly met, minimizing rejections and delays.',
      Icon: RunningWithErrorsIcon,
    },
    {
      title: 'Flight & Travel Arrangements',
      description: 'Assistance with flight bookings, travel insurance, airport pick-up services, and accommodation.',
      Icon: FlightIcon,
    },
    {
      title: 'Exchange Programs & Study Tours',
      description: 'Coordinating short-term study tours, cultural exchange programs, and school camps.',
      Icon: SchoolIcon,
    },
    {
      title: 'Continuous Support',
      description: 'Ongoing support for students even after they arrive at their destination, ensuring a smooth transition.',
      Icon: InfoIcon,
    },
    {
      title: 'Online Classes for French and IELTS',
      description: 'High-quality online courses designed to help you master French exams such as the TEF and DELF exams and prepare for the IELTS exam.',
      Icon: FontDownloadIcon,
    },
    {
      title: 'Career Counseling',
      description: 'Receive personalized guidance from our experienced counsellors to help align your career goals with your unique strengths and aspirations.',
      Icon: WorkHistoryIcon, // Replace with appropriate image path
    },
  ];

  export default function Services() {
    return (
      <section className={styles.eightBxSctn}>
        <div
          className={styles.eghtBgShpe}
          style={{ backgroundImage: `url('/assets/images/eght-bg-shape.jpg')` }}
        ></div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
              <div className="sc-heading-area sc-mb-55 text-center">
                <h2 className="sec-title__title display-4 text-center mb-5">
                  Our <span className="primary-color italic">Services</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row"> {/* First row with 3 items */}
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4" // Adjust for three items
                  data-sal="slide-up"
                  data-sal-duration="200"
                  data-sal-delay="200"
                >
                  <a href="#">
                    <div className="course-category__card course-category__card--1">
                      <div className="course-category__card__inner"></div>
                      <div className="course-category__card__content">
                        <div className="course-category__card__icon-box hexagon">
                          <span className="course-category__card__icon">
                            {/* <Image
                              src={service.imgSrc}
                              alt={service.title}
                              width={50}
                              height={50}
                            /> */}
                            <service.Icon fontSize='45px' />
                          </span>
                        </div>
                        <h4 className="course-category__card__title fs-4">{service.title}</h4>
                        <p className="crs-txt fs-4">{service.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
  
            <div className="row"> {/* Second row with 3 items */}
              {services.slice(3, 6).map((service, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4"
                  data-sal="slide-up"
                  data-sal-duration="200"
                  data-sal-delay="200"
                >
                  <a href="#">
                    <div className="course-category__card course-category__card--1">
                      <div className="course-category__card__inner"></div>
                      <div className="course-category__card__content">
                        <div className="course-category__card__icon-box hexagon">
                          <span className="course-category__card__icon">
                          <service.Icon fontSize='45px' />
                          </span>
                        </div>
                        <h4 className="course-category__card__title fs-4">{service.title}</h4>
                        <p className="crs-txt fs-4">{service.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
  
            <div className="row"> {/* Third row with 2 items */}
              {services.slice(6).map((service, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4" // Adjust for two items
                  data-sal="slide-up"
                  data-sal-duration="200"
                  data-sal-delay="200"
                >
                  <a href="#">
                    <div className="course-category__card course-category__card--1">
                      <div className="course-category__card__inner"></div>
                      <div className="course-category__card__content">
                        <div className="course-category__card__icon-box hexagon">
                          <span className="course-category__card__icon">
                            <service.Icon fontSize='45px' />
                          </span>
                        </div>
                        <h4 className="course-category__card__title fs-4">{service.title}</h4>
                        <p className="crs-txt fs-4">{service.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }



// import { Building2, FileText, Send, Building, Plane, Home } from 'lucide-react'

// const services = [
//   {
//     icon: <Building2 size={40} />,
//     title: 'Assistance In Choosing Right English Language',
//     description: 'Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services'
//   },
//   {
//     icon: <FileText size={40} />,
//     title: 'Documentation Support',
//     description: 'Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services'
//   },
//   {
//     icon: <Send size={40} />,
//     title: 'Application Support',
//     description: 'Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services'
//   },
//   {
//     icon: <Building size={40} />,
//     title: 'Follow Up For Offers From University',
//     description: 'Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services'
//   },
//   {
//     icon: <Plane size={40} />,
//     title: 'Visa Support',
//     description: 'Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services'
//   },
//   {
//     icon: <Home size={40} />,
//     title: 'Assistance In Finding Right Accommodation',
//     description: 'Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services'
//   }
// ]

// export default function Services() {
//   return (


//     <section className="py-5 bg-white text-black">
//     <div className="container text-center">
//       <h6 className="text-secondary mb-2">WHAT WE DO</h6>
//       <h2 className="mb-5">What Studywise Abroad does?</h2>
//       <ServicesGrid />
//     </div>
//   </section>
    
//   )
// }


// export  function ServicesGrid() {
//     return (
//       <div className="row g-4">
//         {services.map((service, idx) => (
//           <div key={idx} className="col-md-4">
//             <div className="card h-100 bg-transparent text-white border border-secondary transition-all duration-300 hover:border-primary">
//               <div className="card-body text-center">
//                 <div className="mb-3 d-flex justify-content-center align-items-center">
//                   {service.icon}
//                 </div>
//                 <h5 className="card-title">{service.title}</h5>
//                 <p className="card-text text-secondary">{service.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
  
  