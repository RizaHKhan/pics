import React, { Component } from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

export default class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await Axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID t5pSTfrfLBLouuqocPizOqwE-t-ZC7vGY1UkoY-oca8",
      },
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}
