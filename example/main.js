import { request, gql } from "graphql-request";

request(
  "http://localhost:4000/graphql",
  gql`
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
  `
).then((data) => console.log(data));
