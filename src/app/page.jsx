
import NasaImages from './NasaImages';
import Footer from './components/Footer';
import Nav from "./components/Nav";

export default function Home() {
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
