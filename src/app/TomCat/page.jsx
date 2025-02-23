import Hero from "../components/tomcat/hero";
import SupportServices from "../components/tomcat/supportServices";
import SupportCloudBased from "../components/tomcat/supportCloudBased";
import Partner from "../components/tomcat/partner";
import SupportOnPremises from "../components/tomcat/supportOnPremises";
import CTA from "../components/tomcat/CTA";

const TomCat = () => {
    return (
        <div className="pt-[9rem] overflow-x-hidden w-[100vw]">
            <Hero />
            <SupportServices />
            <SupportCloudBased />
            <Partner />
            <SupportOnPremises />
            <CTA />
        </div>
    );
}

export default TomCat;