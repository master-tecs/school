'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageSlider({ slides, interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize nextSlide to prevent recreation on every render
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  // Memoize prevSlide for consistency
  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval); // Use the memoized nextSlide
    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [nextSlide, interval]); // Dependencies: nextSlide and interval

  return (
    <div className="card shadow p-0">
      <div className="card-body p-0">
        <div className="position-relative" style={{ height: '500px' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`position-absolute top-0 start-0 w-100 h-100 transition-opacity ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transition: 'opacity 0.5s ease-in-out' }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-4 text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)' }}>
                <h2 className="h3 fw-bold mb-2">{slide.title}</h2>
                <p className="mb-0">{slide.description}</p>
              </div>
            </div>
          ))}
          {/* <div className="position-absolute bottom-3 start-50 translate-middle-x d-flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm rounded-circle ${
                  index === currentSlide ? 'btn-light' : 'btn-outline-light'
                }`}
                style={{ width: '12px', height: '12px', padding: 0 }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div> */}
         <button
  onClick={prevSlide}
  className="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y opacity-75 hover-opacity-100"
  style={{
    transition: 'opacity 0.3s, transform 0.2s, background-color 0.3s ease-in-out',
    zIndex: 10,
    borderRadius: '25px',
    padding: '0.5rem 1.5rem',
    border: '2px solid #fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#333',
  }}
  aria-label="Previous slide"
  onMouseEnter={(e) => e.target.style.backgroundColor = 'purple'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
>
  <ChevronLeft
    className="w-4 h-4"
    style={{ transform: 'scale(1.2)' }}
  />
</button>

<button
  onClick={nextSlide}
  className="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y opacity-75 hover-opacity-100"
  style={{
    transition: 'opacity 0.3s, transform 0.2s, background-color 0.3s ease-in-out',
    zIndex: 10,
    borderRadius: '25px',
    padding: '0.5rem 1.5rem',
    border: '2px solid #fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#333',
  }}
  aria-label="Next slide"
  onMouseEnter={(e) => e.target.style.backgroundColor = 'purple'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
>
  <ChevronRight
    className="w-4 h-4"
    style={{ transform: 'scale(1.2)' }}
  />
</button>
        </div>
      </div>
    </div>
  )
}

