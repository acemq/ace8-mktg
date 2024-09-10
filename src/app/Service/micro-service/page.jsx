import Hero from '../../components/micro-service/hero'
import Body from '../../components/micro-service/body'
import Banner from '../../components/micro-service/banner'
import Contact from '../../components/common/contact'
import MaxContainer from '../../components/common/maxContainer'
const MicroService = () => {
    return (
        <>
            <Hero />
            <Body />
            <div className="sm:bg-white sm:py-[3rem]">
                <MaxContainer>
                    <Banner />
                    <Contact />
                </MaxContainer>
            </div>
        </>
    );
}

export default MicroService;