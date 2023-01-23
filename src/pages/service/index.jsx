import PostCard from "@/components/molecules/Card";
import Layout from "@/components/templates/Layout";
import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  useQuery,
  ApolloProvider,
} from "@apollo/client";
import Posts from "@/components/organisms/Posts";

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
          <section id="service">
            <Posts />
          </section>
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default service;
