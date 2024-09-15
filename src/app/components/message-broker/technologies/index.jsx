import MaxContainer from '../../common/maxContainer'

const Index = () => {
    const technologies = [
        {
            path: '/tech_0.png',
            style: ''
        },
        {
            path: '/tech_1.svg',
            style: 'self-center'
        },
        {
            path: '/tech_2.svg',
            style: ''
        },
        {
            path: '/tech_3.svg',
            style: 'self-center'
        },
        {
            path: '/tech_4.svg',
            style: 'self-center'
        },
        {
            path: '/tech_5.svg',
            style: 'self-end'
        },
        {
            path: '/tech_6.svg',
            style: 'self-center'
        },
        {
            path: '/tech_7.svg',
            style: 'self-end'
        },
    ]
    return (
        <section className="bg-white text-black">
            <MaxContainer>
                <div className="sm:px-[10rem] px-[3rem]">
                    <h2 className="sm:text-[6rem] text-[3rem] text-[#5545A0] sm:text-black mb-[1.5rem] text-center sm:text-left sm:mb-[5rem] font-[700]">Technologies</h2>
                    <div className="">
                        {/* <img src="/technologies.png" alt="technology" className="hidden sm:block w-[100rem]" /> */}
                        <div className="sm:flex hidden h-[50rem] w-[100%] items-start justify-between">
                           { technologies.map((tech, i) => <img key={i} className={`${tech.style} w-[12rem]`} src={tech.path} />) } 
                        </div>
                        <img src="/technologies_sm.png" alt="technology" className="sm:hidden" />
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}
 
export default Index;