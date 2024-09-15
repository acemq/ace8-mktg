import PlaceTextBesideImage from '../../common/placeTextBesideImage'
import MaxContainer from '../../common/maxContainer'
const Index = () => {
    const capabilities = [
        {
            header: 'DevSecOps:',
            subheader: 'Bridging the Gap between Development, Security, & Operations',
            image: '/service_codesnippet.png',
            title: 'Combine Strengths, Deliver Securely, and Thrive',
            lineColor: '#FF88C3',
            roles: [
                'Efficient and secure software delivery through a cohesive DevSecOps team',
                'Continuous value delivery with automated infrastructure and testing processes',
                'Security-first approach ingrained in our philosophy, prioritizing secure design and implementation',
                'Cultural transformation driving collaboration, efficiency, and shared responsibility'
            ],
            link: '',
            containerStyle: '',
            imageStyle: 'w-[60rem] h-auto'
        },
        {
            header: 'Onboarding as a Service',
            subheader: 'Streamline Your  CI/CD Process',
            image: '/service_codesnippet.png',
            title: 'Deliver Software Faster and Efficiently',
            text: 'Are you tired of lengthy onboarding processes and inefficient software delivery? Our Onboarding as a Service (OBaaS) solution offers a streamlined approach to  CI/CD services, accelerating your development and testing cycle',
            lineColor: '#FF88C3',
            roles: [
                'Efficient and secure software delivery through a cohesive DevSecOps team',
                'Continuous value delivery with automated infrastructure and testing processes',
                'Security-first approach ingrained in our philosophy, prioritizing secure design and implementation',
                'Cultural transformation driving collaboration, efficiency, and shared responsibility'
            ],
            link: '',
            mutipleImage: <OnboardingLeft />,
            containerStyle: 'flex-row-reverse sm:mt-[10rem] mt-[5rem] text-end sm:text-start',
            roleOrientation: 'flex-row-reverse',
            imageStyle: '',
        },
        {
            header: 'Incident Management',
            subheader: 'Bridging the Gap between Development, Security, & Operations',
            image: '/incident_management.png',
            title: 'Combine Strengths, Deliver Securely, and Thrive',
            lineColor: '#4D4DAE',
            roles: [
                'Unique approach combining intense documentation efforts and chaos engineering experiments',
                'Thoroughly prepared to handle any incident that arises',
                'Full 24/7 support with less than 1-hour SLA for Sev 1 incidents',
                'Proactive incident management to minimize downtime and loss of revenue'
            ],
            link: '',
            roleOrientation: 'flex-row',
            containerStyle: 'sm:mt-[10rem] mt-[5rem]',
            imageStyle: 'sm:w-[55rem] sm:h-[53rem]'
        },
        {
            header: 'Message Brokers',
            subheader: 'Scalable Systems with AceMQ',
            image: '/service_broker.png',
            title: 'Achieve Scalability with Asynchronous Messaging',
            lineColor: '#FF88C3',
            roles: [
                'Appropriate Message Patterns : Our experts guide you in selecting the right message patterns for scalability.',
                'Testing Throughput and Latency : AceMQ conducts thorough testing to assess system performance.',
                'Resilient and Available Clusters : Our experts demonstrate best practices for cluster resilience and availability.',
                'Disaster Recovery (DR) Solutions : AceMQ helps implement effective DR solutions.'
            ],
            text: 'At AceMQ, we provide expert guidance for scalable systems through asynchronous messaging. Our services cover the selection of appropriate message patterns and testing of throughput and latency to ensure optimal performance.',
            link: '',
            containerStyle: 'sm:mt-[10rem] text-end sm:text-start flex-row-reverse mt-[5rem] ',
            roleOrientation: 'flex-row-reverse',
            imageStyle: 'sm:w-[65rem] sm:h-auto hidden sm:block'
        },
    ]

    const capabilitiesII = [
        {
            header: 'Microservices Design and Development and Refactoring',
            subheader: 'Transform Your Microservices',
            image: '/design.png',
            text: 'AceMQ offers comprehensive microservices design, development, and refactoring services that strictly adhere to industry best practices, including loose coupling and the 12Factor approach.',
            lineColor: '#FF88C3',
            roles: [
                'Ecommerce Starter kits : Our Team of experts provides solutions tailored to your specific needs, specializing in eCommerce services for customers, carts, orders, returns, payments, and accounting',
                'Golang starter kits : for quick development, expert guidance through microservices architecture, and assistance with refactoring to AWS Lambda.',
                'AWS Lambda migration : process includes careful planning, automated conversion, redesign and optimization, and enhanced functionality and configuration.'
            ],
            link: '',
            containerStyle: 'sm:mt-[15rem]',
            roleOrientation: 'flex-row',
            imageStyle: 'sm:w-[70rem] hidden sm:block h-auto',
            circle: '#fff'
        },
        {
            header: 'Automated Testing',
            subheader: 'Streamline Your Testing Process with Automated Testing',
            title: 'Save Time and Resources with Our Unique Approach',
            image: '/service_automated_testing.png',
            text: 'Are you tired of manual testing for your e-commerce application? Our automated testing service offers a unique approach that saves time, resources, and sets us apart from the competition.',
            lineColor: '#FF88C3',
            roles: [
                'AI-enhanced test code for efficient and effective testing, specializing in eCommerce services for customers, carts, orders, returns, payments, and accounting',
                'Integration of test case execution into your  CI/CD pipeline',
                'Assistance with setting up  CI/CD pipelines if needed'
            ],
            link: '',
            containerStyle: 'sm:mt-[10rem] text-end sm:text-start flex-row-reverse items-center',
            roleOrientation: 'flex-row-reverse',
            imageStyle: 'sm:w-[60rem] hidden sm:block h-auto',
            circle: '#fff'
        },
        {
            header: 'Data Analytics Integration',
            subheader: 'Seamless Integration for E-commerce and Data Analytics',
            title: 'Unlock the Power of Your Data',
            image: '/service_py.png',
            lineColor: '#FF88C3',
            roles: [
                'Unique approach to integration, setting us apart from the competition',
                'Seamless integration of e-commerce data with Data bricks or Snowflake',
                'Design and architecture consulting for efficient integration without overspending',
                'Cost optimizations to save money and maximize the value of your data analytics investment',
                'Fault tolerance for uninterrupted access to critical data, even during system failures',
            ],
            link: '',
            containerStyle: 'sm:mt-[10rem] items-center',
            imageStyle: 'sm:w-[60rem] hidden sm:block h-auto',
            circle: '#fff'
        },
    ]
    return (
        <section className="">
            <div className="bg-white text-black px-[3rem] sm:px-[10rem] py-[3rem]">
                <MaxContainer>
                    <div className="sm:flex flex-col">
                        <h2 className="sub-header text-center mb-[2.5rem]"><span className="text-[#37ACA8]">Our</span><span className="font-[400]"> Consulting</span> Capabilities: </h2>
                        <img src="/capabilities.svg" className='mb-[3rem] sm:hidden' alt="capabilities" />
                        <img src="/capabilities_sm.svg" className='my-[4rem] w-[130rem] sm:mb-[8rem] self-center' alt="capabilities" />

                        {
                            capabilities.map((capability, index) => (<PlaceTextBesideImage item={capability} key={index} />))
                        }

                    </div>
                </MaxContainer>
            </div>
            <div className="px-[3rem] sm:px-[10rem] py-[3rem]">
                <MaxContainer>
                    <div className="sm:flex flex-col">
                        {
                            capabilitiesII.map((capability, index) => (<PlaceTextBesideImage item={capability} key={index} />))
                        }
                    </div>
                </MaxContainer>
            </div>
        </section>
    );
}

export default Index;


const OnboardingLeft = () => {
    return (
        <div className="hidden sm:block">
            <img src="/onboarding_service.png" className='sm:w-[65rem] border h-auto' alt="services" />
            <img src="/_service_receipt.svg" className='sm:w-[25rem] right-[-1.5rem] top-[-1rem] relative' alt="" />

            <div className="sm:w-[42rem] sm:px-[2rem] relative right-[-28rem] top-[-12rem] border-l border-[#F888C6]">
                <p className="text-[#F888C6] text-[1.7rem]">Are you tired of lengthy onboarding processes and inefficient software delivery? </p>
                <p className="">Our Onboarding as a Service (OBaaS) solution offers a streamlined approach to  CI/CD services, accelerating your development and testing cycle</p>
            </div>
        </div>
    )
}