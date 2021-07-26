import React, { Component, Fragment } from "react";

/*
   ! this yang dimaksud adalah seluruh komponen dalam class jika menggunakan arrow function
*/
class CardProduct extends Component {
	constructor(props) {
		super(props);
		const order = 4;
		const price = 34.5;
		this.state = {
			order: order,
			name: "jansen Stanlie",
			harga: price,
			total: order * price,
		};
	}

	handleCounterChange = (order) => {
		this.props.onCounterChange(order);
	};
	countTotal = (order = this.state.order) => {
		this.setState({
			total: order * this.state.harga,
		});
	};
	handlePlus = () => {
		this.setState({ order: this.state.order + 1 }, () => {
			this.handleCounterChange(this.state.order);
			this.countTotal(this.state.order);
		});
	};
	handleMinus = () => {
		if (this.state.order === 0) {
			alert("Keranjang sudah kosong");
			this.setState({ order: 0 }, () => {
				this.handleCounterChange(this.state.order);
				this.countTotal(this.state.order);
			});
		} else {
			this.setState({ order: this.state.order - 1 }, () => {
				this.handleCounterChange(this.state.order);
				this.countTotal(this.state.order);
			});
		}
	};
	render() {
		return (
			<Fragment>
				<div className="card">
					<div className="img-thumb-prod">
						<img
							src="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/1/14/476717782/476717782_e7e26483-1349-45cf-8de2-aa42dd515646_1084_1084.jpg"
							alt=""
						/>
					</div>
					<p className="product-title">
						Bumbu Tepung Sajiku 1Kg untuk ayam goreng kentucky
					</p>
					<p className="product-price">Rp{this.state.harga.toFixed(3)}</p>
					<p>Total harga</p>
					<p className="product-price">Rp.{this.state.total.toFixed(3)}</p>
					<div className="counter">
						<button className="minus" onClick={this.handleMinus}>
							-
						</button>
						<input type="text" value={this.state.order} />
						<button className="plus" onClick={this.handlePlus}>
							+
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CardProduct;
