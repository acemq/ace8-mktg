import Img from "../common/image";
import ButtonLink from "../common/buttonLink";


const CTA = () => {

    const timelines = [
        {
            title: "Schedule a Consultation",
            description: "connect with our experts to discuss your current challenges and objectives.",
            style: "mt-[10rem]"
        },
        {
            title: "Receive a Custom Plan",
            description: "We’ll assess your environment and propose tailored recommendations",
            style: "self-center text-end"
        },
        {
            title: "Transform Your Tomcat Deployment",
            description: "Implement proven strategies for performance, scalability, and security. ",
            style: "self-end mb-[7rem]"
        },
    ]

    return (
        <section className="py-[6rem]">
            <h2 className="text-center text-[3rem]">Getting <span className="font-[800] text-[#9B86FE] mb-[4rem]">Started</span></h2>
            <p className="text-center">Taking the first step toward an optimized Apache Tomcat deployment is simple</p>

            <div className="flex mt-[9rem] justify-center gap-x-[5rem] mx-auto w-[100%] px-[6rem] max-w-[1200px]">
                {
                    timelines.map((timeline, index) => {
                        if (index === 1) return (<Timeline
                            {...timeline}
                            key={index}
                            id={index}
                        />)
                    })
                }

                <Img
                    src="/tomcat/timeline.svg"
                    className="w-[5rem] col-start-2"
                    alt="timeline-circle"
                />

                <div className="flex w-[32%] justify-between flex-col">
                    {
                        timelines.map((timeline, index) => {
                            if (index !== 1) return (<Timeline
                                {...timeline}
                                key={index}
                                id={index}
                            />)
                        })
                    }
                </div>
            </div>

            <Banner />
        </section>
    );
}

const Timeline = ({ title, description, style, id }) =>
    <div className={`flex flex-col ${style} ${id % 2 ? "w-[33%]" : "w-[100%]"} h-fit`}>
        <h4 className="text-[1.8rem] font-[500]">{title}</h4>
        <p className={`w-[90%] ${id % 2 ? "ml-auto" : "mr-auto"} mt-[1.2rem]`}>{description}</p>
    </div>
export default CTA;



const Banner = () => {
    return (
        <div className="flex bg-tomcat-banner bg-[length:100%_100%] bg-[#0D1117] bg-blend-hue rounded-[1.8rem] max-w-[1200px] py-[10rem] w-[85%] mx-auto mt-[10rem] flex-col justify-center relative items-center">
            <div className="absolute bg-[length:100%_100%] width-[100%] height-[100%] z-[-1] w-[100%] bg-banner-outline bottom-[2rem] top-[-2rem] right-[-2rem]"></div>
            <p className="text-center text-[2rem] max-w-[75rem]">
                Let us help you unlock the full potential of Apache Tomcat. Whether your deployment is on-premises, in the cloud, or both, our expertise ensures your Java applications deliver consistent value.
            </p>

            <ButtonLink
                link="/tomcat"
                text="Contact Us for Free Consultation"
                className="mt-[3rem] font-[800] border border-[#ffffff] px-[5rem] rounded-[.7rem] mx-auto hover:text-[#0D1117] hover:bg-[#ffffff]
                    transition-all duration-300 ease-in-out"
            />
        </div>
    )
}




