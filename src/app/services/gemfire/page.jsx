import Hero from "../../components/gemfire/hero";
import Body from "@/app/components/gemfire/body";
import MaxContainer from "../../components/common/maxContainer";
import Banner from "../../components/gemfire/banner";
import Contact from "../../components/common/contact";

export const metadata = {
  title: "GemFire Consulting & Expertise | Optimized Performance with Ace8",
  description:
    "Accelerate your GemFire journey with Ace8. Our expert consulting services guide you through GemFire technology, ensuring optimized performance, scalability, and seamless integration into your systems.",
  alternates: {
    canonical: "https://www.ace8.io/services/gemfire",
  },
  openGraph: {
    title: "GemFire Consulting & Expertise | Optimized Performance with Ace8",
    description:
      "Accelerate your GemFire journey with Ace8. Our expert consulting services guide you through GemFire technology, ensuring optimized performance, scalability, and seamless integration into your systems.",
    url: "https://www.ace8.io/services/gemfire",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const GemFire = () => {
  return (
    <>
      <Hero />
      <Body />
      <div className="sm:bg-white">
        <MaxContainer>
          <Banner />
          <Contact />
        </MaxContainer>
      </div>
    </>
  );
};

export default GemFire;
