
import Epic from '../components/Epic';
import Footer from '../components/Footer';
import Nav from "../components/Nav";

export default function Link() {
  return (
    <div>
      <Nav />
      <div>
        <div>
         <Epic />
        </div>
        <div>
        <div className="bg-white h-[0.5px] mt-10"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
