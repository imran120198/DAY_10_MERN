import React from "react";
import useFetch from "../CustomHook/useFetch";
import Wedges from "../Assets/Wedges.gif";

function PostsList() {
  const { data, loading, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  if (loading) {
    return (
      <div>
        <img src={Wedges} alt="loader" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts Lists</h1>
      <ul>
        {data.map((elem) => (
          <li key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
