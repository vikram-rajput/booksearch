import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class Search extends Component {
 
  handleSubmit = e => {
    e.preventDefault();
    this.getBookList(e.target.elements.searchQuery.value)
    
  };

  getBookList = q => {axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=RGaiyr2dszkRQSc6gKegnA&q=${q}`).then(res => {
    this.parseXMLResponse(res.data);
  });
}
  parseXMLResponse = response => {
    const parser = new DOMParser();
    const XMLResponse = parser.parseFromString(response, 'application/xml');
    const parseError = XMLResponse.getElementsByTagName('parsererror');
    if (parseError.length) {
     alert('There was an error fetching results.');
    } else {
      const XMLresults = new Array(...XMLResponse.getElementsByTagName('work'));
      const searchResults = XMLresults.map(result => this.XMLToJson(result));
        console.log(searchResults);
      this.props.search(searchResults);
    }
  };
  XMLToJson = XML => {
    const allNodes = new Array(...XML.children);
    const jsonResult = {};
    allNodes.forEach(node => {
      if (node.children.length) {
        jsonResult[node.nodeName] = this.XMLToJson(node);
      } else {
        jsonResult[node.nodeName] = node.innerHTML;
      }
    });
    return jsonResult;
  };
  render() {
    console.log(this.props);
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

const mapStateToProps = state => {
  return { fake: 'fake' };
};
const mapDispatchToProps = dispatch => {
  return {
    search: result => {
      dispatch({ type: 'SEARCH_BOOKS', books: result });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
