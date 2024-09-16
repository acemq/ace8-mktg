'use client';
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Index = () => {
    // const brands = ['/gojek.png', '/enbridge.png', '/ceaser.png', '/henry.png', '/square.png']

    const brands = [
        {
            path: '/square.png',
            style: 'w-[3rem] sm:w-[7rem]'
        },
        {
            path: '/henry.png',
            style: 'sm:w-[22rem]'
        },
        {
            path: '/microsoft.png',
            style: 'sm:w-[18rem]'
        },
        {
            path: '/ceaser.png',
            style: 'sm:w-[18rem]'
        },
        {
            path: '/enbridge.png',
            style: 'sm:w-[18rem]'
        },
        {
            path: '/gojek.png',
            style: 'sm:w-[15rem]'
        }
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: brands.length
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2
        }
    }
    return (
        <section className="px-[3rem] sm:px-[10rem] mt-[5rem] sm:mt-[1.5rem] pb-[5.2rem] sm:py-[10rem] flex gap-x-[4rem] w-[100%]">
            <div className="w-[100%]">
                <h2 className="text-[2.9rem] sm:text-[3.2rem] text-center sm:text-left font-[700] mb-[3rem]">Trusted By The <span className="text-accent-100">Brands Globally</span></h2>
                <div className="hidden sm:flex items-center justify-between w-[100%]">
                    {brands.map((item, i) => <Image src={item.path} key={i} className={`h-auto ${item.style}`} alt="brands icon" width={150} height={100} />)}
                </div>
                <div className="sm:hidden">
                    <Carousel showDots={true} autoPlay={true} autoPlaySpeed={1000} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", 'desktop']} responsive={responsive}>
                        {brands.map((item, i) => <Image src={item.path} key={i} className={`h-auto ${item.style}`} alt="brands icon" width={150} height={100} />)}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Index;