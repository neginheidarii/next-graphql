import { gql } from "apollo-server";

export default gql`
  type Category {
    id: ID!
    name: String
  }

  type Post {
    id: ID!
    title: String
    content: String
    category: Category
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }
`;
