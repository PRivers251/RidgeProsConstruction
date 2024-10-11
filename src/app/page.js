import Cards from "../app/home/layout/Cards"
import Hero from "../app/home/layout/Hero"
import InfoSection from "./home/layout/InfoSection";
import FreeQuote from "./home/layout/FreeQuote";

export default function Home() {
  return (
      <div className="w-full">
        <Hero />
        <FreeQuote />
        <Cards />
        <InfoSection />
    </div>
  );
}
