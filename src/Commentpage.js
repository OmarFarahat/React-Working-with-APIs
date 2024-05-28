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
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {commentsData.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentPage;
