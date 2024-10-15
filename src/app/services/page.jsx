import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/service/hero";
import Methodology from "../components/service/methodology";
import Capabilities from "../components/service/capabilities";
import Banner from "../components/service/banner";
import Contact from "../components/common/contact";

export const metadata = {
  title: "DevSecOps, Cloud, Incident Management Services | Ace8",
  description:
    "Explore Ace8's cutting-edge services, from DevSecOps to Cloud-Native, Incident Management, Automation, and more. Elevate your business with scalable, secure solutions.",
  alternates: {
    canonical: "https://www.ace8.io/services",
  },
  openGraph: {
    title: "DevSecOps, Cloud, Incident Management Services | Ace8",
    description:
      "Explore Ace8's cutting-edge services, from DevSecOps to Cloud-Native, Incident Management, Automation, and more. Elevate your business with scalable, secure solutions.",
    url: "https://www.ace8.io/services",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const Service = () => {
  return (
    <>
      <Hero />
      <MaxContainer>
        <Methodology />
      </MaxContainer>
      <Capabilities />
      <MaxContainer>
        <Banner />
        <Contact />
      </MaxContainer>
    </>
  );
};

export default Service;
