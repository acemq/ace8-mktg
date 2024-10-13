import Image from "next/image";
import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[4.5rem] sm:pt-[15rem] sm:bg-blend-lighten pl-[3rem] md:pl-[10rem] pb-[15rem] sm:pb-[0] bg-hero-background-mobile bg-cover sm:bg-none bg-no-repeat bg-bottom relative">
            <Image
                src='/hero_bg.png'
                className="mask hidden  sm:block absolute w-[100%] object-cover top-[0] z-[0] left-0 h-[100%]"
                width={1920}
                height={896}
                alt="background-image" />
            <Image
                src='/wave.png'
                width={2222}
                height={409}
                className='absolute left-0 h-[30rem] hidden sm:block bottom-[-10rem] w-[100%]'
                alt={'wave'}

            />

            <div className="flex items-start  relative gap-x-[4rem]">
                <img src="/mile_1.png" className="hidden sm:w-[4rem] sm:mt-[3rem] sm:block" alt="line" />
                <div className="">
                    <h1 className="text-[3.6rem] md:text-[8rem] md:w-[80rem] md:leading-[12rem] font-[700]">We Empower <span className="text-[#9B86FE] text-[5rem] md:text-[14rem] font-[900]">Innovations</span></h1>
                    <p className="text-[1.2rem] sm:leading-[2.8rem] mt-[.5rem] sm:text-[1.8rem] sm:w-[59rem] md:mt-[.5rem]">We are a people-focused organization that solves business problems through technology.</p>
                    <Link href='#about'>
                        <button className="px-[2rem] py-[.6rem] mt-[3rem] text-[.9rem] md:text-[1.3rem] rounded-[.5rem] font-[800] border border-accent-100">Learn More</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Index;