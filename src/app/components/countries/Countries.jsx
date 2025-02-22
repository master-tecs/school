import Image from "next/image";


const countries = [
    {
      name: "Australia",
      image: "/assets/images/countries/australia.jpg",
      flag: "/assets/images/countries/australia-flag.svg",
    },
    {
      name: "UK",
      image: "/assets/images/countries/uk.jpg",
      flag: "/assets/images/countries/uk-flag.svg",
    },
    {
      name: "Canada",
      image: "/assets/images/countries/canada.jpg",
      flag: "/assets/images/countries/canada-flag.jpg",
    },
    {
      name: "Germany",
      image: "/assets/images/countries/germany.jpg",
      flag: "/assets/images/countries/germany-flag.webp",
    },
  ]
  export default function Countries() {
  return (
    
    <section className="py-5">
        <div className="container">
          <h2 className="sec-title__title display-4 text-center mb-5">Top <span className="primary-color italic">Destinations</span></h2>
          <div className="row g-4">
            {countries.map((country) => (
              <div key={country.name} className="col-md-6 col-lg-3">
                <div className="position-relative">
                  <div className="position-absolute top-0 end-0 m-3 z-1">
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      width={32}
                      height={32}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="position-relative overflow-hidden rounded">
                    <div style={{ height: '250px', position: 'relative' }}>
                      <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="object-fit-cover"
                      />
                    </div>
                  </div>
                  <h3 className="h4 mt-3 text-center fs-3 fw-bold">{country.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}