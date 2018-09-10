import React, { Component } from "react";
import { Tabs, Row, Col, Table } from "antd";
const TabPane = Tabs.TabPane;
import Item from "./Item";
import BasicColumn from "./Basiccolumn";
import AreaChart from "./AreaChart";
import DocStatistics from "../doc/statics";

const columns = [
	{
		title: "排名",
		dataIndex: "order"
	},
	{
		title: "关键字",
		dataIndex: "Keyword"
	},
	{
		title: "用户数",
		dataIndex: "userNo"
	},
	{
		title: "涨幅",
		dataIndex: "increment"
	}
];
const data = [
	{
		key: "1",
		order: "1",
		Keyword: "react",
		userNo: 400,
		increment: "90%"
	},
	{
		key: "1",
		order: "2",
		Keyword: "HTML5",
		userNo: 300,
		increment: "40%"
	},
	{
		key: "1",
		order: "2",
		Keyword: "Java",
		userNo: 200,
		increment: "20%"
	}
];

class AnalysisView extends Component {
	render() {
		return (
			<div>
				<Row gutter={16}>
					<Col
						xl={{ span: 6 }}
						lg={{ span: 12 }}
						style={{ marginBottom: "16px" }}
					>
						<Item title="用户总量" today="今日在线"/>
					</Col>
					<Col
						xl={{ span: 6 }}
						lg={{ span: 12 }}
						style={{ marginBottom: "16px" }}
					>
						<Item title="文档总量" today="今日新增"/>
					</Col>
					<Col
						xl={{ span: 6 }}
						lg={{ span: 12 }}
						style={{ marginBottom: "16px" }}
					>
						<Item title="搜索总量" today="今日搜索"/>
					</Col>
					<Col
						xl={{ span: 6 }}
						lg={{ span: 12 }}
						style={{ marginBottom: "16px" }}
					>
						<Item title="标签总量" today="今日新增"/>
					</Col>
				</Row>
				<Row style={{ background: "#fff", marginBottom: "16px" }}>
					<Col>
						<Tabs defaultActiveKey="1">
							<TabPane tab="访问量" key="1">
								<Col>
									<BasicColumn />
								</Col>
							</TabPane>
							<TabPane tab="活跃度" key="2">
								<Col>
									<BasicColumn />
								</Col>
							</TabPane>
						</Tabs>
					</Col>
				</Row>
				<Row gutter={16} type="flex">
					<Col
						xl={{ span: 12 }}
						lg={{ span: 24 }}
						style={{
							height: "400px"
						}}
					>
						<div
							style={{
								height: '100%',
								padding:'20px',
								background: "#fff"
							}}
						>
							<div
								style={{
									height: "30px",
									borderBottom: "1px solid #eee",
									marginBottom: "10px"
								}}
							>
								热门搜索
							</div>
							<Row gutter={16}>
								<Col span={12}>
									<div style={{ color: "rgba(0,0,0,.45)", fontSize: "14px" }}>
										搜索用户数
									</div>
									<div
										style={{
											fontSize: "24px",
											fontWeight: "bold",
											padding: "10px 0"
										}}
									>
										12,111
									</div>
									<div style={{overflow: 'hidden'}}>
										<AreaChart />
									</div>
								</Col>
								<Col span={12}>
									<div style={{ color: "rgba(0,0,0,.45)", fontSize: "14px" }}>
										人均搜索数
									</div>
									<div
										style={{
											fontSize: "24px",
											fontWeight: "bold",
											padding: "10px 0"
										}}
									>
										2.8
									</div>
									<div style={{overflow: 'hidden'}}>
										<AreaChart />
									</div>
								</Col>
							</Row>
							<div>
								<Table columns={columns} dataSource={data} size="small" />
							</div>
						</div>
					</Col>
					<Col
						xl={{ span: 12 }}
						lg={{ span: 24 }}
						style={{
							marginBottom: "16px",
							height: "400px"
						}}
					>
						<div
							style={{
								height: '100%',
								padding:'20px',
								background: "#fff"
							}}
						>
							<div
								style={{
									height: "30px",
									borderBottom: "1px solid #eee",
									marginBottom: "10px"
								}}
							>
								热门搜索
							</div>
							<di>
								<DocStatistics height={300}/>
							</di>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default AnalysisView;
