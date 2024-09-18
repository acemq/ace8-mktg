import Hero from '../../components/gemfire/hero'
import Body from '@/app/components/gemfire/body';
import MaxContainer from '../../components/common/maxContainer'
import Banner from '../../components/gemfire/banner'
import Contact from '../../components/common/contact'

const GemFire = () => {
    return (
        <>
            <Hero />
            <Body />
            <div className="sm:bg-white">
                <MaxContainer>
                    <Banner />
                    <Contact />
                </MaxContainer>
            </div>
        </>
    );
}

export default GemFire;