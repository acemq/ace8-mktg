import MaxContainer from '../../../components/common/maxContainer'



const Index = () => {
    return (
        <section className="bg-white">
            <MaxContainer>
                <div className="px-[3rem] flex flex-col pt-[5rem] sm:pb-[2rem]">
                    <h3 className="sub-header sm:mb-[5rem] sm:w-[40rem] text-black text-center self-center">Our <span className="text-[#5747A5]">Differentiator </span> & <span className="font-[400]">Value</span></h3>
                    <img src="/values_broker.webp" className='hidden sm:block' alt="" />
                    <img src="/troubleshooting_broker.png" className='sm:hidden block mt-[3rem]' alt="" />
                    <img src="/assessment_broker.png" className='sm:hidden block mt-[5rem]' alt="" />
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;