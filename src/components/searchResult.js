import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SearchResult extends Component {
  render() {
    const { books } = this.props;
    const booksList = books.length ? (
      books.map(book => {
        return (
          <li className="media" key={book.best_book.id}>
            <Link to={'/' + book.id}>
              <img
                src={book.best_book.image_url.replace("<![CDATA[", "").replace("]]>", "")}
                className="mr-3 list-thumb"
                alt={book.best_book.title}
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0">
                <Link to={'/' + book.best_book.id}> {book.best_book.title} </Link>
              </h5>
              <small>by {book.best_book.author.name}</small>
            </div>
          </li>
        );
      })
    ) : (
      <div className=""> no book </div>
    );
    return (
      <div className="search-result">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="mt-5">
              {`Search Result ( ${booksList.length} Record${
                booksList.length > 1 ? 's' : ''
              }  Found )`}
            </div>
            <hr />
            <ul className="list-unstyled result-list">{booksList}</ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResult;
