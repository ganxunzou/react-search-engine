import React, { Component } from "react";
import {Link} from 'react-router-dom';
import style from "./index.less";
class BItem extends Component {
	constructor(props) {
		super();
		let { url, title, list, bgColor } = props;
		this.state = {
			url,
			title,
			list,
			bgColor
		};
	}
	render() {
		let { list } = this.state;
		return (
			<div style={{ backgroundColor: this.state.bgColor }}>
				<img src={this.state.url} width="100%" height="auto" />
				<div style={{ padding: "20px 10px" }}>
					<h2 className={style.title}>{this.state.title}</h2>
					<ul className={style.list}>
						{list &&
							list.map((item,index) => {
								return <li key={`key_${index}`}><Link to="/" >{item.label}</Link></li>;
							})}
					</ul>
				</div>
			</div>
		);
	}
}

export default BItem;
