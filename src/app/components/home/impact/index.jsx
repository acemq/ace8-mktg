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
        <section className="px-[3rem] md:px-[10rem] mt-[3rem]">
            <h3 className="text-center text-[2.3rem] font-[700]"><span className="text-[#FF88C3]">Among</span> The Best</h3>
            <p className="text-center text-[1.2rem] mb-[1.5rem] sm:mb-[4rem]">Ace8 has helped the World's premiere companies reach exceptional outcomes</p>
            <div className="sm:flex w-[100%] sm:h-[42rem] justify-between">
                {cards.map((card, index) => <Card card={card} key={index} />)}
            </div>
        </section>
    );
}

export default Index;

const Card = ({ card }) => (
    <div className="mb-[6rem] sm:h-[37rem] h-[20rem]">
        <h4 className="text-center text-[1.8rem] mb-[.5rem] sm:mb-[1.5rem] font-[700]">{card.header}</h4>
        <div className="relative sm:w-[60rem] h-[100%]">
            <p className="text-center relative font-[700] text-[1.4rem] top-[1.5rem] z-[3]">customer story</p>
            <img className="absolute inset-0 top-0 z-[1]`" src={card.image} alt="" />
            <img src="/image_overlay.png" className="absolute inset-0 z-2" alt="overlay" />

            <div className="absolute z-[3] bottom-[0] w-[20rem] sm:w-[29rem] flex flex-col items-center mx-[17%] sm:mx-[25%]">
                <p className="text-center text-[1.3rem]">{card.role}</p>
                <Link href='#' className="flex items-center font-[500] text-[1.2rem] mt-[2rem] gap-[1.5rem]">Read Story <img className="w-[2rem]" src="/arrow.svg" alt="arrow icon" /></Link>
            </div>
        </div>
    </div>
)