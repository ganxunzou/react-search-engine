import React, { Component } from "react";
import { Tabs, Icon, Row, Col, Collapse,List } from "antd";
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
import RecommendList from "../../components/RecommendList";
import ListItem from "../../components/ListItem";

const searchResult =[];
for (let i = 0; i < 10; i++) {
	let category = "1";
	if (i % 2 == 0) category = "2";
	if (i % 3 == 0) category = "3";
	if (i % 5 == 0) category = "4";
	if (i % 7 == 0) category = "5";
	if (i % 11 == 0) category = "6";
	if (i % 13 == 0) category = "7";
	if (i % 17 == 0) category = "8";

	searchResult.push({
		category,
		title: 'aa <span style="color:#D0021B">HelloWord</span> XXXXXX' + i,
		desc: 'xxxx <span style="color:#D0021B">aaaa</span> Xxxxxxx',
		likes: 999,
		downloads: 999
	});
}

class Leader extends Component {
	render() {
		return (
			<div style={{ padding: "10px 50px", maxWidth: "1400px", margin: "auto" }}>
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
								<List
										style={{ padding: "0 24px 24px" }}
										bordered={false}
										dataSource={searchResult}
										renderItem={item => (
											<List.Item>
												<ListItem data={item} />
											</List.Item>
										)}
									/>
							</TabPane>
							<TabPane
								tab={
									<span>
										<Icon type="download" /> 下载排行
									</span>
								}
								key="2"
							>
								<List
										style={{ padding: "0 24px 24px" }}
										bordered={false}
										dataSource={searchResult}
										renderItem={item => (
											<List.Item>
												<ListItem data={item} />
											</List.Item>
										)}
									/>
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
