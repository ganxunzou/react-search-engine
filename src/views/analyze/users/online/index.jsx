import React, { Component } from "react";
import { Collapse, Row, Col } from "antd";
const Panel = Collapse.Panel;
import HistoryArea from "./historyArea";
import OnlinePie from "./onlinePie";

class UserOnline extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col xl={{ span: 12 }}>
						<Collapse bordered={false} defaultActiveKey={["1"]}>
							<Panel
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
										用户活跃度
									</div>
								}
								key="1"
							>
								<div style={{ height: "500px" }}>
									<HistoryArea />
								</div>
							</Panel>
						</Collapse>
					</Col>
					<Col xl={{ span: 12 }}>
						<Collapse bordered={false} defaultActiveKey={["2"]}>
							<Panel
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
										用户在线人数
									</div>
								}
								key="2"
							>
								<div style={{ height: "500px" }}>
									<OnlinePie />
								</div>
							</Panel>
						</Collapse>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UserOnline;
