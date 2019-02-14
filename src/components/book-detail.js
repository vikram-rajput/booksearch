import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../actions/search-books-action';
// import { Link } from 'react-router';

class BookDetail extends Component {
  componentWillMount() {
    const id = this.props.match.params.book_id;
    this.props.fetchBook(id);
  }

  renderInfo(){
      const book = this.props.book.title ? (
        <div className="search-result container mt-5">
        <div className="card">
        <div className="media ">
          <img
            src={this.props.book.image_url} 
            className="mr-3 dp"
            alt={this.props.book.title} 
          />
          <div className="media-body">
            <h5 className="mt-2 mb-3">Title {this.props.book.title} </h5>
           <div>Published Year: {this.props.book.publication_year}</div> 
           <div>Rating: {this.props.book.rating}</div> 
           <hr />
           <p dangerouslySetInnerHTML={{ __html: this.props.book.description }} />
            
          </div>
        </div>
        </div>
      </div>
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
      return book;
    
  }
   render() {
 
   return this.renderInfo();
  }
}

const mapStateToProps = (state) => {
  return { book: state.books.bookDescription };
}

export default connect(
  mapStateToProps,{ fetchBook}
)(BookDetail);
