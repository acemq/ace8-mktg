import MaxContainer from '../../common/maxContainer'


const Index = () => {
    return (
        <section className="bg-white text-black pt-[7.8rem] pb-[5rem]">
            <MaxContainer>
                <div className="flex px-[3rem] sm:px-[10rem] flex-col">
                    <h1 className="header sm:w-[90rem] sm:self-center text-center mb-[1rem]"> <span className="text-[#5747A5]">AceMQ</span><span className="font-[400]"> Your Trusted</span> Messaging & Queuing <span className="text-[#5747A5]">Services</span> Partner</h1>

                    <p className="text-center sm:w-[50rem] self-center mb-[5rem]"> Expertise, Support, and Value for Your Messaging & Queuing Implementation</p>

                    <img src="/broker.png" className='mb-[2rem] sm:hidden' alt="" />
                    <img src="/broker_sm.png" className='mb-[2rem] sm:w-[65rem] ml-[45rem] sm:mb-[5rem] sm:block hidden' alt="" />
                    <p className="text-center sm:w-[100rem] sm:self-center"> At AceMQ, we have developed a comprehensive practice around message brokers. Our engineers possess extensive experience working closely with message broker products, including RabbitMQ. Their in-depth knowledge and architectural understanding of RabbitMQ allow us to seamlessly integrate it into your unique technology stack. As an internationally accredited partner of RabbitMQ, we are the go-to choice for all your message broker service needs.</p>

                    <button className="btn border border-[#5545A0] self-center mt-[3rem]">Learn More</button>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;