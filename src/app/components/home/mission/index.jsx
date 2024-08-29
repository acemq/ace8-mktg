import Image from "next/image";
const Index = () => {
    return (
        <section className="px-[3rem] sm:px-[10rem] sm:flex items-center sm:justify-between">
            <div className="sm:flex gap-[4rem] sm:w-[65rem]">
                <img src="/mile_6.png" className="hidden sm:w-[3.7rem]  sm:block" alt="line" />
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-[700] text-[2.8rem] sm:text-[4rem] text-center sm:text-start"><span className="text-[#F778BA]">Our</span> Mission</h3>
                    <p className="text-[1.5rem] sm:text-[1.6rem] mt-[1rem] text-center sm:text-start">Our company’s mission first  and foremost is to ‘EMPOWER PEOPLE’. We look to disrupt the industry. Not only with our technical prowess, but the way we interface with our clients ,build relationship, and deliver results. We build people-focused organizations and that shows forth in all of all interactions. </p>
                    <button className="border border-[#F778BA] text-[1rem] sm:text-[1.5rem] font-[700] rounded-[.5rem] px-[2rem] mt-[1.6rem] sm:mt-[3rem] py-[.6rem]">Learn More</button>
                </div>
            </div>
            <Image src='/earth.png' className="rounded-[100%] w-[45rem] mt-[4rem] sm:mt-[0]" width={670} height={670} />
        </section>
    );
}

export default Index;