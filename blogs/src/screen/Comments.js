import { useState } from "react";
import commentsDt from "../data/commentsDt";
import { BsHeart } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsReplyAllFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Comments.css";

const Comments = (props) => {
  const { name, img, comment_text, date } = props;
  return (
    <div className="comment-container">
      <h3 className="comment-person">{name}</h3>
      <p className="comment-date">{date}</p>
      <img src={img} className="comment-img" alt="image" />
      <p className="comment-text">{comment_text}</p>
      <BsHeart className="comment-heart" />
      <BsReplyAllFill className="comment-reply" />
      <BsThreeDotsVertical className="comment-three-dots" />
    </div>
  );
};

const CommentList = () => {
  const [persons, setPersons] = useState([]);

  const newList = commentsDt.map((comment) => {
    return <Comments key={comment.id} {...comment} />;
  });
  const handleSubmit = (e) => {
    console.log("hello world");
  };
  return (
    <>
      <div className="comment-main-container">
        <div className="comment-input-container">
          <input
            placeholder="write your comment"
            className="comment-input"
            value={persons}
            onChange={(e) => setPersons(e.value.target)}
          ></input>
          <RiSendPlaneFill className="comment-send" onClick={handleSubmit} />
        </div>
        {newList}
      </div>
    </>
  );
};
export default CommentList;
