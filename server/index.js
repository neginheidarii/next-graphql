import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import posts from "./data.json" assert { type: "json" };

const server = new ApolloServer({
  typeDefs,
  mockEntireSchema: false,
  mocks: {
    Query: () => ({
      posts: () => posts,
      post: (_, { id }) => posts.find((entity) => entity.id === id),
      categories: () => posts,
      category: (_, { id }) => categories.find((entity) => entity.id === id),
    }),
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Mock server ready at ${url}`);
});
