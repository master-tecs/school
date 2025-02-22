"use client"
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';

const testimonials = [
  // {
  //   name: "Emily Johnson",
  //   program: "Business Studies in Australia",
  //   comment: "Studying abroad through School Abroad was the best decision I've ever made. The support and guidance I received were invaluable. It truly changed my life!",
  //   rating: 5,
  //   avatar: "/assets/images/students/1.jpg",
  // },
  {
    name: "Akosua B… Ghana",
    program: "Computer Science in Canada",
    comment: "Choosing School Abroad for my Canada study journey was the best decision I made! Their expertise in handling my admission and visa process was outstanding. From start to finish, they guided me with care and professionalism. Within months, I received my passport request, and now I’m on my way to studying in Canada. If you’re planning to study abroad, School Abroad is the team to trust!",
    rating: 5,
    avatar: "/assets/images/students/Akosua.jpeg",
  },
  // {
  //   name: "Sophia Rodriguez",
  //   program: "Arts and Design in UK",
  //   comment: "The personalized attention I received from School Abroad was exceptional. They helped me find the perfect program that aligned with my career goals. Highly recommended!",
  //   rating: 5,
  //   avatar: "/assets/images/students/student-1.png",
  // },
  {
    name: "Dina Adeleke",
    program: "Arts and Design in Canada",
    comment: "School Outside now School Abroad made my dream of studying in Canada a reality! From the initial school application in January to receiving my passport request by the first week of May, their team was efficient, professional, and supportive throughout the entire process. They handled my admission and study permit with precision, keeping me informed at every step. Thanks to School Abroad, I’m now in Canada.🇨🇦 I highly recommend their services to anyone looking to study abroad!",
    rating: 5,
    avatar: "/assets/images/students/Dina.jpeg",
  },
];

export default function Testimonials() {
  return (
    <div className="sc-testimonial-section-two sc-arrow-btn sc-pt-50 sc-pb-50 sc-md-pt-80 sc-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="sc-heading-area text-center">
              <span className="sub-title">
                <i className="icon-line"></i>Our Testimonials
              </span>
              <h2 className="sec-title__title display-4 text-center mb-5">
                Student <span className="primary-color italic">Success</span> Stories
              </h2>
            </div>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}

function TestimonialSlider({ testimonials }) {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default to show 2 testimonials on medium and larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // For smaller screens (tablet and below)
        settings: {
          slidesToShow: 1, // Show 1 testimonial at a time on smaller screens
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="col-lg-12 sc-md-mt-0 sc-sm-mt-20">
      <div className="sc-slider-content-area">
      <Slider ref={sliderRef} {...settings} className="sc-tes-slider">
        {testimonials.map((testimonial, index) => (
          <div className="stdnt-testi-bx border" key={index}>
            <div className="auother-image">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={100}
                height={100}
                className="img-fluid"
              />
              <span className="img-user-quote">
                <FormatQuoteIcon />
              </span>
            </div>
            <div className="sc-testimonial-content">
              <span className="contnt-testi-quote">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <div className="sc-auother-texty">
                <h5 className="title">{testimonial.name}</h5>
                <p className="card-text text-muted small">{testimonial.program}</p>
                <ul className="testi-rating">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Star
            key={i}
            className={`me-1 ${i < testimonial.rating ? 'text-warning' : 'text-muted'}`}
            fill={i < testimonial.rating ? 'currentColor' : 'none'}
            size={16}
          />
                    </li>
                  ))}
                </ul>
              </div>
              <p>{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* <button
        className="swiper-button-next"
        onClick={goToPrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="swiper-button-prev"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button> */}
    </div>
    </div>
  );
}