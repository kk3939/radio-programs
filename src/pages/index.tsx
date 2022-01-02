import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import HeightSpacer from "../components/HeightSpacer";
import ServiceTop from "../components/indexPage/ServiceTop";
import ServiceDescription from "../components/indexPage/ServiceDescription";

const Index: React.VFC = () => {
  return (
    <>
      <Layout>
        <ServiceTop />
        <ServiceDescription />
        <HeightSpacer spacePixel={{ base: "150px" }} />
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
