import React, { Component } from "react";
import { Tabs, Icon, Row, Col, Collapse } from "antd";
const Panel = Collapse.Panel;

const TabPane = Tabs.TabPane;
class Leader extends Component {
	render() {
		return (
			<div style={{ padding: "0 50px", maxWidth: "1200px", margin: "auto" }}>
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
					<Col span={6} style={{padding: '50px 0 0 20px'}}>
						<Collapse defaultActiveKey={["1", "2"]} >
							<Panel header="我的点赞排行" key="1">
								<p>1111</p>
							</Panel>
							<Panel header="我的下载排行" key="2">
								<p>111</p>
							</Panel>
						</Collapse>
						,
					</Col>
				</Row>
			</div>
		);
	}
}

export default Leader;
Leader;
