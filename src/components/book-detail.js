import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
class BookDetail extends Component {
   render() {
    console.log(this.props);
    const book = this.props.book ? (
      <div>{this.props.book.body}</div>
    ) : (
      <div className="loader text-center mt-5">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
    return (
      <div className="search-result">
        <div className="media">
          <img
            src="https://images.gr-assets.com/books/1474154022l/3.jpg"
            className="mr-3"
            alt="Harry Potter and the Sorcerer's Stone "
          />
          <div className="media-body">
            <h5 className="mt-0">Harry Potter and the Sorcerer's Stone </h5>
            <p>{book}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.book_id;
  const book = state.books.find(book => book.best_book.id == id);
  console.log(book);
  return { book: book };
};
export default connect(
  mapStateToProps
)(BookDetail);
