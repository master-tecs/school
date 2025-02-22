import ImageSlider from "./ImageSlider";

const slides = [
    {
      title: "University",
      description:
        "Partner with us to expand your global presence and attract top talent from around the world.",
      image: "/assets/images/slides/school.jpg",
    },
    {
      title: "BECOME AN AGENT",
      description:
        "Elevate your agency's success by maximizing your services with our trusted partnership.",
      image: "/assets/images/slides/partners.jpg",
    },
    {
      title: "Student",
      description:
        "Empower your future with our expert guidance and achieve your academic dreams with clarity.",
      image: "/assets/images/slides/student.jpg",
    },
  ]

export default function Audients() {
    return (
      <section className="coverflow-slide-sctn">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sc-heading-area sc-mb-55 text-center">
                <h2>
                  We empower global education by&nbsp;
                  <span style={{ color: "#3498db" }}>connecting schools,</span>
                  <br /> students, and recruitment partners
                </h2>
              </div>
            </div>
          </div>
  
          <div className="row w-100">
            {/* <div className="col-12 col-md-10 col-lg-8 mx-auto"> */}
                <ImageSlider slides={slides} interval={5000} />
            {/* </div> */}
          </div>
        </div>
      </section>
    );
  }