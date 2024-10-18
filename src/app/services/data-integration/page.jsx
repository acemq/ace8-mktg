import Hero from "../../components/data-integration/hero";
import Body from "../../components/data-integration/body";
import MaxContainer from "../../components/common/maxContainer";
import Banner from "../../components/data-integration/banner";
import Contact from "../../components/common/contact";

export const metadata = {
  title:
    "Seamless E-Commerce Data Integration with Snowflake & Databricks | Ace8",
  description:
    "Struggling to integrate your e-commerce system with data analytics? Ace8 offers seamless integration with Databricks and Snowflake, ensuring efficient data analytics integration.",
  alternates: {
    canonical: "https://www.ace8.io/services/data-integration",
  },
  openGraph: {
    title:
      "Seamless E-Commerce Data Integration with Snowflake & Databricks | Ace8",
    description:
      "Struggling to integrate your e-commerce system with data analytics? Ace8 offers seamless integration with Databricks and Snowflake, ensuring efficient data analytics integration.",
    url: "https://www.ace8.io/services/data-integration",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const DataIntegration = () => {
  return (
    <>
      <Hero />
      <Body />
      <MaxContainer>
        <Banner />
        <Contact route={"data-integration"} />
      </MaxContainer>
    </>
  );
};

export default DataIntegration;
