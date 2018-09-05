import React, { Component } from "react";
import { Tabs, Icon, Row, Col, Collapse } from "antd";
const Panel = Collapse.Panel;

const TabPane = Tabs.TabPane;

import RecommendList from "../../components/RecommendList";

class Leader extends Component {
	render() {
		return (
			<div style={{ padding: "10px 50px", maxWidth: "1200px", margin: "auto" }}>
				<Row>
					<Col span={18}>
						<Tabs defaultActiveKey="1">
							<TabPane
								tab={
									<span>
										<Icon type="like" /> 点赞排行
									</span>
								}
								key="1"
							>
								Tab 1
							</TabPane>
							<TabPane
								tab={
									<span>
										<Icon type="download" /> 下载排行
									</span>
								}
								key="2"
							>
								Tab 2
							</TabPane>
						</Tabs>
					</Col>
					<Col span={6}>
						<div style={{ padding: "0 20px" }}>
							<div
								style={{
									height: "80px",
									lineHeight: "80px",
									backgroundColor: "#fcf8e3",
									border: "1px solid #faebcc",
									borderRadius: 4,
									textAlign: "center",
									marginBottom: "20px"
								}}
							>
								这里是一些小小的提示
							</div>

							<div
								style={{
									marginBottom: "20px"
								}}
							>
								<RecommendList title="点赞排行" isLike={true} />
							</div>
							<div
								style={{
									marginBottom: "20px"
								}}
							>
								<RecommendList title="下载排行" isLike={false} />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Leader;
Leader;
