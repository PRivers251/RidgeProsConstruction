import Services from "./home/layout/Services"
import Hero from "../app/home/layout/Hero"
import AboutUs from "./home/layout/AboutUs";
import QuoteForm from "../components/layout/QuoteForm";

export default function Home() {
  return (
      <div className="w-full">
        <Hero />
        <QuoteForm />
        <Services />
        <AboutUs />
    </div>
  );
}
