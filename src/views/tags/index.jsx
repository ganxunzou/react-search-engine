import React, { Component } from "react";
import { Collapse } from "antd";
const Panel = Collapse.Panel;
import CategoryCloud from "./CategoryCloud";
import TagCloud from "./TagCloud";

class TagView extends Component {
	render() {
		return (
			<div style={{ maxWidth: "1200px", margin: "auto" }}>
				<Collapse bordered={false} defaultActiveKey={["1", "2"]}>
					<Panel
						header={
							<div style={{ fontSize: "16px", color: "#939393" }}>
								文档分类云
							</div>
						}
						key="1"
					>
						<CategoryCloud />
					</Panel>
					<Panel
						header={
							<div style={{ fontSize: "16px", color: "#939393" }}>
								文档标签云
							</div>
						}
						key="2"
					>
						<TagCloud />
					</Panel>
				</Collapse>
			</div>
		);
	}
}

export default TagView;
