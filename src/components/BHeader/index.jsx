import React, { Component } from "react";
import { Layout, Menu, Row,Col,Icon } from "antd";
const { Header } = Layout;
import { Link, withRouter } from "react-router-dom";

import style from "./index.less";
class BHeader extends Component {
	render() {
		return (
			<Header className>
				<div className={style.logo}>
					<Link to="/">Search Engine</Link>
				</div>
				
				<div style={{float: 'right'}}>
						<Icon type="user"/>
						个人中心
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					style={{ lineHeight: "64px" }}
					selectedKeys={[this.props.location.pathname]}
				>
					<Menu.Item key="/search">
						<Link to="/search">搜索</Link>
					</Menu.Item>
					<Menu.Item key="/tags">
						<Link to="/tags">标签云</Link>
					</Menu.Item>
					<Menu.Item key="/upload">
						<Link to="/upload">上传文件</Link>
					</Menu.Item>
					<Menu.Item key="/leader">
						<Link to="/leader">精华</Link>
					</Menu.Item>
					<Menu.Item key="/analyze">
						<Link to="/analyze">统计分析</Link>
					</Menu.Item>
				</Menu>
			</Header>
		);
	}
}

export default withRouter(BHeader);
