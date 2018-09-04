import React, { Component } from "react";

import { Layout, Menu, Icon } from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
class AnalyzeView extends Component {
	render() {
		return (
			<Layout style={{height: '100%', background: '#fff'}}>
				<Sider width={200}>
					<Menu
						mode="inline"
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1","sub2","sub3"]}
						style={{ height: "100%", borderRight: 0 }}
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
							<Menu.Item key="1">在线用户</Menu.Item>
							<Menu.Item key="2">用户活跃度</Menu.Item>
							<Menu.Item key="3">文档分享概况</Menu.Item>
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
							height: '100%'
						}}
					>
						Content
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default AnalyzeView;
