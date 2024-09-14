import Image from "next/image";
import Link from "next/link";
const Index = () => {
    return (
        <section className="bg-black py-[4rem] px-[3rem] sm:px-[10rem] sm:mb-[15rem] sm:bg-transparent">
            <div className="sm:bg-management-bg w-[100%] flex flex-col sm:flex-row-reverse sm:pt-[5rem] sm:justify-between sm:pl-[2rem]">
                <div className="flex flex-col sm:w-[50rem] sm:pt-[6rem]">
                    <div className="border border-[#46D7B4] px-[1.7rem] py-[.5rem] self-start rounded-[2rem] mb-[1.5rem]">
                        <p className="">Incident Managements</p>
                    </div>
                    <h3 className="font-[700] text-[2.8rem] sm:text-[4rem] mb-[2rem]">How to <span className="font-[500]">Proactively</span> Mitigate <span className="text-[#46D7B4]">Incidents</span></h3>
                    <p className="text-[1.4rem] mb-[3rem] font-[500]">Learn how Ace8 leverages Netflix Dispatch and other Industry-leading technologies and practices to offer the ONLY proactive incident management.</p>

                    <Link href="/Service/incidentManagement" className="btn self-center">Learn More</Link>
                </div>
                <Image src='/dashboard.png' className="w-[100%] sm:w-[60rem] sm:relative sm:bottom-[-8rem] h-auto" width={370} height={300} />
            </div>
        </section>
    );
}

export default Index;