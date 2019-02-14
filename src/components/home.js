import React, { Component } from "react";
import Search from "./search";
import SearchResult from "./searchResult";
class Home extends Component {
  render() {
    return (
      <main role="main" className="">
        <div className="hero">
          <Search />
        </div>
        <div className="container">
          <SearchResult />
        </div>
      </main>
    );
  }
}
export default Home;
