import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Postpage from "./postpage";
import CommentPage from "./Commentpage";
import UserPage from "./UserPage";

function App() {
  const [isPost, setPost] = useState(false);
  const [isUser, setuser] = useState(false);
  const [isComment, setComment] = useState(false);

  const togglePost = () => {
    setPost(true);
    setuser(false);
    setComment(false);
  };

  const toggleUser = () => {
    setPost(false);
    setuser(true);
    setComment(false);
  };

  const toggleComment = () => {
    setPost(false);
    setuser(false);
    setComment(true);
  };
  return (
    <div className="App">
      <button className="postbutton" onClick={togglePost}>
        Post
      </button>
      <button className="userbutton" onClick={toggleUser}>
        User
      </button>
      <button className="commentbutton" onClick={toggleComment}>
        Comment
      </button>
      {isPost && <Postpage />}
      {isComment && <CommentPage />}
      {isUser && <UserPage />}
    </div>
  );
}

export default App;
