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
										中心年度分享概况
									</div>
								}
								key="1"
							>
								<div style={{ height: "400px" }}>
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
										中心历年分享概况
									</div>
								}
								key="1"
							>
								<div style={{ height: "400px" }}>
									<PolyYear />
								</div>
							</Panel>
						</Collapse>
					</Col>
					<Col xl={{ span: 12 }}>
						<Collapse bordered={false} defaultActiveKey={["1"]}>
							<Panel
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
										部门年度分享概况
									</div>
								}
								key="1"
							>
								<div style={{ height: "400px" }}>
									<PolyYear />
								</div>
							</Panel>
						</Collapse>
					</Col>
					<Col xl={{ span: 12 }}>
						<Collapse bordered={false} defaultActiveKey={["1"]}>
							<Panel
								header={
									<div style={{ fontSize: "16px", color: "#939393" }}>
									部门历年分享概况
									</div>
								}
								key="1"
							>
								<div style={{ height: "400px" }}>
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
