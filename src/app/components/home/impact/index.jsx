"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
// import split from "@/app/Animations/text";
// import { slideIn } from "@/app/Animations/common";
import MaxContainer from '../../common/maxContainer'

const Index = ({stories}) => {
    //   useEffect(() => {
    //     split();
    //     slideIn();
    //   }, []);

    const cards = [
        {
            header: "Real-Time Payment Processor Production Issues",
            title: "Customer Story",
            image: "/customer_story.png",
            link: "/Stories/0",
            role: "Accelerated Migration of Custom Microservices to AWS Lambda",
            header: 'Microservices Migration'
        },
        {
            header: "RabbitMQ in Kubernetes",
            title: "Customer Story",
            image: "/customer_story2.png",
            link: "/Stories/1",
            role: "Migrating from C++ to Java for a Time-Critical Web Launch",
            header:  'Critical Web Launch'
        },
    ];
    return (
        <section className="px-[3rem] sm:px-[10rem] sm:mb-[0] sm:mt-[6.5rem]">
            <MaxContainer>
                <div className="" data-animation-id="slideIn">
                    <h3 className="text-center text-[3.7rem] sm:text-[6rem] font-[700]">
                        <span className="text-[#FF88C3]">Among</span> <span className="font-[400]">The</span> Best
                    </h3>
                    <p className="text-center  mb-[3rem] sm:mb-[4rem]">
                        Ace8 has helped the World's premiere companies reach exceptional
                        outcomes
                    </p>
                    <div className="sm:flex-row flex flex-col gap-[5rem] sm:gap-[0] w-[100%] sm:h-fit justify-between">
                        {stories?.slice(0, 2)?.map((card, index) => (
                            <Card card={card} key={index} />
                        ))}
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
};

export default Index;

const Card = ({ card }) => (
    <div className='sm:w-[45%] sm:ml-[7rem]'>
        <h2 className="text-center font-[700] sm:mb-[2rem] mb-[1rem] hidden sm:block sm:text-[2.2rem] text-[1.5rem]">{card.sub_title}</h2>
        <div className="relative w-[100%] flex flex-col h-[24rem] sm:h-[40rem]">
            <p className="text-center relative font-[700] text-[1.7rem] sm:text-[1.9rem] top-[1.5rem] z-[3]">
                Customer Story
            </p>
            <Image
                className="absolute inset-0 top-0 w-[100%] h-full sm:h-[100%] bottom-0 z-[0]`"
                src={card.image.asset.url}
                alt={card.alt}
                width={611}
                height={444}
            />
            <Image
                src="/image_overlay.png"
                className="absolute z-2 w-[100%] bottom-0 h-[100%]"
                alt="overlay"
                width={611}
                height={444}
            />

            <div className="absolute z-[3] bottom-[.7rem] sm:bottom-[2.5rem] w-[30rem] sm:w-[35rem] flex flex-col items-center self-center">
                <p className="text-center sm:leading-[2rem]">
                    {card.title}
                </p>
                <Link
                    href={`/stories/${card.slug.current}`}
                    className="flex items-center font-[500] mt-[2rem] gap-[1.5rem]"
                >
                    <p>Read Story</p>
                    <img className="w-[2rem]" src="/arrow.svg" alt="arrow icon" />
                </Link>
            </div>
        </div>
    </div>
);
