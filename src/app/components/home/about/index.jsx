import Image from "next/image";
import Link from "next/link";
const Index = () => {
    return (
        <section id="about" className="px-[3rem] scroll-mt-[8rem] sm:px-[10rem] flex gap-x-[4rem]">
             <img src="/mile_3.png" className="hidden sm:w-[3.7rem] sm:mt-[3rem] sm:block" alt="line" />
            <div className="flex flex-col justify-center sm:flex-row-reverse sm:justify-between">
                <Image src='/focused_man.png' className="w-[100%] h-[30rem] sm:w-[45rem] sm:h-[48rem]" alt="focused_image" width='350' height='400' />
                <div className="flex flex-col">
                    <p className="text-center sm:text-start text-[1.4rem] sm:text-[2rem] sm:mb-[1.5rem] mt-[3rem]">Who we are</p>
                    <h2 className="text-center sm:text-start text-[2rem] font-[400] sm:text-[5rem] sm:leading-[5.7rem]"> <span className="font-[700]">We are a </span><span className="hero_gradient_text font-[700]">People-Focused Organization</span> <span className="font-[700]"> that</span> Solves Business Problem <span className="hero_gradient_text_ii font-[700]" > Through Technology.</span></h2>
                    <p className="sm:text-[1.5rem] sm:w-[60rem] sm:mt-[1rem] hidden sm:block">We offer an opportunity to envision your solution as a roadmap where we collaborate to create, reinvent and continuously deploy services, capabilities, and solutions to solve your business challenges.</p>
                    <Link href='/About' className="border-accent-200 text-[1.2rem] hover:scale-[1.1] transition-all self-center sm:self-start py-[1rem] px-[1.8rem] sm:px-[2.2rem] rounded-[.7rem] font-[700] border-[2px] mt-[2.4rem]">More About Us</Link>
                </div>
            </div>
        </section>
    );
}

export default Index;