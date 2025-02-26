"use client"
import Hero from "../components/tomcat/hero";
import SupportServices from "../components/tomcat/supportServices";
import SupportCloudBased from "../components/tomcat/supportCloudBased";
import Partner from "../components/tomcat/partner";
import SupportOnPremises from "../components/tomcat/supportOnPremises";
import CTA from "../components/tomcat/CTA";
import Contact from "../components/common/contact";
import { slideIn } from "../Animations/common";
import { useEffect } from "react";
import MaxContainer from "../components/common/maxContainer";


const TomCat = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <div className="sm:pt-[9rem] pt-[6rem]  pb-[7rem] overflow-x-hidden w-[100vw]">
            <Hero />
            <SupportServices />
            <SupportCloudBased />
            <SupportOnPremises />
            <Partner />
            <CTA />
            <MaxContainer>
                <Contact />
            </MaxContainer>
        </div>
    );
}

export default TomCat;