import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="primary">
          <div className="video-player">VideoPlayer</div>
          <div className="comments">Comments</div>
        </div>
        <div className="secondary">
          <div className="recommendations">Recommendation</div>
        </div>
      </div>
    </div>
  );
}

export default App;
