import Image from 'next/image';
import BookIcon from '@mui/icons-material/Book';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';

export default function Counter() {
  return (
    <section className="sc-counter-style-two bg-light">
      <div className="funfact-one__inner">
        <div
          className="funfact-one__bg"
          style={{
            backgroundImage: "url('/assets/images/funfact-bg-1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div className="container position-relative">
        <div className="sc-long-width sc-counter-bg2">
          <div className="count-wrp align-items-center">

            {/* Course Option */}
            <div className="funfact-one__item funfact-one__item--secondary">
            <div className="funfact-one__icon">
                <span className="funfact-one__icon__inner">
                <BookIcon style={{ fontSize: '40px'}} />
                </span>
            </div>
            <h3 className="funfact-one__title count-box counted">
                <div className="sc-count">
                <span className="odometer" data-count="98">98</span> +
                </div>
            </h3>
            <p className="funfact-one__text">Course Option</p>
            </div>

            {/* Years Of Experience */}
            <div className="funfact-one__item funfact-one__item--secondary">
              <div className="funfact-one__icon">
                <span className="funfact-one__icon__inner">
                  <MilitaryTechIcon style={{ fontSize: '40px'}}/>
                </span>
              </div>
              <h3 className="funfact-one__title count-box counted">
                <div className="sc-count">
                  <span className="odometer" data-count="5">5</span> +
                </div>
              </h3>
              <p className="funfact-one__text">Years Of Experience</p>
            </div>

            {/* Happy Students */}
            <div className="funfact-one__item funfact-one__item--secondary">
              <div className="funfact-one__icon">
                <span className="funfact-one__icon__inner">
                  <SchoolIcon style={{ fontSize: '40px'}} />
                </span>
              </div>
              <h3 className="funfact-one__title count-box counted">
                <div className="sc-count">
                  <span className="odometer" data-count="3100">782</span> +
                </div>
              </h3>
              <p className="funfact-one__text">Happy Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}