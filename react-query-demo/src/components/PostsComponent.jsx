import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"], // cache key
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "10px",
          padding: "8px 16px",
          background: "royalblue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Refetch Posts
      </button>

      <ul style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
