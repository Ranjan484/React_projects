import { useState } from "react";
import commentsDt from "../data/commentsDt";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsReplyAllFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Comments.css";

const Comments = (props) => {
  const [isShowHeart, isSetShowHeart] = useState(true);
  const [isShowReply, isSetShowReply] = useState(false);
  const [isShowThreeDots, isSetShowThreeDots] = useState(false);
  const {
    name = "dummy person",
    img = "/uploads/7.jpg",
    comment_text,
    date = "5/june/2021",
  } = props;
  return (
    <div className="comment-container">
      <h3 className="comment-person">{name}</h3>
      <p className="comment-date">{date}</p>
      <img src={img} className="comment-img" alt="image" />
      <p className="comment-text">{comment_text}</p>
      <BsHeart
        className={isShowHeart ? "comment-heart" : "hide-comment-heartFill"}
        onClick={() => isSetShowHeart(!isShowHeart)}
      />
      <BsHeartFill
        className={isShowHeart ? "hide-comment-heartFill" : "comment-heartFill"}
        onClick={() => isSetShowHeart(!isShowHeart)}
      />
      <BsReplyAllFill
        className="comment-reply"
        onClick={() => isSetShowReply(!isShowReply)}
      />
      <BsThreeDotsVertical
        className="comment-three-dots"
        onClick={() => isSetShowThreeDots(!isShowThreeDots)}
      />

      {/* for toggle reply */}
      <div
        className={
          isShowReply
            ? "comment-reply-container"
            : "hide-comment-reply-container"
        }
      >
        <input
          placeholder="write your reply"
          className="comment-input-reply"
        ></input>
        <RiSendPlaneFill
          className="comment-send-reply"
          onClick={() => console.log("hello ranjan")}
        />
      </div>

      {/* for toggle three dots */}

      <div
        className=""
        className={
          isShowThreeDots
            ? "comment-three-dots-container"
            : "hide-comment-three-dots-container"
        }
      >
        <p>Report this comment</p>
        <p>View profile</p>
        <p>Reply comment</p>
      </div>
    </div>
  );
};

const CommentList = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState(commentsDt);

  const newList = comments.map((comment, index) => {
    return <Comments key={index} {...comment} />;
  });
  const handleSubmit = (e) => {
    if (text) {
      const commentText = { comment_text: text };
      setText("");
      setComments((comments) => {
        return [...comments, commentText];
      });
    }
  };
  return (
    <>
      <div className="comment-main-container">
        <div className="comment-input-container">
          <input
            placeholder="write your comment"
            className="comment-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <RiSendPlaneFill className="comment-send" onClick={handleSubmit} />
        </div>
        {newList}
      </div>
    </>
  );
};
export default CommentList;
