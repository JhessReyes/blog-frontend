import Subtitle from "@/components/atom/labels/Subtitle";
import Text from "@/components/atom/labels/Text";
import Title from "@/components/atom/labels/Title";
import Layout from "@/components/templates/Layout";
import PrimaryButton from "@/components/atom/buttons/PrimaryButton";
import React from "react";

function about() {
  return (
    <Layout>
      <section id="about">
        <div className="sm:mt-48 mb-12">
          <Title>About</Title>
          <Subtitle>The World</Subtitle>
        </div>
        <div className="sm:pr-[40%]">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </div>
        <div className="mt-8">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </section>
    </Layout>
  );
}

export default about;
