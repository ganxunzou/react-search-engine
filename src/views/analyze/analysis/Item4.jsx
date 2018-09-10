import React, { Component } from "react";
import { Icon, Divider } from "antd";
import style from "./item.less";

class Item extends Component {
	render() {
		return (
			<div className={style.container}>
				<div style={{ color: "rgba(0,0,0,.45)", fontSize: "14px" }}>
					<span>标签总量</span>
					<Icon
						style={{ float: "right", paddingTop: "5px" }}
						type="question-circle"
					/>
				</div>
				<div style={{ fontSize: "30px", paddingTop: "10px" }}>126,560</div>
				<div
					style={{
						height: "35px",
						display: "table-cell",
						verticalAlign: " bottom"
					}}
				>
					<span>周同比12%</span>
					<span style={{paddingLeft: '10px'}}>日同比11%</span>
				</div>
				<Divider style={{ margin: "15px 0" }} />
				<div style={{ height: "30px" }}>
					<span>今日新增</span>
					<span>12,423 </span>
				</div>
			</div>
		);
	}
}

export default Item;
