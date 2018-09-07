import React, { Component } from "react";
import {
	Layout,
	Checkbox,
	Row,
	Col,
	Tag,
	Icon,
	Table,
	Divider,
	Button,
	Popconfirm
} from "antd";
const { Header, Content, Sider } = Layout;
const CheckBoxGroup = Checkbox.Group;
import { Link, withRouter } from "react-router-dom";
import RecommendList from "../../components/RecommendList";
import { Categorys, Tags } from "../../constant";
import UploadComp from "./upload";

import style from "./index.less";

const columns = [
	{
		title: "版本号",
		width: 150,
		dataIndex: "version"
	},
	{
		title: "版本更新说明",
		dataIndex: "changelog"
	},
	{
		title: "操作",
		key: "action",
		width: 150,
		render: (text, record) => (
			<span>
				<a href="/HappyMonkey.docx">下 载</a>
				<Divider type="vertical" />
				<Popconfirm
					placement="topLeft"
					title="确认要删除吗？"
					onConfirm={confirm}
					okText="Yes"
					cancelText="No"
				>
					<a href="javascript:;">删 除</a>
				</Popconfirm>
			</span>
		)
	}
];

const data = [];
for (let i = 20; i > 2; i--) {
	data.push({
		key: `${i}`,
		version: `V1.0.${i}`,
		changelog: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
	});
}
data.push({
	key: "1",
	version: "V1.0.0",
	changelog: "初始版本"
});

class DetailView extends Component {
	constructor(props) {
		super();
		this.state = {
			showUpload: false
		};
	}

	render() {
		return (
			<Layout
				style={{ height: "100%", paddingTop: "10px", background: "#FFF" }}
			>
				<Layout style={{ maxWidth: "1400px", margin: "auto" }}>
					<Layout style={{ background: "#fff" }}>
						<Content>
							<Row>
								<Col span={18}>
									<h1 className={style.title}>
										为何 Angular 4 是 Angular 2 的下一个版本, 为什么没有 Angular
										3.x
									</h1>
									<div className={style.infoContainer}>
										<span>
											999 <Icon type="like" />
										</span>
										<span style={{ padding: "0 10px" }}>·</span>
										<span style={{ padding: "0 10px" }}>
											999 <Icon type="download" />
										</span>
										<span style={{ padding: "0 10px" }}>·</span>
										<span>2018-09-07</span>
										<span style={{ padding: "0 10px" }}>·</span>
										<span>基础平台部</span>
										<span style={{ padding: "0 10px" }}>·</span>
										<span>ganxz</span>
									</div>
									<div style={{ textAlign: "center" }}>
										<Tag color="green">react</Tag>
										<Tag color="green">java</Tag>
										<Tag color="green">helloword</Tag>
									</div>
									<div style={{ textAlign: "center", padding: "30px" }}>
										<Button
											type="primary"
											size="large"
											style={{ width: "150px", marginRight: "20px" }}
											icon="upload"
											onClick={() => {
												this.setState({ showUpload: !this.state.showUpload });
											}}
										>
											上 传
										</Button>
										<Button
											type="primary"
											size="large"
											style={{ width: "150px" }}
											icon="download"
											href="/HappyMonkey.docx"
										>
											下 载
										</Button>
										<UploadComp
											visible={this.state.showUpload}
											handleOk={() => {
												this.setState({ showUpload: !this.state.showUpload });
											}}
											handleCancel={() => {
												this.setState({ showUpload: !this.state.showUpload });
											}}
										/>
									</div>
									<div className={style.content}>
										<div>
											<h1>说明:</h1>
											<p>
												React
												可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图,在数据改变时
												React 也可以高效地更新渲染界面。
												以声明式编写UI,可以让你的代码更加简洁
											</p>
										</div>
										<div>
											<h1>版本历史</h1>
											<div>
												<Table columns={columns} dataSource={data} />
											</div>
										</div>
									</div>
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
						</Content>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(DetailView);
