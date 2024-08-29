import Link from "next/link";
const Index = () => {
    const cards = [
        {
            header: 'Microservices Migration',
            title: 'Customer Story',
            image: '/customer_story.png',
            link: '',
            role: 'Accelerated Migration of Custom Microservices to AWS Lambda'
        },
        {
            header: 'Critical Web Launch',
            title: 'Customer Story',
            image: '/customer_story2.png',
            link: '',
            role: 'Migrating from C++ to Java for a Time-Critical Web Launch'
        }
    ]
    return (
        <section className="px-[3rem] md:px-[10rem] sm:mb-[0] mt-[3rem]">
            <h3 className="text-center text-[2.3rem] font-[700]"><span className="text-[#FF88C3]">Among</span> The Best</h3>
            <p className="text-center text-[1.2rem] sm:text-[1.8rem] mb-[3rem] sm:mb-[4rem]">Ace8 has helped the World's premiere companies reach exceptional outcomes</p>
            <div className="sm:flex-row flex flex-col gap-[5rem] sm:gap-[0] w-[100%] sm:h-[42rem] justify-between">
                {cards.map((card, index) => <Card card={card} key={index} />)}
            </div>
        </section>
    );
}

export default Index;

const Card = ({ card }) => (
    <div className="">
        <h4 className="text-center text-[1.5rem] mb-[1rem] sm:mb-[1.5rem] font-[700]">{card.header}</h4>
        <div className="relative sm:w-[60rem] h-[25.5rem] sm:h-[40rem]">
            <p className="text-center relative font-[700] text-[1.4rem] top-[1.5rem] z-[3]">customer story</p>
            <img className="absolute inset-0 top-0 h-[25rem] sm:h-auto bottom-0 z-[0]`" src={card.image} alt="" />
            <img src="/image_overlay.png" className="absolute z-2" alt="overlay" />

            <div className="absolute z-[3] bottom-[.7rem] sm:bottom-[2.5rem] w-[20rem] sm:w-[29rem] flex flex-col items-center mx-[17%] sm:mx-[25%]">
                <p className="text-center text-[1.2rem]">{card.role}</p>
                <Link href='#' className="flex items-center font-[500] text-[1.2rem] mt-[2rem] gap-[1.5rem]">Read Story <img className="w-[2rem]" src="/arrow.svg" alt="arrow icon" /></Link>
            </div>
        </div>
    </div>
)