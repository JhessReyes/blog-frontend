import Subtitle from "@/components/atom/labels/Subtitle";
import Text from "@/components/atom/labels/Text";
import Title from "@/components/atom/labels/Title";
import Layout from "@/components/templates/Layout";
import PrimaryButton from "@/components/atom/buttons/PrimaryButton";
import React from "react";
import { client } from "@/data/constants";
import { ApolloProvider } from "@apollo/client";
import Authors from "@/components/organisms/Authors";

function about() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <section id="about">
          <Title>Authors</Title>
          <Authors />
        </section>
      </Layout>
    </ApolloProvider>
  );
}

export default about;
