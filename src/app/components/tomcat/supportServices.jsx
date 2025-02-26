import Img from "../common/image";
import ButtonLink from "../common/buttonLink";

const SupportServices = () => {
    const services = [
        {
            title: <h3 className="sm:text-[1.5rem] text-[1.7rem] text-center font-[700]">24/7 Technical <span className="text-[#9B86FE]">Support</span></h3>,
            description: "Access to our experts around the clock",
            icon: "/support.svg",
        },
        {
            title: <h3 className="sm:text-[1.5rem] text-[1.7rem] text-center font-[700]"><span className="text-[#FF88C3]">Installation</span> and Configuration</h3>,
            description: "Optimize your Tomcat setup for peak Performance",
            icon: "/installation.svg",
        },
        {
            title: <h3 className="sm:text-[1.5rem] text-[1.7rem] text-center font-[700]">Emergency <span className="text-[#5747A5]">Hot Fixes</span></h3>,
            description: "Rapid solutions for critical issues.",
            icon: "/Hot-fixes.svg",
        },
        {
            title: <h3 className="sm:text-[1.5rem] text-[1.7rem] text-center font-[700]">Security <span className="text-[#8FD5CC]">Vulnerability</span> Notifications</h3>,
            description: "Expert support services for integrating Apache Tomcat with other technologies.",
            icon: "/vulnerability.svg",
        },
        {
            title: <h3 className="sm:text-[1.5rem] text-[1.7rem] text-center font-[700]">Compliance <span className="text-[#5747A5]">Assistance</span></h3>,
            description: "Meet internal and external policy requirements",
            icon: "/assistance.svg",
        },
    ]

    return (
        <section className="sm:py-[8rem] py-[4rem] bg-[#0D1117]">
            <p className="sm:max-w-[110rem] max-w-[30rem] text-center mx-auto"><span className="text-[#9B86FE]">Apache Tomcat</span> is a cornerstone for deploying and managing Java-based applications. Whether on-premises or in the cloud, achieving optimal performance and reliability requires expertise. Our specialized Tomcat services ensure your deployments run smoothly, securely, and aligned with your business goals.</p>

            <div className="mt-[5rem] flex flex-col">
                <h2 className="sm:text-[3.8rem] text-[2.6rem] sm:max-w-[65rem] max-w-[25rem] mx-auto text-center font-[800]"><span className="font-[400]">Comprehensive</span> <span className="text-[#FF88C3]">Tomcat Consulting </span>
                    & Support Services</h2>
                
                <div className="max-w-[1400px] mt-[4rem] justify-items-center gap-y-[6rem] grid sm:grid-rows-2 sm:grid-cols-6 mx-auto">
                    {
                        services.map((service, index) => {
                            return (
                                <Card
                                    key={index}
                                    {...service}
                                    id={index}
                                />
                            )
                        })
                    }
                </div>

                <ButtonLink
                    link="/tomcat"
                    text="Connect with Our Tomcat Experts"
                    className="sm:mt-[5rem] mt-[4rem] font-[800] border border-[#5545A0] px-[5rem] rounded-[.7rem] mx-auto hover:bg-[#5545A0]
                    transition-all duration-300 ease-in-out"
                />
            </div>
        </section>
    );
}

const Card = ({ title, description, icon, id }) => {
    return (
        <div className={`flex flex-col   sm:col-span-2 ${id == 3 ? "sm:col-start-2" : ""} items-center w-[290px]`}>
            <Img
                src={`/tomcat/${icon}`}
                className="w-[10rem] mb-[2rem] h-[6rem]"
                alt="icon"
            />
            {title}
            <p className="text-center mx-auto sm:mt-[2rem] mt-[1rem]">{description}</p>
        </div>
    )
}

export default SupportServices;