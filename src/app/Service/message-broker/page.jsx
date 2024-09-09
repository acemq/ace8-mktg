import Hero from '../../components/message-broker/hero';
import Technology from '../../components/message-broker/technologies'
import Service from '../../components/message-broker/services'
import Achievement from '../../components/message-broker/achivement'
import Values from '../../components/message-broker/values'
import MaxContainer from '../../components/common/maxContainer'
import Banner from '../../components/message-broker/banner'
import  Contact from '../../components/common/contact'

const MessageBroker = () => {
    return (
        <>
            <Hero />
            <Technology />
            <Service />
            <Achievement />
            <Values />
            <MaxContainer>
                <Banner />
                <Contact />
            </MaxContainer>
        </>
    );
}

export default MessageBroker;