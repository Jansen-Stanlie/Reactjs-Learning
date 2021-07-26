import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";

/*
   ! this yang dimaksud adalah seluruh komponen dalam class jika menggunakan arrow function
   * menggabungkan child dengan parent
*/
class Product extends Component {
	constructor(props) {
		super(props);
		this.state = { order: 4, name: "jansen Stanlie" };
	}
	handleCounterChange = (newValue) => {
		this.setState({
			order: newValue,
		});
	};
	render() {
		return (
			<Fragment>
				<div className="header">
					<div className="logo">
						<img
							src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png"
							alt=""
						/>
					</div>
					<div className="troley">
						<img
							src="https://image.flaticon.com/icons/png/512/263/263142.png"
							alt=""
						/>
						<div className="count">{this.state.order}</div>
					</div>
				</div>
				<CardProduct
					onCounterChange={(value) => this.handleCounterChange(value)}
				/>
			</Fragment>
		);
	}
}

export default Product;
