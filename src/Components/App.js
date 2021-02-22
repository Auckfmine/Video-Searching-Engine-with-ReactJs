import callApi from "../api/YoutubeApi";
import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import "../styles/videoList.css";
class App extends React.Component {
  state = {
    videos: [],
  };
  onSubmit = async (SearchTerm) => {
    try {
      const response = await callApi(`/search/`, {
        params: {
          q: SearchTerm,
        },
      });
      this.setState({ videos: response.data.items });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="videos-container">
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
