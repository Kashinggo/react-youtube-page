import "./Comments.css";

import Comment from "./Comment";

function Comments() {
  const commentsData = [
    { creator: "Alex", comment: "Great video", likeCount: 10 },
    { creator: "Olivia", comment: "Thank you so much", likeCount: 3 },
    { creator: "Lucas", comment: "Awesome!", likeCount: 0 },
  ];

  return (
    <div className="comments">
      {commentsData.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
}

export default Comments;
