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
	getPostAPI = () => {
		axios.get("http://localhost:3000/posts").then((res) => {
			console.log(res);
			this.setState({
				post: res.data,
			});
		});
	};
	handleRemove = (data) => {
		axios.delete(`http://localhost:3000/posts/${data}`).then((res) => {
			console.log(res);
			this.getPostAPI();
		});
	};
	componentDidMount() {
		// fetch("https://jsonplaceholder.typicode.com/posts")
		// 	.then((response) => response.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			post: json,
		// 		});
		// 	});
		// axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
		// 	console.log(res);
		// 	this.setState({
		// 		post: res.data,
		// 	});
		// });
		this.getPostAPI();
	}
	render() {
		return (
			<Fragment>
				<p className="section-title">Blog Post</p>
				{this.state.post.map((post) => {
					return (
						<Post
							key={post.id}
							title={post.title}
							desc={post.body}
							data={post}
							remove={this.handleRemove}
						/>
					);
				})}
			</Fragment>
		);
	}
}

export default BlogPost;
