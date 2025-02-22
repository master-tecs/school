import styles from "./page.module.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Audients from "./components/audients/Audients";
import Student from "./components/student/Student";
import WhyUs from "./components/whyUs/WhyUs";
import Countries from "./components/countries/Countries";
import Counter from "./components/counter/Counter";
import Services from "./components/services/services";
import Cta from "./components/cta/Cta";
import Testimonials from "./components/testimonials/Testimonials";
import FeaturedProgram from "./components/FeaturedProgram/FeaturedProgram";
import Footer from "./components/footer/Footer";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Colleges from "./components/colleges/Colleges";
import AppointmentForm from "./components/Appointment/appointment-form";
// import EmblaCarousel from "./components/EmblaCarousel/EmblaCarousel";

// const OPTIONS = { dragFree: true, loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div className="">
      {/* Header */}
      {/* <Header /> */}

      {/* Hero */}
      <Hero />

      <Audients />

      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}

      <Student />

      <Countries />

      <WhyUs />

      <Counter />

      <Services />

      {/* Featured Program */}
      {/* <FeaturedProgram /> */}

      {/* cta */}
      {/* <Cta /> */}

      <Testimonials />

      <Colleges />

    <AppointmentForm />

      {/* Whatsapp Button */}
      <a href="https://wa.link/hb13ks" target="_blank" className="btn-whatsapp-pulse">
  <WhatsAppIcon />
</a>
      {/* Footer */}
      {/* <Footer style={{ fontSize: '50px'}} /> */}


    </div>
  );
}
