import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "../Post/Post";
import "./BlogPost.css";

class BlogPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
		};
	}
	componentDidMount() {
		// fetch("https://jsonplaceholder.typicode.com/posts")
		// 	.then((response) => response.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			post: json,
		// 		});
		// 	});
		axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
			console.log(res);
			this.setState({
				post: res.data,
			});
		});
	}
	render() {
		return (
			<Fragment>
				<p className="section-title">Blog Post</p>
				{this.state.post.map((post) => {
					return <Post key={post.id} title={post.title} desc={post.body} />;
				})}
			</Fragment>
		);
	}
}

export default BlogPost;