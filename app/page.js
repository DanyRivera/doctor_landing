import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Appointment from "@/components/Appointment";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Skills />
      <Appointment />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
