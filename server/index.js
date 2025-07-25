import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import posts from "./data-posts.json" with { type: "json" };
import categories from "./data-categories.json" with { type: "json" };

const resolvers = {
  Post: {
    category: (post) => post.category.map((id) => categories.find((cat) => cat.id === id)),
  },
  Query: {
    posts: (_, args) => {
  const { categoryId } = args;

  if (!categoryId) return posts;

  return posts.filter((post) =>
    post.category.includes(categoryId)
  );
},

    post: (_, { id }) => posts.find((entity) => entity.id === id),
    categories: () => categories,
    category: (_, { id }) => categories.find((cat) => cat.id === id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mockEntireSchema: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Mock server ready at ${url}`);
});
