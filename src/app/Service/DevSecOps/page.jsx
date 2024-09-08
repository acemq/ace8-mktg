import MaxContainer from '../../components/common/maxContainer'
import Hero from '../../components/devSecOps/hero'
import Body from '../../components/devSecOps/body'
import Contact from '../../components/common/contact'
const DevSecOps = () => {
    return (

        <>
            <MaxContainer>
                <Hero />
            </MaxContainer>
            <Body />
            <MaxContainer>
                <Contact />
            </MaxContainer>
        </>
    );
}

export default DevSecOps;