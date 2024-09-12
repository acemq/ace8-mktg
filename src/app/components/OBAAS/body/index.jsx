import MaxContainer from '../../common/maxContainer'
import  Form from '../../common/contact'

const Index = () => {
    return (
        <>
            <Intro />
            <SubIntro />
        </>
    );
}

export default Index;


const Intro = () => (
    <section className="bg-white">
        <MaxContainer>
            <div className="px-[3rem] text-black text-center py-[3rem]">
                <p className="">At Ace8, we acknowledge a critical industry challenge—delayed developer productivity due to lengthy onboarding processes, leading to significant financial losses. Developers often remain idle, costing businesses millions annually.</p>
                <img src="/critical_industry.svg" alt="icons" className="" />
            </div>
        </MaxContainer>
    </section>
)

const SubIntro = () => (
    <section className="">
        <MaxContainer>
            <div className="px-[3rem] py-[5rem]">
                <h2 className="text-[3rem] font-[700] mb-[1rem]"><span className="font-[400]">Our</span> Solution:</h2>
                <h3 className="sub-header"><span className="text-[#FF88C3]">Dev Containers</span> <span className="font-[400]"> for Swift,
                    Customized</span> Onboarding</h3>
                <p className="py-[2.5rem]">Enter a solution-oriented approach! We advocate for "dev containers" to seamlessly connect developers to cloud environments within hours, not weeks. This revolutionary method customizes dev-containers to fit the specific roles of your developers, ensuring rapid onboarding and substantial cost savings.</p>
                <img src="/OBAAS_code_snippet.png" alt="" className="mb-[2rem]" />
                <div className="flex justify-between mb-[3rem]">
                    <div className="w-[14rem]">
                        <h4 className="text-[1.5rem] mb-[1rem] font-[700]"><span className="font-[400]">Customized</span> <span className="text-[#DC71AD]">Dev-Containers:</span></h4>
                        <p className="text-[1.2rem]">Tailored to fit the unique roles of your developers, our solution ensures they get to meaningful work swiftly, saving both time and resources.</p>
                    </div>
                    <div className="w-[14rem] text-end">
                        <h4 className="text-[1.5rem] mb-[1rem] font-[700]"><span className="font-[700] text-[#DC71AD]">Fast and</span><span className="font-[400]"> Painless</span> <span className="text-[#DC71AD]">Onboarding</span></h4>
                        <p className="text-[1.2rem]">A streamlined process that equips developers with all necessary tools, eliminating idle time and expediting their journey to productivity.</p>
                    </div>
                </div>
                <div className="flex justify-between mb-[1rem]">
                    <div className="w-[14rem]">
                        <h4 className="text-[1.5rem] mb-[1rem] font-[700]"><span className="font-[400]">SecOps-</span><span className='text-[#DC71AD]'>Vetted Tooling</span></h4>
                        <p className="text-[1.2rem]">Trust in a mix of tools vetted by your Security Operations (SecOps) team, ensuring a secure and compliant onboarding experience.</p>
                    </div>
                    <div className="w-[14rem] text-end">
                        <h4 className="text-[1.5rem] mb-[1rem] font-[700]"><span className="text-[#DC71AD]">Integration with</span> <span className="font-[400]">Enterprise</span> <span className="text-[#DC71AD]">Systems</span></h4>
                        <p className="text-[1.2rem]">Seamlessly integrate with your existing enterprise systems, including AWS Cloud, Jira, Bitbucket, GitHub, and more.</p>
                    </div>
                </div>
                <div className="w-[14rem] mt-[2rem] mb-[5rem] text-center mx-auto">
                    <h4 className="text-[1.5rem] mb-[1rem] font-[700] text-[#DC71AD]">Fully <span className=""> Managed</span> Service</h4>
                    <p className="text-[1.2rem]">Enjoy the benefits of a fully managed service running on your infrastructure, minimizing the burden on your team.</p>
                </div>
                <div className="">
                    <h2 className="sub-header text-center mb-[2rem]">Why <span className="font-[400]">Choose </span><span className="text-[#9B86FE]">OBaaS</span> for <span className='text-[#9B86FE]'> Developer</span> Onboarding?</h2>
                </div>
                <img src="/heroku.png" alt="heroku icon" className="mb-[2rem]" />
                <img src="/properties.png" alt="properties" className="" />
            </div>
            <div className="bg-white px-[3rem] text-black">
                <h3 className="sub-header text-center"><span className="text-[#FF88C3]">Accelerate onboarding,</span><span className="font-[400]"> reduce</span> idle time, and <span className="font-[400]"> witness immediate</span> productivity gains. <span className="font-[400]]"> Choose</span> <span className="text-[#FF88C3]"> OBaaS</span> for a customized, fully managed, <span className="font-[400]"> and</span> swift onboarding experience.</h3>
            </div>
            <Banner
                header={<h2 className='sub-header text-center'><span className="">Ready to revolutionize</span> your <span className="">developer</span> onboarding and unlock unparalleled <span className="">productivity?</span></h2>}
                text={'Choose Ace8\'s OBaaS for swift, customized onboarding that delivers immediate impact. Accelerate your developers\' journey to meaningful work, eliminate idle time, and enjoy the benefits of a fully managed service running on your infrastructure. Don\'t let delayed onboarding hinder your productivity and cost your business millions. Contact us today to explore how "Dev Containers" can fast-track your onboarding process and maximize your ROI.'}
                btn={'Transform Developer Onboarding with OBaaS'}
                backgroundColor={'bg-black'}
                containerStyles={'sm:px-[10rem]'}
            />
            <Form />
        </MaxContainer>
    </section>
)



const Banner = ({ header, text, btn, containerStyles, backgroundColor }) => {
    return (
        <div className={`${containerStyles}`}>
            <div className={`px-[3rem] mt-[5rem] py-[2rem] sm:py-[5rem] ${backgroundColor}`}>
                {header}
                <p className="text-center mt-[3rem] sm:w-[90rem] sm:mx-auto">{text}</p>
                {btn && <button className="btn mt-[2.5rem] border mx-auto block">{btn}</button>}
            </div>
        </div>
    )
}