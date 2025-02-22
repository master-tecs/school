import Image from "next/image";

export default function Cta() {
  return (
    <section className="py-5 position-relative rounded-lg bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-primary text-white p-5 rounded shadow-lg">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 className="mb-3">Get Free Online Visa Assessment Today!</h4>
                  <h2 className="mb-4">Top Rated By Customers & Immigration Firms With 100% Success Rate.</h2>
                  <button className="btn btn-light px-4 py-2 mt-3">
                    Apply Visa Now →
                  </button>
                </div>
                <div className="col-md-4">
                  <Image
                    src="/assets/images/graduate.jpg"
                    alt="Visa consultation"
                    width={400}
                    height={300}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}