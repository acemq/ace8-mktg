import MaxContainer from '../../common/maxContainer'
import Image from 'next/image';
import Contact from '../../common/contact'

const Index = () => {
    return (
        <section className="">
            <MaxContainer>
                <div className="px-[3rem] py-[3rem]">
                    <div className="px-[.5rem] py-[1.5rem]  bg-service-card-gradient rounded-[.8rem]">
                        <img src="/open_source_ace_logo.svg" className='w-[20rem] mx-auto mb-[2rem]' alt="ace logo" />
                        <p className="text-center">As the usage of Open Source software increases, organizations face growing risks relying solely on online documentation and Open Source communities for technology support. OpenAce steps in to provide expert consulting and comprehensive support services, ensuring your teams harness the benefits of open-source technologies with confidence and meet enterprise requirements, including compliance with regulations such as GDPR, HIPAA, FIPS, and PCI.</p>
                    </div>
                    <Image src='/mobile_app_launch.png' width={1000} height={700} className='w-[35rem] mt-[3rem]' alt='mobile app launch' />
                </div>
                <Banner
                    header={<h3 className="sub-header text-center">Who is <span className="text-[#FF88C3]">OpenAce?</span></h3>}
                    text={'OpenAce is powered by Ace8 and is backed by a team of Open Source Architects, Thought leaders, and contributors with extensive Open Source experience. Our passion for Open Source, coupled with extensive experience working on an array of Open Source implementations globally from a business and technological perspective, uniquely equips us to drive true enterprise value with Open Source Technologies.'}
                    btn={'Talk to an Expert'}
                    backgroundColor={'bg-black'}
                    containerStyles={'mt-[5rem]'}
                />
                <Banner
                    header={<h3 className='sub-header w-[24rem] mx-auto text-center'>Open <span className="font-[400]">Source</span> <span className="text-[#FF88C3]">Support</span></h3>}
                    text={'OpenAce, delivers reliable consulting and technical support services for businesses seeking assistance with Open Source technologies. Our experienced team of Open Source Architects provides 24/7 support and tailored solutions across various industries.'}
                    btn={false}
                    backgroundColor={'bg-transparent'}
                    containerStyles={'mt-[2rem]'}
                />
                <div className="mx-[3rem]">
                    <img src="/core_technology.svg" alt="core technology" className="sm:hidden mt-[3rem] mb-[4rem]" />
                    <h3 className="sub-header w-[20rem] mx-auto text-center">Our Support Process</h3>
                    <p className="font-[700] text-[2rem] mt-[1rem]"><span className="font-[400]">Maximize Your System's</span> Uptime with <span className="text-[#FF88C3]">OpenAce Technical Support</span></p>
                    <img src="/supports.png" alt="supports" className="mt-[2rem] sm:hidden" />

                    <div className="mt-[3rem]">
                        <div className="mx-auto w-[35rem]">
                            <h3 className="sub-header text-center"><span className="text-[#9B86FE]">Technical</span> Support <span className="font-[400]">Benefits</span></h3>
                            <p className="w-[28rem] text-center mb-[2rem] mx-auto">Make Your Open Source Technologies Enterprise-Ready</p>
                        </div>
                        <img src="/support_benefit.svg" alt="benefits" />
                    </div>

                    <div className="">
                        <h3 className="sub-header text-center"><span className="font-[400]">Case</span> Studies</h3>
                        <div className="">
                            <Banner
                                header={<h3 className='sub-header text-center'><span className="font-[400]">Explore</span> transformative case studies showcasing the <span className="font-[400]">impact of</span> our Open Source architects.</h3>}
                                text={'Delve into success stories of businesses leveraging Open Source technology for optimal workflows, collaboration, efficiency, and cost reduction.'}
                                btn={'learn more'}
                                containerStyles={'bg-black'}
                            />
                        </div>
                    </div>
                </div>
                <Banner
                    header={<h2 className='sub-header text-center'><span className="font-[400]">Unlock</span> the Power of <span className="text-[#8FD5CC]">Open Source</span> for Your <span className="font-[400]">Business Today</span></h2>}
                    text={'OpenAce provides businesses with access to experienced Open Source Architects who can help them unlock the power of Open Source technologies. Contact us today to learn how we can assist you in leveraging Open Source to achieve your business objectives.'}
                    btn={'Talk To An Expert'}
                    containerStyles={'bg-black'}
                />
                <Contact />
            </MaxContainer>
        </section>
    );
}

export default Index;





const Banner = ({ header, text, btn, containerStyles, backgroundColor }) => {
    return (
        <div className={`sm:px-[10rem] ${containerStyles}`}>
            <div className={`px-[3rem] mt-[5rem] py-[2rem] ${backgroundColor}`}>
                {header}
                <p className="text-center mt-[3rem]">{text}</p>
                {btn && <button className="btn mt-[2.5rem] border mx-auto block">{btn}</button>}
            </div>
        </div>
    )
}