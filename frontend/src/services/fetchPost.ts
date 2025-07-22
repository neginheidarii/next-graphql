import {request, gql} from "graphql-request"

const fetchPost = async() => {

    const endpoint = "http://localhost:4000/graphql";

    const getPostQuery =

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

    const data = await request(endpoint, getPostQuery);
     return data;



}

export default fetchPost;