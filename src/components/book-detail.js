import React, {Component} from  'react';
// import axios from 'axios';
import {connect} from 'react-redux';
class BookDetail extends Component{
    // state = {
    //     post:null
    // }
    // componentDidMount(){
    //     const id = this.props.match.params.book_id;
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
    // this.setState({
    //     post:res.data
    // });
    //     });
    // }

    render(){
        console.log(this.props);
        const post = this.props.post ? (
            <div>{this.props.post.body}</div>
        ) :(<div>loading...</div>)
        return (
            <div>
            {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    const id = ownProps.match.params.book_id;
    const post = state.posts.find(post => post.id == id);
    return { post : post}
}
export default connect(mapStateToProps)(BookDetail);