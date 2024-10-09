import Hero from "../../components/automated-testing/hero";
import Body from "../../components/automated-testing/body";

export const metadata = {
  title: "Automated Testing Services for E-Commerce | Ace8",
  description:
    "Enhance your e-commerce application with Ace8's automated testing services. Our AI-enhanced test code, crowd-sourced test cases, and seamless CI/CD integration save you time and resources.",
  alternates: {
    canonical: "https://www.ace8.io/services/automated-testing",
  },
  openGraph: {
    title: "Automated Testing Services for E-Commerce | Ace8",
    description:
      "Enhance your e-commerce application with Ace8's automated testing services. Our AI-enhanced test code, crowd-sourced test cases, and seamless CI/CD integration save you time and resources.",
    url: "https://www.ace8.io/services/automated-testing",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const AutomatedTesting = () => {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
};

export default AutomatedTesting;
