import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./imageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const data = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });
    console.log(data.data.results);
    this.setState({ images: data.data.results });
    console.log(this.images);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList />
      </div>
    );
  }
}

export default App;
