import Hero from "../../components/OBAAS/hero";
import Body from "../../components/OBAAS/body";

export const metadata = {
  title:
    "Swift Developer Onboarding with OBaaS | Ace8's Onboarding as a Service",
  description:
    "Ace8's OBaaS accelerates developer onboarding with dev containers, integrating enterprise systems like AWS, Jira, and GitHub for a swift, customized, and secure onboarding experience.",
  alternates: {
    canonical: "https://www.ace8.io/services/OBAAS",
  },
  openGraph: {
    title:
      "Swift Developer Onboarding with OBaaS | Ace8's Onboarding as a Service",
    description:
      "Ace8's OBaaS accelerates developer onboarding with dev containers, integrating enterprise systems like AWS, Jira, and GitHub for a swift, customized, and secure onboarding experience.",
    url: "https://www.ace8.io/services/OBAAS",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const OBAAS = () => {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
};

export default OBAAS;
