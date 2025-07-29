import { request, gql } from "graphql-request";
import { PostsResponse } from "@/types/post";

const fetchPosts = async (categoryId?: string) => {
  const endpoint = "http://localhost:4000/graphql";

  const getPostQuery = gql`
    query GetPosts($categoryId: ID) {
      posts(categoryId: $categoryId) {
        id
        title
        content
        category {
          id
          name
        }
      }

    }
  `;

  const data = await request<PostsResponse>(endpoint, getPostQuery, {
    categoryId,
  });
  return data.posts;
};

export default fetchPosts;
