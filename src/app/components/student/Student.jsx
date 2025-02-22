import Image from 'next/image';

export default function Student() {
  return (
    <section className="about-one">
      <div
        className="about-one__bg"
        style={{ backgroundImage: 'url(/assets/images/about-bg-shape.png)' }}
      ></div>
      <div className="container">
        <div className="row gutter-y-50">
          {/* Left Column */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="about-one__image">
              <div className="about-one__image__one">
                <Image
                  src="/assets/images/students/student-1.png"
                  alt="About Image 1"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <div className="about-one__image__two">
                <Image
                  src="/assets/images/students/student-2.jpg"
                  alt="About Image 2"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <Image
                src="/assets/images/students/about-shape-1.png"
                alt="About Shape"
                className="about-one__image__shape"
                width={200}
                height={200}
              />
              <div className="about-one__image__circle">
                <div className="about-one__image__circle__inner"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="about-one__content">
              <div className="sec-title">
                <h6 className="sec-title__tagline">Who Are We?</h6>
                <h3 className="sec-title__title">
                About School Abroad
                </h3>
              </div>
              <div className="about-one__description">
                <p>
                School Abroad (formally <b>School Outside</b>) is a dedicated educational travel and global student recruitment agency committed to empowering students with transformative academic experiences. We specialize in bridging the gap between aspiring learners and renowned educational institutions across the globe, fostering opportunities that go beyond borders. 
                </p>
                <p>
                With a mission to broaden horizons and promote cultural exchange, we provide personalized guidance, comprehensive support, and tailored solutions to help students achieve their academic and career aspirations. 
                </p>
                <p>
                Whether it’s selecting the right institution, navigating the application process, or offering visa assistance, our goal is to ensure a seamless journey towards realizing educational dreams and unlocking potential on an international stage.
                </p>
              </div>
              <div className="abt-btn">
                <a className="sc-primary-btn" href="/about">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}