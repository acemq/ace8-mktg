import Hero from "../../components/open-source/hero";
import Body from "../../components/open-source/body";

export const metadata = {
  title:
    "Open Source Consulting & Support | Maximize Value with OpenAce by Ace8",
  description:
    "OpenAce, powered by Ace8, offers 24/7 technical support, expert consulting, and tailored solutions for Open Source technologies. Ensure system reliability, performance, and cost-effective optimization.",
  alternates: {
    canonical: "https://www.ace8.io/services/open-source",
  },
  openGraph: {
    title:
      "Open Source Consulting & Support | Maximize Value with OpenAce by Ace8",
    description:
      "OpenAce, powered by Ace8, offers 24/7 technical support, expert consulting, and tailored solutions for Open Source technologies. Ensure system reliability, performance, and cost-effective optimization.",
    url: "https://www.ace8.io/services/open-source",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const OpenSource = () => {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
};

export default OpenSource;
