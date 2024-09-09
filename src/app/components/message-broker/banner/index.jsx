import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:pt-[0] sm:pb-[0] sm:px-[10rem] text-white">
            <div className="sm:py-[3rem] sm:rounded-[2rem] sm:mt-[5rem] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                    <h2 className="sub-header self-center w-[99%] text-center mt-[1rem] sm:w-[90rem] sm:mt-[0]"><span className="font-[400]">Ready to Optimize
                        Your</span> <span className="text-[#9B86FE]">Messaging and Queuing</span> Implementation with <span className="font-[400]">Expert Support and</span>
                        <span className="text-[#9B86FE]"> Value-Driven Solutions ?</span></h2>
                    <p className="mt-[2rem] text-center">Partner with AceMQ, your trusted messaging and queuing services provider. Our team of experienced engineers specializes in message brokers, including RabbitMQ, and seamlessly integrates them into your unique technology stack. As an internationally accredited partner of RabbitMQ, we offer comprehensive troubleshooting, consulting, and support services tailored to your specific requirements.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="btn border mt-[2rem]">Get Started With AceMQ</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;