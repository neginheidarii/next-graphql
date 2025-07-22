# GraphQL Server

This folder contains the GraphQL server for the project. It is built using [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and provides a simple API for post data.

## Features

- GraphQL API with a `Post` type
- Query all posts or a single post by ID

## File Structure

- `index.js` — Entry point for the server
- `schema.js` — GraphQL schema definition
- `package.json` — Project dependencies and scripts

## Setup & Usage

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   The server will start on the default port (usually 4000). You can access the GraphQL Playground at `http://localhost:4000/`.

## Schema Overview

```
type Post {
  id: ID!
  title: String
  content: String
}

type Query {
  posts: [Post]
  post(id: ID!): Post
}
```

## Development

- Modify `schema.js` to update the GraphQL schema.
- Add resolvers and data sources in `index.js` as needed.

## Requirements

- Node.js (v14 or higher recommended)

## License

This project is licensed under the MIT License.
