import Image from "next/image";

export default function Colleges() {
  return (
    <section className="py-5">
    <div className="container">

        {/* <h6 className="sec-title__tagline mt-3 mb2">WHY US</h6>
                <h3 className="sec-title__title mb-4">
                Why Choose School Abroad?
                </h3> */}

      <h2 className="display-5 text-center mb-5">We help you find the ideal institutions for student success</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center">
        {universities.map((university, index) => (
          <div key={index} className="col d-flex align-items-center justify-content-center">
            <div className="bg-light rounded-circle p-3 shadow-sm" style={{ width: '120px', height: '120px' }}>
              <Image
                src={university.logo}
                alt={university.name}
                width={100}
                height={100}
                className="img-fluid"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}


const universities = [
    { name: "Arizona University", logo: "/assets/images/colleges/Arizona-University-Logo.png" },
    { name: "Chicago University", logo: "/assets/images/colleges/Chicago-University-Logo.png" },
    { name: "Columbia University", logo: "/assets/images/colleges/Columbia-University-Logo.png" },
    { name: "Harvard University", logo: "/assets/images/colleges/Harvard-University-Logo.png" },
    { name: "Georgia University", logo: "/assets/images/colleges/Georgia-University-Logo.png" },
    { name: "Pittsburgh University", logo: "/assets/images/colleges/Pittsburgh-University-Logo.png" },
  ]
  
  