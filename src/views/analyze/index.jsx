import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
import { Switch, Route, withRouter } from "react-router-dom";


import UserActive from "./users/active";
import UserStatistics from "./users/statistics";
import DocStatistics from "./doc/statics";
import Online from "./users/online";
import UploadChartView from "./doc/upload";
import Ship from "./search/ship";
import Ship2 from "./search/ship2";
import HotView from "./search/hot";

import AnalysisView from "./analysis";


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
			<Layout style={{ height: "100%", background: "#ccc" }}>
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
									{/* 用户 */}Dashboard
								</span>
							}
						>
						 <Menu.Item key="/analyze/analysis">分析页</Menu.Item>
							{/* <Menu.Item key="/analyze/users/active">用户活跃度</Menu.Item>
							<Menu.Item key="/analyze/users/statistics">用户统计</Menu.Item> */}
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
							<Menu.Item key="/analyze/doc/statistics">文档概览</Menu.Item>
							<Menu.Item key="/analyze/doc/upload">上传概览</Menu.Item>
							<Menu.Item key="/analyze/doc/download">下载概概览</Menu.Item>
							<Menu.Item key="8">精华</Menu.Item>
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
							<Menu.Item key="/analyze/search/hot">热搜</Menu.Item>
							<Menu.Item key="/analyze/search/ship">标签关系图</Menu.Item>
							<Menu.Item key="/analyze/search/ship2">关键字关系图</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout style={{ padding: "0 0 0 1px" }}>
					<Content
						style={{
							background: "#eee",
							padding: 24,
							margin: 0,
							minHeight: 280,
							height: "100%"
						}}
					>
						<Switch>
							<Route exact path="/analyze/analysis" component={AnalysisView} />
							<Route exact path="/analyze/users/active" component={UserActive} />
							<Route exact path="/analyze/users/statistics" component={UserStatistics} />
							<Route exact path="/analyze/doc/statistics" component={DocStatistics} />
							<Route exact path="/analyze/doc/upload" component={UploadChartView} />
							<Route exact path="/analyze/doc/download" component={UploadChartView} />
							<Route exact path="/analyze/search/ship" component={Ship} />
							<Route exact path="/analyze/search/ship2" component={Ship2} />
							<Route exact path="/analyze/search/hot" component={HotView} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(AnalyzeView);
