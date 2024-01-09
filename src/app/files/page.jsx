
import NasaImages from '../components/NasaImages';
import Footer from '../components/Footer';
import Nav from "../components/Nav";

export default function Link() {
  return (
    <div>
      <Nav />
      <div>
        <div>
          <NasaImages />
        </div>
        <div>
        <div class="bg-white h-[0.5px] mt-10"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
