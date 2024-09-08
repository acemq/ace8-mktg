'use client'
import Image from "next/image";
const Index = ({ item }) => {
    const rolesLength = item.roles.length
    return (
        <div className="">
            <div className={`sm:flex sm:justify-between mt-[5rem]  ${item.containerStyle}`}>
                <div className="sm:max-w-[60rem]">
                    <h2 className="text-[3rem] leading-[4rem] sm:text-[3.5rem] sm:leading-[4.5rem] font-[700]">{item.header}</h2>
                    <p className="font-[700] mb-[1.5rem]">{item.subheader}</p>
                    <p className="font-[500] text-[1.2rem]">{item.title}</p>
                    {item.text && <p className="sm:w-[45rem]">{item.text}</p>}
                    <div className="mt-[1rem] sm:block hidden sm:w-[50rem]">
                        {item.roles.map((_item, i) => (<div className="flex gap-[1.5rem] mb-[.5rem]" key={i}>
                            <div className="flex flex-col items-center w-[2rem] gap-[.5rem]">
                                <svg width="20" height="20" className="w-[2rem] h-[2rem] mb-[.5rem]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9" stroke={item.circle ? item.circle : '#0D1117'} strokeWidth="2" />
                                </svg>
                                {
                                    (i + 1) !== rolesLength && (<svg width="3" height="29" className="w-[.5rem] h-[2rem]" viewBox="0 0 3 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1L1.5 28" stroke={item.lineColor} strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>)
                                }
                            </div>
                            <p className="w-[90%]">{_item}</p>
                        </div>))}
                        <button className="btn border-[2px] mt-[3rem] border-[#FF88C3]">Read More</button>
                    </div>
                </div>

                <div className="">
                    {item.mutipleImage ? item.mutipleImage : (<Image src={item.image} width={700} height={400} className={`w-[30rem] mt-[1rem] sm:mt-[0] ${item.imageStyle} h-auto`} alt="capability image" />)}
                    <div className="mt-[2.5rem] sm:hidden">
                        {item.roles.map((_item, i) => (<div className={`flex gap-[1.5rem] ${item.roleOrientation} mb-[.5rem]`} key={i}>
                            <div className="flex flex-col items-center w-[2rem]">
                                <svg width="20" height="20" className="w-[2rem] h-[2rem] mb-[.5rem]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9" stroke={item.circle ? item.circle : '#0D1117'} strokeWidth="2" />
                                </svg>
                                {
                                    (i + 1) !== rolesLength && (<svg width="3" height="29" className="" viewBox="0 0 3 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 1L1.5 28" stroke={item.lineColor} strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>)
                                }
                            </div>
                            <p className="">{_item}</p>
                        </div>))}
                        <button className="btn border-[2px] mt-[3rem] border-[#FF88C3]">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;