import React, { Component, Fragment } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";
import LifeCycleCop from "../LifeCycleComp/LifeCycleCop";
import BlogPost from "../BlogPost/BlogPost";
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: true,
		};
	}
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			showComponent: false,
	// 		});
	// 	}, 5000);
	// }
	render() {
		return (
			<Fragment>
				{" "}
				<div>
					<p>Youtube Component</p>
					<hr />
					<YouTubeComp
						time="7.12"
						title="Tutorial React JS - Bagian 1"
						desc="2x kali ditonton. 2 hari yang lalu"
					/>
					<YouTubeComp
						time="8.02"
						title="Tutorial React JS - Bagian 2"
						desc="200x kali ditonton. 10 hari yang lalu"
					/>
					<YouTubeComp
						time="5.04"
						title="Tutorial React JS - Bagian 3"
						desc="500x kali ditonton. 4 hari yang lalu"
					/>
					<YouTubeComp
						time="6.55"
						title="Tutorial React JS - Bagian 4"
						desc="1K kali ditonton. 2 hari yang lalu"
					/>
					<YouTubeComp />
					<p>counter</p>
					<hr />
					<Product />
				</div>
				<p>Life Cycle componen</p>
				<hr />
				{this.state.showComponent ? <LifeCycleCop /> : null}
				<hr />
				<p>Blog Post Test</p>
				<BlogPost/>
			</Fragment>
		);
	}
}
// * props membuat komponen menjadi lebih dinamis
export default Home;
