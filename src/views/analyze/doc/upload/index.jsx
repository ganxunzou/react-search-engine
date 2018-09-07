import React, { Component } from "react";
import { Collapse, Row, Col } from "antd";
const Panel = Collapse.Panel;
import PolyYear from "./PolyYear";
import PolyMonth from "./PolyMonth";

class UploadChartView extends Component {
	render() {
		return (
			<div>
				<Row>
          <Col xl={{ span: 12 }}>
						<Collapse bordered={false} defaultActiveKey={["1"]}>
							<Panel
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
										分享概况（本年）
									</div>
								}
								key="1"
							>
								<div style={{ height: "500px" }}>
									<PolyMonth />
								</div>
							</Panel>
						</Collapse>
					</Col>
          <Col xl={{ span: 12 }}>
						<Collapse bordered={false} defaultActiveKey={["1"]}>
							<Panel
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
										分享概况（历年）
									</div>
								}
								key="1"
							>
								<div style={{ height: "500px" }}>
									<PolyYear />
								</div>
							</Panel>
						</Collapse>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UploadChartView;
