import { request, gql } from "graphql-request";
import { PostsResponse } from "@/types";

const fetchPost = async () => {
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

  const data = await request<PostsResponse>(endpoint, getPostQuery);
  return data;
};

export default fetchPost;
