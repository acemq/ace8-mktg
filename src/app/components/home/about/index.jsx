import Image from "next/image";
const Index = () => {
    return (
        <section className="px-[3rem] sm:px-[10rem] flex gap-x-[4rem]">
             <img src="/mile_3.png" className="hidden sm:w-[3.7rem] sm:mt-[3rem] sm:block" alt="line" />
            <div className="flex flex-col justify-center sm:flex-row-reverse sm:justify-between">
                <Image src='/env.png' className="w-[100%] sm:w-[45rem] sm:h-[48rem]" width='350' height='400' />
                <div className="flex flex-col">
                    <p className="text-center sm:text-start text-[1.4rem] sm:text-[2rem] sm:mb-[1.5rem] mt-[3rem]">Who we are</p>
                    <h2 className="text-center sm:text-start text-[2rem] font-[400] sm:text-[5rem] sm:leading-[5.7rem]"> <span className="font-[700]">We are a </span><span className="text-accent-200 font-[700]">People-Focused Organization</span> <span className="font-[700]"> that</span> Solves Business Problem <span className="text-accent-200 font-[700]" > Through Technology.</span></h2>
                    <p className="sm:text-[1.5rem] max-w-[719px] hidden sm:block">We offer an opportunity to envision your solution as a roadmap where we collaborate to create, reinvent and continuously deploy services, capabilities, and solutions to solve your business challenges.</p>
                    <button className="border-accent-200 border self-center sm:self-start py-[1rem] px-[1.5rem] rounded-[.5rem] font-[700] mt-[2.4rem]">More About Us</button>
                </div>
            </div>
        </section>
    );
}

export default Index;