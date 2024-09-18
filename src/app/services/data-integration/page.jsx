import Hero from '../../components/data-integration/hero'
import Body from '../../components/data-integration/body'
import MaxContainer from '../../components/common/maxContainer'
import Banner from '../../components/data-integration/banner'
import Contact from '../../components/common/contact';

const DataIntegration = () => {
    return (
        <>
            <Hero />
            <Body />
            <MaxContainer>
                <Banner />
                <Contact />
            </MaxContainer>
        </>
    );
}

export default DataIntegration;