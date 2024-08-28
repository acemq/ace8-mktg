import Image from "next/image";
const Index = () => {
    const services = [
        {
            image: '/devsec.svg',
            Name: 'DevSecOps',
            active: false,
            role: 'Bridging the gap between development,  security, and operations. Achieve efficient and secure software delivery through collaboration, automation, and a security-first approach.'
        },
        {
            image: '/service.svg',
            Name: 'Environment as a service',
            active: false
        },
        {
            image: '/manag.svg',
            Name: 'Incident Management',
            active: false,
            role: 'Top-notch full-stack  incident management services that prioritize preparation, documentation, and proactive measures to minimize downtime and avoid loss of revenue.'
        },
        {
            image: '/settings.svg',
            Name: 'DevSecOps',
            active: false,
            role: 'Bridging the gap between development,  security, and operations. Achieve efficient and secure software delivery through collaboration, automation, and a security-first approach.'
        },
        {
            image: '/message.svg',
            Name: 'Message Brokers',
            active: false,
            role: 'Your trusted partner for seamless integration of message brokers. With troubleshooting expertise, consulting and assessment services, and comprehensive support, we optimize performance and ensure smooth operations for your technology stack.'
        },
        {
            image: '/design.svg',
            Name: 'Microservices Design',
            active: false,
            role: 'AceMQ offers comprehensive microservices design, development, and refactoring services that strictly adhere to industry best practices, including loose coupling and the 12Factor approach.'
        },
        {
            image: '/integration.svg',
            Name: 'Data Analytics Integration',
            active: false,
            role: 'Differentiating through our unique integration approach. Seamlessly integrate e-commerce data with Databricks/Snowflake. Design consulting, cost optimization, and fault tolerance ensure efficient, uninterrupted access to critical data.'
        },
        {
            image: '/testing.svg',
            Name: 'Automated Testing',
            active: true,
            role: 'your e-commerce application. Our unique approach includes AI-enhanced test code, seamless  CI/CD integration, and crowd-sourced test case development to save time and resources. '
        },
    ]
    return (
        <section>
            <ServiceMobile services={services} />
            <ServiceDesktop services={services} />
            <div className=" responsive-grid px-[3rem] sm:px-[10rem] mt-[6rem] flex  flex-col-reverse gap-y-[2rem]">
                { services.map((service, index) => <Card service={service} key={index} />) }
            </div>
        </section>
    );
}

export default Index;

const ServiceMobile = ({ services }) => {
    return (
        <div className="flex flex-col items-center mt-[2rem] px-[3rem] sm:px-[10rem] sm:hidden">
            <div className="border border-accent-300 px-[2.4rem] rounded-[2rem] py-[.8rem]">
                <p className="text-[1rem]">Services We Provide</p>
            </div>

            <h2 className="text-[2.5rem] font-[700] w-[220px] text-center mt-[1.8rem]">What We Can <span className="text-accent-300">Do</span>  <span className="font-[500]">For You:</span></h2>
            <p className="text-center text-[1.1rem] mb-[2rem]">We are a diverse Team of engineers with 100's of years of  experience in software development. We leverage our experience and proven methodologies to bring extreme value to any dev shop.</p>
            <div className="bg-[#161B22] rounded-[.8rem] w-[100%] px-[1.8rem] py-[1rem]">
                <div className="bg-[#11161E] py-[2.5rem]">
                    <div className="flex px-[2.8rem] gap-[1rem] font-[600] text-[2rem]">
                        <Image src="/settings.svg" width={17} height={17} alt="" />
                        <h4>Our Services</h4>
                    </div>
                    <ul className="mt-[3rem] flex flex-col gap-[1.5rem]">
                        {services.map((service, index) => <li className={`flex px-[2.8rem] py-[.8rem] gap-[1rem] ${service.active ? "bg-accent-300" : ''}`} key={index}><Image src={service.image} width={17} height={17} /> <p className="text-[1.3rem]">{service.Name}</p></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const ServiceDesktop = ({ services }) => {
    return (
        <div className="px-[3rem] sm:px-[10rem] sm:flex gap-x-[4rem] hidden">
            <div className="overflow-hidden sm:w-[3.7rem] h-[50rem] hidden sm:block">
                <img src="/mile_5.png" className="w-[100%]" alt="icon" />
            </div>
            <div className="flex justify-between w-[100%]">
                <div className="flex flex-col">
                    <div className="border border-white px-[2.4rem] rounded-[2rem] mb-[2rem] py-[.8rem] self-start">
                        <p className="text-[1.2rem]">Featured Services</p>
                    </div>
                    <div className="w-[40rem]">
                        <h2 className="font-[700] text-[5rem] mb-[2rem]">What We Can Do <span className="font-[400]">For You:</span></h2>
                        <p className="text-[1.5rem]">We are a diverse Team of engineers with 100's of years of  experience in software development. We leverage our experience and proven methodologies to bring extreme value to any dev shop.</p>
                    </div>
                </div>
                <div className="flex bg-[#161B22] p-[1.5rem] gap-x-[2rem]">
                    <div className="bg-[#11161E] py-[2.5rem]">
                        <div className="flex px-[2.8rem] gap-[1rem] pt-[3rem]">
                            <Image src="/settings.svg" className="w-[2.5rem] h-[2.5rem]" width={17} height={17} alt="" />
                            <h4 className="font-[600] text-[1.5rem]">Featured Services</h4>
                        </div>
                        <ul className="mt-[1.5rem] flex flex-col gap-[1.5rem]">
                            {services.map((service, index) => <li className={`flex px-[2.8rem] py-[.8rem] gap-[1rem] ${service.active ? "bg-accent-300" : ''}`} key={index}><Image src={service.image} className="w-[2.5rem] h-[2.5rem]" width={17} height={17} /> <p className="text-[1.3rem]">{service.Name}</p></li>)}
                        </ul>
                    </div>
                    <div className="bg-[#0D1117] p-[1.5rem] rounded-[1rem]">
                        <div className="bg-[#161B22] rounded-[.8rem]">
                            <div className="px-[3rem] mb-[3rem] pt-[3rem]">
                                <Image src='/testing.svg' width={84} height={84} />
                                <h2 className="font-[700] text-[2.5rem] w-[15rem]">Automated Testing</h2>
                            </div>
                            <Image src='/automated-testing.png' width={396} height={367} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Card = ({ service }) => (
    <div className="bg-black py-[1.8rem] sm:py-[2.5rem] px-[1.2rem] sm:px-[1.6rem] w-[100%] sm:w-[40rem] flex flex-col items-center sm:items-start">
        <img src={service.image} className="w-[6rem] h-[6rem]" alt="icon" />
        <h4 className="font-[600] mb-1 text-[2rem] sm:mb-[2rem] text-center sm:text-start">{service.Name}</h4>
        <p className="text-[1.2rem] sm:text-[1.7rem] text-center sm:text-start">{service.role}</p>
    </div>
)