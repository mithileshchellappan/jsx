import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./videoList";

class App extends React.Component {
  state = { videos: [], selectedVidoe: null };
  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items });
  };
  onVideoSelect = (video) => {
    console.log("lol", video);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
export default App;
