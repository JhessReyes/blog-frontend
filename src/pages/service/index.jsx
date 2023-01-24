import Layout from "@/components/templates/Layout";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import Posts from "@/components/organisms/Posts";
import Title from "@/components/atom/labels/Title";
import { client } from "@/data/constants";

function service() {
  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <section id="service">
            <Title>Posts</Title>
            <Posts />
          </section>
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default service;
