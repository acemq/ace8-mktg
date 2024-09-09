import Hero from '../../components/incidentManagement/hero'
import Body from '../../components/incidentManagement/body'
import Banner from '../../components/incidentManagement/banner'
import MaxContainer from '../../components/common/maxContainer'
import Contact from '../../components/common/contact'


const IncidentManagement = () => {
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

export default IncidentManagement;