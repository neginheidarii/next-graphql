import { request, gql } from "graphql-request";
import { CategoryResponse } from "@/types/category";

const fetchCategories = async () => {
  const endpoint = "http://localhost:4000/graphql";

  const categoryQuery = gql`
    query {
      categories {
        id
        name
      }
    }
  `;

  const data = await request<CategoryResponse>(endpoint, categoryQuery);
  return data;
};

export default fetchCategories;
