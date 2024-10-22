import MaxContainer from '../../common/maxContainer'


const Index = () => {
    return (
        <section className="bg-white text-black pt-[12rem] sm:pt-[18rem] pb-[5rem]">
            <MaxContainer>
                <div className="flex px-[3rem] sm:px-[10rem] flex-col relative">
                    <img src="/happyface.svg" alt="" className="absolute w-[8rem] left-[25rem] hidden sm:block top-[-4rem] h-[8rem]" />
                    <img src="/broker_line.svg" alt="" className="absolute w-[16rem] left-[11rem] hidden sm:block top-[2rem] h-[20rem]" />
                    <img src="/happyface.svg" alt="" className="absolute w-[8rem] left-[5rem] hidden sm:block top-[20rem] h-[8rem]" />
                    <img src="/broker_line2.png" alt="" className="absolute w-[10rem] left-[14rem] hidden sm:block bottom-[30rem] h-[10rem]" />
                    <img src="/happyface.svg" alt="" className="absolute w-[8rem] left-[25rem] hidden sm:block bottom-[23rem] h-[8rem]" />
                    <img src="/happyface.svg" alt="" className="absolute w-[8rem] right-[7rem] hidden sm:block bottom-[23rem] h-[8rem]" />
                    <img src="/broker_line3.svg" alt="" className="absolute w-[27rem] right-[5rem] hidden sm:block top-[5rem] h-[27rem]" />
                    <img src="/happyface.svg" alt="" className="absolute w-[8rem] right-[23rem] hidden sm:block top-[-4rem] h-[8rem]" />
                    <h1 className="header sm:w-[90rem] sm:self-center text-center mb-[1rem]"> <span className="text-[#5747A5]">AceMQ</span><span className="font-[400]"> Your Trusted</span> Messaging & Queuing <span className="text-[#5747A5]">Services</span> Partner</h1>

                    <p className="text-center sm:w-[50rem] self-center mb-[5rem]"> Expertise, Support, and Value for Your Messaging & Queuing Implementation</p>

                    <img src="/broker.png" className='mb-[2rem] sm:hidden' alt="" />
                    <img src="/broker_sm.png" className='mb-[2rem] sm:w-[65rem] ml-[35rem] sm:mb-[5rem] sm:block hidden' alt="" />
                    <p className="text-center sm:w-[100rem] sm:self-center"> At AceMQ, we have developed a comprehensive practice around message brokers. Our engineers possess extensive experience working closely with message broker products, including RabbitMQ. Their in-depth knowledge and architectural understanding of RabbitMQ allow us to seamlessly integrate it into your unique technology stack. As an internationally accredited partner of RabbitMQ, we are the go-to choice for all your message broker service needs.</p>

                    <button className="btn border border-[#5545A0] self-center mt-[3rem]">Learn More</button>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;