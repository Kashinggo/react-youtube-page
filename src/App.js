import "./App.css";
import VideoPlayer from "./VideoPlayer";
import Recommendations from "./Recommendations";
import Comments from "./Comments";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />

      <div className="columns">
        <div className="primary">
          <VideoPlayer />
          <Comments />
        </div>
        <div className="secondary">
          <Recommendations />
        </div>
      </div>
    </div>
  );
}

export default App;
