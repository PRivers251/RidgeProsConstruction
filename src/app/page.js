
import Services from "./home/components/Services"
import Hero from "./home/components/Hero"
import AboutUs from "./home/components/AboutUs";
import LeadForm from "../components/layout/leadForm/LeadForm";
import Reviews from './home/components/Reviews'

export default function Home() {
  return (
      <div className="w-full">
        <Hero />
        <LeadForm />
        <Services />
        <Reviews />
        <AboutUs />
    </div>
  );
}
