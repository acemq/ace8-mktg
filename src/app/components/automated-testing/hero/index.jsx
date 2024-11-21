'use client'
import { slideIn } from '../../../Animations/common';
import MaxContainer from '../../common/maxContainer'
import Image from 'next/image';
import { useEffect } from 'react';
const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="">
            <MaxContainer>
                <div className="px-[3rem] pt-[7rem] sm:pt-[17rem] pb-[6rem]">
                    <div className="flex flex-col items-center mx-auto" data-animation-id='slideIn'>
                        <Image src='/automated_testing.webp' className='w-[24rem] h-[21rem] sm:hidden' width={580} height={383} alt='hero' />
                        <Image src='/automated_testing_sm.webp' className='w-[100rem]  sm:block hidden' width={1000} height={703} alt='hero' />
                        <p className="font-[700] text-center sm:hidden">Streamline Your Testing Process with Automated Testing</p>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;