import logo from "./logo.svg";
import "./App.css";

function App() {
  const commentsData = [
    { creator: "Alex", comment: "Great video", likeCount: 10 },
    { creator: "Olivia", comment: "Thank you so much", likeCount: 3 },
    { creator: "Lucas", comment: "Awesome!", likeCount: 0 },
  ];

  return (
    <div className="App">
      <div className="columns">
        <div className="primary">
          <div className="video-player">VideoPlayer</div>
          <div className="comments">
            {commentsData.map((comment) => {
              return (
                <div className="comment">
                  <h3 className="comment-header">{comment.creator}</h3>
                  <p className="comment-body">{comment.comment}</p>
                  <div className="comment-actions">
                    <button>Like</button>
                    <span>{comment.likeCount}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="secondary">
            <div className="recommendations">Recommendation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
