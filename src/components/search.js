import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBooks } from '../actions/search-books-action';
// import { Link } from 'react-router';
class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.SearchBooks(e.target.elements.searchQuery.value);
};
  render() {
    return (
      <div className="search-result container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm" onSubmit={this.handleSubmit}>
              <div className="card-body row no-gutters align-items-center">
                <div className="col">
                  <input
                    className="form-control form-control-lg form-control-borderless"
                    name="searchQuery"
                    type="search"
                    placeholder="Search Books By title"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-lg btn-success" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  {SearchBooks}
)(Search);
