import Footer from './components/Footer';
import Nav from "./components/Nav";
import Hero from "@/app/components/Hero";
import Herodos from "@/app/components/Herodos";
import Herotres from "@/app/components/Herotres";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Herodos />
      <Herotres />

      <div>
        <div>
          <div className="bg-white mt-10"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
