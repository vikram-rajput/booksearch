import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from './search';
import SearchResult from './searchResult';
class Home extends Component {
  render() {
    const { books } = this.props;
    return (
      <main role="main" className="">
        <div className="hero">
          <Search />
        </div>
        <div className="container">
          <SearchResult books={books} />{' '}
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.books
  };
};
export default connect(mapStateToProps)(Home);
