import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component{
    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(e.target.elements.searchQuery.value);
        this.props.search(e.target.elements.searchQuery.value);
    }
    render(){
        console.log(this.props)
        return(<div className="search">
        <form onSubmit={this.handleSubmit}>
        <input type="" name="searchQuery"/>
        <button type="submit"> Search</button>
        </form>
    </div>);
    }
}
const mapStateToProps = (state) =>{ 
    return {fake:'fake'}
    }
const mapDispatchToProps = (dispatch) =>{ 
    return {
        search: (q) => { dispatch({type:'SEARCH_BOOKS', q: q}) }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);