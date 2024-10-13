import Image from "next/image";
const Index = () => {
    const cards = ['/listen.png', '/deliver.png', '/boldly.png',]
    return (
        <section className="px-[3rem] pb-[5rem] sm:px-[10rem] mt-[5rem] sm:mt-[0] flex gap-[4rem]">
            <img src="/mile_7.png" className="hidden sm:w-[3.7rem]  sm:block" alt="line" />
            <div className="w-[100%]">
                <div className="">
                    <h4 className="text-[3.4rem] sm:text-[5rem] font-[500] mb-[1rem] text-center sm:text-left">Our <span className="font-[700] text-accent-100">Approach</span></h4>
                    <p className="text-center sm:text-left sm:w-[70rem] text-[1.2rem] sm:text-[2rem] mb-[3rem]">Our purpose is to unite, empower and develop incredible people to deliver unfathomable innovation through intelligent digital experiences</p>
                </div>
                <div className="flex flex-col justify-between sm:flex-row w-[100%]">
                    {cards.map((card, index) => <Image key={index} className="w-[35rem]" src={card} width={400} height={300} />)}
                </div>
            </div>
        </section>
    )
}
 
export default Index;