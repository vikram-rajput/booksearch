import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Search from './search';
class Home extends Component {
//     state = {
//         posts: []
//     }
// componentDidMount(){
//     axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{

// this.setState({
//     posts:res.data.slice(0,10)
// });
// console.log(this.state.posts);
//     });
// }
render() {
    const {posts} = this.props;
    const postList = posts.length ? (
        posts.map((post)=>{
return (<div key={post.id}>
    <Link to={'/'+post.id}>{post.title}</Link>
    </div>);
        })
    ) : (
        <div className="">no post</div>
    );
    return (
        <div className="container">
        <Search />
        {postList}</div>
            );
    }
}
const mapStateToProps = (state) => { 
return({
    posts: state.posts
});
}
export default connect(mapStateToProps)(Home);