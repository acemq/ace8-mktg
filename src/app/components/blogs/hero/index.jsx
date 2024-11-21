'use client'
import { useEffect } from "react";
import Image from "next/image";
import { slideIn } from "../../../Animations/common";

const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="py-[5.5rem] pt-[10rem] sm:pt-[20rem] sm:pb-[17rem] px-[1.5rem] sm:px-[10rem] relative">
            <Image src='/blog_bg.png' className="absolute mix-blend-hard-light inset-0 sm:hidden top-0 w-[100%] h-[100%]" width={790} height={387} alt="wheel" />
            <Image src='/blog_bg_sm.png' className="absolute mix-blend-hard-light sm:block hidden inset-0 top-0 w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
            <div className="flex flex-col items-center relative">
                <h1 className="header" data-animation-id='slideIn'>Our <span className="text-[#9B86FE]">Blogs</span></h1>
            </div>
        </section>
    );
}

export default Index;