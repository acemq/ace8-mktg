import MaxContainer from '../../common/maxContainer';
import Image from 'next/image';
const Index = () => {
    return (
        <section className="">
            <MaxContainer>
                <div className="">
                    <Image src='/open_source_hero.png' alt='open source hero' width={421} height={312} className='' />
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;