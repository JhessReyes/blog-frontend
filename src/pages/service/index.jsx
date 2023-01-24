import Layout from "@/components/templates/Layout";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import Posts from "@/components/organisms/Posts";
import Title from "@/components/atom/labels/Title";

function service() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://blog-backend-blush.vercel.app/graphql",
    }),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <div className="">
            <Title>Posts</Title>
          </div>
          <section id="service">
            <Posts />
          </section>
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default service;
