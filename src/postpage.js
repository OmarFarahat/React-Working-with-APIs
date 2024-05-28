import { useState, useEffect } from "react";
const Postpage = () => {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPostsData(data);
    };

    getPosts();
  }, []);
  return (
    <>
      {postsData.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h4>{post.body}</h4>
        </div>
      ))}
    </>
  );
};

export default Postpage;
