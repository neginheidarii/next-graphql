# GraphQL Blog Platform

This project is a full-stack blog platform featuring a GraphQL backend and a Next.js frontend. The backend provides a GraphQL API for posts and categories, while the frontend (to be implemented) should fetch and render posts with server-side rendering (SSR), allow users to filter posts by category.

## Project Structure

```
graphql/
  front/         # (Frontend - to be implemented with Next.js)
  server/        # GraphQL backend (Apollo Server)
```

## Backend (GraphQL Server)

- **Location:** `server/`
- **Tech:** Apollo Server (Node.js)
- **Features:**
  - GraphQL API for `Post` and `Category`
  - Query all posts, single post by ID, and categories
  - Posts have a `category` field (see `data-posts.json` and `data-categories.json`)

### Running the Backend

```bash
cd server
npm install
npm start
```

- The server runs on [http://localhost:4000/](http://localhost:4000/)
- Access the GraphQL Playground at `/`

### Example Schema

```graphql
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
  categories: [Category]
}
```

## Frontend (Next.js 15 App Router) — Developer Instructions

**You are to implement the frontend in the `front/` directory using [Next.js 15](https://nextjs.org/) with the App Router.**

### Requirements

1. **Server-Side Rendering (SSR) for Posts (App Router)**

   - Use the `app/` directory and server components for SSR.
   - Fetch the list of posts from the GraphQL API in a server component (using an `async` function or a server action).
   - Render the posts on the homepage (`app/page.js`).

2. **Category Filtering**

   - Fetch available categories from the API (in a server or client component as needed).
   - Allow users to filter posts by category (server-side filtering is preferred for best performance/SEO; use search params or dynamic route segments).
   - Use [React Query](https://tanstack.com/query/latest) for client-side mutations, such as when the category filter changes or when editing/deleting posts. React Query can be used in client components to manage and mutate data efficiently.

3. **Tech Stack**
   - Use Apollo Client, urql, or [graphql-request](https://github.com/jasonkuhrt/graphql-request) for GraphQL queries/mutations.
   - Use React Query for client-side mutations and cache management.
   - Use modern React (hooks, functional and server components).
   - Ensure good UX for loading, error, and empty states.

### Example User Flow

1. User visits the homepage and sees a list of posts (SSR via server component).
2. User selects a category from a dropdown or sidebar; posts are filtered accordingly (ideally via server component and search params).
3. User can edit or delete a post; changes are reflected immediately in the UI.

### Suggested File Structure (App Router)

```
front/
  app/
    page.tsx           # SSR posts list (server component)
    layout.tsx
  components/
    Post.tsx
    PostList.tsx
    CategoryFilter.tsx
  services/
    fetchPosts.ts
```

### Example: Fetching Posts in a Server Component

```js
// Using graphql-request in a server component
import { request } from "graphql-request";
import PostList from "../components/PostList";

const endpoint = "http://localhost:4000/";

async function fetchPosts() {
  const query = `
    {
      posts {
        id
        title
        content
        category { id name }
      }
    }
  `;
  const data = await request(endpoint, query);
  return data.posts;
}

export default async function Page() {
  const posts = await fetchPosts();
  return <PostList posts={posts} />;
}
```

---

## Data

- **Posts:** `server/data-posts.json`
- **Categories:** `server/data-categories.json`

## Development

- Start the backend first (`cd server && npm start`).
- Develop the frontend in the `front/` directory.
- Use the backend’s GraphQL endpoint for all data operations.

## License

MIT
