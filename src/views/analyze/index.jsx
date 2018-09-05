import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
import { Switch, Route, withRouter } from "react-router-dom";

import Online from "./users/online";

class AnalyzeView extends Component {

	componentWillMount(){
		this.props.history.push({
			pathname: '/analyze/users/online',
			state: { }
		});
	}
	menuClick=({ item, key, keyPath })=>{
		this.props.history.push({
			pathname: key,
			state: { }
		});
	}

	render() {
		return (
			<Layout style={{ height: "100%", background: "#fff" }}>
				<Sider width={200}>
					<Menu 
						mode="inline"
						defaultSelectedKeys={["/analyze/users/online"]}
						defaultOpenKeys={["sub1", "sub2", "sub3"]}
						style={{ height: "100%", borderRight: 0 }}
						onClick={this.menuClick}
					>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="user" />
									用户
								</span>
							}
						>
							<Menu.Item key="/analyze/users/online">用户概览</Menu.Item>
							<Menu.Item key="/analyze/users/share">文档分享概况</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="file-word" />
									文档
								</span>
							}
						>
							<Menu.Item key="5">文档概况</Menu.Item>
							<Menu.Item key="6">下载概况</Menu.Item>
							<Menu.Item key="7">部门提交概况</Menu.Item>
							<Menu.Item key="8">部门好评文档概况</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub3"
							title={
								<span>
									<Icon type="search" />
									搜索
								</span>
							}
						>
							<Menu.Item key="9">热搜关键字</Menu.Item>
							<Menu.Item key="10">热搜标签</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout style={{ padding: "0 0 0 1px" }}>
					<Content
						style={{
							background: "#fff",
							padding: 24,
							margin: 0,
							minHeight: 280,
							height: "100%"
						}}
					>
						<Switch>
							<Route exact path="/analyze/users/online" component={Online} />
							<Route exact path="/analyze/users/share" component={Online} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(AnalyzeView);
