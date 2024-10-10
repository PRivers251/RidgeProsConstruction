import Cards from "../app/home/layout/Cards"
import Hero from "../app/home/layout/Hero"
import InfoSection from "./home/layout/InfoSection";

export default function Home() {
  return (
      <div className="container mx-auto">
        <Hero />
        <Cards />
        <InfoSection />
    </div>
  );
}
