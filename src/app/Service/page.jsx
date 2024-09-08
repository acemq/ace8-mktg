import MaxContainer from '../components/common/maxContainer'
import Hero from '../components/service/hero'
import Methodology from '../components/service/methodology'
import Capabilities from '../components/service/capabilities'
import Banner from '../components/service/banner'
import Contact from '../components/common/contact'
const Service = () => {
    return (
        <>
            <MaxContainer>
                <Hero />
                <Methodology />
            </MaxContainer>
            <Capabilities />
            <MaxContainer>
                <Banner />
                <Contact />
            </MaxContainer>
        </>
    );
}

export default Service;