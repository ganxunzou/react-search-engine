import React, { Component } from "react";
import { Icon } from "antd";
import { Link, withRouter } from "react-router-dom";

import style from "./index.less";

class BItem2 extends Component {
	constructor(props) {
		super();
		let { bgColor, title, type, desc } = props;
		this.state = {
			bgColor,
			title,
			type,
			desc
		};
  }
  
  jumpClick=()=>{
    let {pathData} = this.props;
    pathData && this.props.history.push(pathData);
  }
	render() {
		return (
			<div style={{ height: "300px", backgroundColor: this.state.bgColor }}>
				<p style={{ textAlign: "center" }}>
					<Icon type={this.state.type} className={style.icon} />
				</p>
				<h2 style={{ textAlign: "center", paddingBottom: "10px" }}>
					<span className={style.title} onClick={this.jumpClick}>{this.state.title}</span>
				</h2>
				<p className={style.desc}>
					{this.state.desc}
					aaa
				</p>
			</div>
		);
	}
}

export default withRouter(BItem2);
