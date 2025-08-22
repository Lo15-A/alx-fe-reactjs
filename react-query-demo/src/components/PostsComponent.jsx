import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
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
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // ✅ React Query caching options
    cacheTime: 1000 * 60 * 5, // cache for 5 minutes
    staleTime: 1000 * 60 * 1, // data considered fresh for 1 minute
    refetchOnWindowFocus: true, // refetch when window is focused
    keepPreviousData: true, // keeps previous data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "1rem",
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
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
