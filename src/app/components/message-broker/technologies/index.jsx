import MaxContainer from '../../common/maxContainer'

const Index = () => {
    return (
        <section className="bg-white text-black">
            <MaxContainer>
                <div className="sm:px-[10rem] px-[3rem]">
                    <h2 className="sm:text-[6rem] text-[3rem] text-[#5545A0] sm:text-black mb-[1.5rem] text-center sm:text-left sm:mb-[5rem] font-[700]">Technologies</h2>
                    <div className="">
                        <img src="/technologies.png" alt="technology" className="hidden sm:block w-[100rem]" />
                        <img src="/technologies_sm.png" alt="technology" className="sm:hidden" />
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}
 
export default Index;