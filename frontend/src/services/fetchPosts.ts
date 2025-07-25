import { request, gql } from "graphql-request";
import { PostsResponse } from "@/types/post";

const fetchPosts = async (categoryId?: string) => {
  const endpoint = "http://localhost:4000/graphql";

  const getPostQuery = gql`
    {
      posts {
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

  const data = await request<PostsResponse>(endpoint, getPostQuery, {categoryId});
  return data;
};

export default fetchPosts;
