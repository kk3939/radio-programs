import React from "react";
import Footer from "../components/Common/Footer/Footer";
import Layout from "../components/Common/Layouts/Layout";
import HeightSpacer from "../components/Common/Layouts/HeightSpacer";
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
