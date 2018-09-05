import React, { Component } from "react";
import { Collapse } from "antd";
const Panel = Collapse.Panel;
import HistoryArea from "./historyArea";
import OnlinePie from "./onlinePie";

class UserOnline extends Component {
	render() {
		return (
			<div
				style={{
					overflow: "hidden"
				}}
			>
				<Collapse bordered={false} defaultActiveKey={["1", "2"]}>
					<Panel header={<div style={{fontSize: '16px', color: '#939393'}}>用户活跃度</div>} key="1">
						<HistoryArea />
					</Panel>
					<Panel header={<div style={{fontSize: '16px', color: '#939393'}}>用户在线人数</div>} key="2">
						<OnlinePie />
					</Panel>
				</Collapse>
			</div>
		);
	}
}

export default UserOnline;
