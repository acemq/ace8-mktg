import Image from "next/image";
import Navbar from './components/common/navbar';
import Hero from './components/home/hero'
import About from './components/home/about'
import Brands from './components/home/brand'
import Domians from './components/home/domains'
import Services from './components/home/services'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-col sm:flex-col-reverse">
        <About />
        <Brands />
      </div>
      <Domians />
      <Services />
    </>
  );
}
