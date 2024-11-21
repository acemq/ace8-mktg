'use client'
import { slideIn } from "../../../Animations/common";
import Image from "next/image";
import { useEffect } from "react";
const Index = () => {
    useEffect(() => {
        slideIn()
    })
    return (
        <section className="sm:py-[5.5rem] py-[8rem] sm:pt-[17rem] pt-[10rem] sm:pb-[18rem] px-[1.5rem] sm:px-[10rem] relative">
            <Image src='/stories_sm.png' className="absolute mix-blend-hard-light inset-0 sm:hidden top-0 w-[100%] h-[100%] multiply" width={790} height={387} alt="wheel" />
            <Image src='/stories_bg.png' className="absolute mix-blend-hard-light sm:block hidden inset-0 top-0 w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
            <div className="flex flex-col items-center relative">
               <h1 className="header w-[15rem] sm:w-auto text-center" data-animation-id='slideIn'>Customer <span className="text-[#8FD5CC]">Stories</span></h1>
            </div>
        </section>
    );
}

export default Index;

