import ButtonLink from "../common/buttonLink";

const SupportCloudBased = () => {
    const services = [
        {
            title: "Cloud Configuration & Optimization",
            description: "Design and implemeent scalable Topmcat architecture on AWS, Azure, Google Cloud, or private clouds.",
        },
        {
            title: "Perfomance Tuning",
            description: "Enhance responsiveness and throughput for high-demand environments.",
        },
        {
            title: "Containerized Deployments",
            description: "Run Tomcat in Docket or Kubernetes with optimized configurations.",
        },
        {
            title: "Hybrid Solutions",
            description: "Streamline operations with hybrid setups that balance on-prem and cloud infrastructure.",
        },
        {
            title: "Cloud Migration Assistance",
            description: "Smooth transitions from on-prem setups to the cloud, ensuring minimal disruption.",
        },
        {
            title: "Proactive Monitoring & Maintenence",
            description: "Stay ahead with 24/7 monitoring, automated alerts, and schedule updates.",
        },
    ]

    return (
        <section className="bg-[#ffffff] flex flex-col pt-[3.5rem] pb-[7rem] px-[8rem] text-[#0D1117]">
            <h2 className="text-center max-w-[50rem] mx-auto text-[3.8rem] font-[800]"><span className="font-[400]">Support for</span><span className="text-[#8FD5CC]"> Cloud-Based </span>Tomcat <span className="font-[400]">Deployments</span> </h2>
            <p className="mt-[2rem] font-[400] max-w-[65rem] mx-auto text-center">As more businesses transition to the cloud, ensuring a seamless Tomcat experience becomes critical. Our team delivers tailored support to maximize the advantages of cloud-based deployments.</p>

            <div className="grid mt-[5rem] grid-cols-2 gap-y-[5rem] gap-x-[1.5rem] mx-auto max-w-[1200px]">
                {
                    services.map((service, idx) =>
                        <Service
                            key={idx}
                            {...service}
                            id={idx}
                        />
                    )
                }
            </div>

            <ButtonLink
                link="/tomcat"
                text="Discover Cloud-Based Tomcat Solutions"
                className="mt-[2rem] font-[800] border border-[#5545A0] px-[5rem] rounded-[.7rem] mx-auto hover:bg-[#5545A0]
                    transition-all duration-300 ease-in-out"
            />
        </section>
    );
}

const Service = ({ title, description, id }) =>
    <div className="bg-cloud-based-service-outline py-[1.5rem] flex gap-[2rem] px-[1.7rem] bg-[length:100%_100%]">
        <h3 className={`text-[2rem] ${id % 2 ? "text-[#9B86FE]" : "text-[#FF88C3]"} font-[800]`}>{`0${id + 1}`}</h3>
        <div className="">
            <h3 className="text-[1.75rem] font-[600]">{title}</h3>
            <p className="text-[1.55rem] max-w-[40rem]">{description}</p>
        </div>
    </div>

export default SupportCloudBased;