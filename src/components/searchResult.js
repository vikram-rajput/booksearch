import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
class SearchResult extends Component {
  renderList() {
    const { books } = this.props;
    if(books.length){
    return books.map(book => {
      return (
        <li className="media" key={book.best_book.id}>
          <Link to={"/" + book.best_book.id}>
            <img
              src={book.best_book.image_url
                .replace("<![CDATA[", "")
                .replace("]]>", "")}
              className="mr-3 list-thumb"
              alt={book.best_book.title}
            />
          </Link>
          <div className="media-body">
            <h5 className="mt-0">
              <Link to={"/" + book.best_book.id}> {book.best_book.title} </Link>
            </h5>
            <small>by {book.best_book.author.name}</small>
          </div>
        </li>
      );
    });
  } else{
    return '...';
  }
  }
  render() {
    return (
      <div className="search-result">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="mt-5">
            {this.props.books.length ? `Search Result ( ${this.props.books.length} Record${
              this.props.books.length > 1 ? "s" : ""
            }  Found )`: ''}
            </div>
            
            <ul className="list-unstyled result-list">
            {this.renderList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { books: state.books.searchResult };
};

// export default SearchResult;
export default connect(mapStateToProps)(SearchResult);
