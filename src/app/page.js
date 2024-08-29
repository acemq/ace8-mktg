import Navbar from './components/common/navbar';
import Hero from './components/home/hero'
import About from './components/home/about'
import Brands from './components/home/brand'
import Domians from './components/home/domains'
import Services from './components/home/services'
import Partners from './components/home/partners'
import Management from './components/home/management'
import Impact from './components/home/impact'
import Mission from './components/home/mission'
import Approach from './components/home/approach'
import Contact from './components/home/contact'
import Formular from './components/home/formula'
import MaxContainer from './components/common/maxContainer/index'
export default function Home() {
  return (
    <>
      <Navbar />
      <MaxContainer>
        <Hero />
        <div className="flex flex-col sm:flex-col-reverse">
          <About />
          <Brands />
        </div>
        <Domians />
        <Services />
        <Impact />
        <Partners />
        <Management />
        <Formular />
        <Mission />
        <Approach />
        <Contact />
      </MaxContainer>
    </>
  );
}
