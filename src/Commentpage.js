import { useState, useEffect } from "react";
const CommentPage = () => {
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setCommentsData(data);
    };

    getComments();
  }, [commentsData]);
  return (
    <>
      {commentsData.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.title}</h3>
          <h4>{comment.body}</h4>
        </div>
      ))}
    </>
  );
};

export default CommentPage;
