"use client"
import Hero from "../../components/AWS/hero";
import AWSServices from "../../components/AWS/AWSSERVICES";
import AWSOfferings from "../../components/AWS/AWSOfferings";
import AWSCloud from "../../components/AWS/AWSCloud";
import AWSPartners from "../../components/AWS/AWSPartners";
import CTA from "../../components/AWS/CTA";
import Contact from "../../components/common/contact";
import { slideIn } from "../../Animations/common";
import { useEffect } from "react";
import MaxContainer from "../../components/common/maxContainer";

const AWS = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <div className="sm:pt-[9rem] pt-[16rem] pb-[7rem] overflow-x-hidden w-[100vw]">
            <Hero />
            <AWSCloud />
            <AWSOfferings />
            <AWSPartners />
            <AWSServices />
            <CTA />
            <MaxContainer>
                <Contact />
            </MaxContainer>
        </div>
    );
}

export default AWS;