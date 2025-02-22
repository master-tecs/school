import Image from "next/image";
import { ArrowRight } from 'lucide-react'

export default function FeaturedProgram() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 text-center mb-5">Featured Program</h2>
        <LargePictureCard
          title="Study Computer Science in Silicon Valley"
          description="Immerse yourself in the heart of tech innovation. Our program offers a unique blend of cutting-edge curriculum and real-world experience in partnership with leading tech companies."
          imageUrl="/placeholder.svg"
          linkText="Learn More"
          linkHref="#"
        />
      </div>
    </section>
  )
}


function LargePictureCard({ title, description, imageUrl, linkText, linkHref }) {
    return (
      <div className="card border-0 shadow overflow-hidden">
        <div className="row g-0">
          <div className="col-md-6 col-lg-7">
            <div className="position-relative" style={{ height: '100%', minHeight: '400px' }}>
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="card-body d-flex flex-column justify-content-center h-100 p-4 p-lg-5">
              <h3 className="card-title h2 mb-4">{title}</h3>
              <p className="card-text mb-4">{description}</p>
              <a href={linkHref} className="btn btn-primary mt-auto d-inline-flex align-items-center">
                {linkText}
                <ArrowRight className="ms-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }