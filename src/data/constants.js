import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://blog-backend-blush.vercel.app/graphql",
  }),
});

export const menuItems = [
  { id: 1, label: "HOME", link: "/" },
  { id: 2, label: "ABOUT", link: "/about" },
  { id: 3, label: "SERVICE", link: "/service" },
  { id: 4, label: "CONTACT", link: "/contact" },
];
