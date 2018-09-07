import React, { Component } from "react";
import { Collapse, Row, Col } from "antd";
const Panel = Collapse.Panel;
import HistoryArea from "./historyArea";
import OnlinePie from "./onlinePie";

class UserOnline extends Component {
	render() {
		return (
			<div
			>
				<Row>
					<Col xl={{ span: 12 }} >
						<Collapse bordered={false} defaultActiveKey={["1"]}>
							<Panel style={{height: '500px'}}
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
										用户活跃度
									</div>
								}
								key="1"
							>
								<HistoryArea />
							</Panel>
						</Collapse>
					</Col>
					<Col xl={{ span: 12 }} >
						<Collapse bordered={false} defaultActiveKey={["2"]}>
							<Panel style={{height: '500px'}}
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
										用户在线人数
									</div>
								}
								key="2"
							>
								<OnlinePie />
							</Panel>
						</Collapse>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UserOnline;
