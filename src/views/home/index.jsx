import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Layout, AutoComplete, Row, Col, Input, Icon } from "antd";
const { Content, Footer } = Layout;
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
import style from "./index.less";

import BItem from "../../components/BItem";
import BItem2 from "../../components/BItem2";

const dataSource = [
	{
		title: "话题",
		children: [
			{
				title: "AntDesign",
				count: 10000
			},
			{
				title: "AntDesign UI",
				count: 10600
			}
		]
	},
	{
		title: "问题",
		children: [
			{
				title: "AntDesign UI 有多好",
				count: 60100
			},
			{
				title: "AntDesign 是啥",
				count: 30010
			}
		]
	},
	{
		title: "文章",
		children: [
			{
				title: "AntDesign 是一个设计语言",
				count: 100000
			}
		]
	}
];

function renderTitle(title) {
	return (
		<span>
			{title}
			<a
				style={{ float: "right" }}
				href="https://www.google.com/search?q=antd"
				target="_blank"
				rel="noopener noreferrer"
			>
				更多
			</a>
		</span>
	);
}

const options = dataSource
	.map(group => (
		<OptGroup key={group.title} label={renderTitle(group.title)}>
			{group.children.map(opt => (
				<Option key={opt.title} value={opt.title}>
					{opt.title}
					<span style={{ position: "absolute", right: "16px" }}>
						{opt.count} 人 关注
					</span>
				</Option>
			))}
		</OptGroup>
	))
	.concat([
		<Option disabled key="all" className="show-all">
			<a
				href="https://www.google.com/search?q=antd"
				target="_blank"
				rel="noopener noreferrer"
			>
				查看所有结果
			</a>
		</Option>
	]);

const ItemList = [
	{ label: "前端技术架构选型", id: "1" },
	{ label: "DB2技术知识图谱", id: "2" },
	{ label: "DB2技术知识图谱", id: "3" },
	{ label: "DB2技术知识图谱", id: "3" },
	{ label: "DB2技术知识图谱", id: "4" }
];
class Home extends Component {
	state = {
		dataSource: []
	};

	handleSearch = value => {
		this.setState({
			dataSource: !value
				? []
				: [
						value,
						value + value,
						value + value + value,
						value + value + value + "1",
						value + value + value + "2",
						value + value + value + "3",
						value + value + value + "4",
						value + value + value + "5",
						value + value + value + "6"
				  ]
		});
	};

	onSelect = value => {
		this.props.history.push({
			pathname: "/search",
			state: { keyword: value }
		});
	};

	uploadClick = () => {
		this.props.history.push({
			pathname: "/upload",
			state: {}
		});
	};

	render() {
		const { dataSource } = this.state;

		return (
			<Layout >
				{/* <div className={style.container}>
					<div className={style.logo}>
						Search Engine
					</div>
					<div  className={style.search} >
					<AutoComplete style={{width: '100%'}}
						size="large"
						dataSource={dataSource}
						onSelect={this.onSelect}
						onSearch={this.handleSearch}
						placeholder="请输入搜索文档名称或关键字"
					/>
					</div>
					<div style={{marginTop:'100px'}}>
						<Button type="primary" size="large" icon="upload" onClick={this.uploadClick}>上传文档</Button>
					</div>
				</div> */}
				<Content style={{ background: "#fff", height: "100%" }}>
					<div style={{ height: "260px", background: "url(/banner.jpg)" }}>
						<h1
							style={{
								paddingTop: "40px",
								fontSize: "40px",
								textAlign: "center",
								color: "#fff"
							}}
						>
							Search Engine
						</h1>
						<h2
							style={{
								fontSize: "14px",
								textAlign: "center",
								color: "#fff"
							}}
						>
							keywords, full-text search
						</h2>

						<Row type="flex" justify="center">
							<Col xs={{ span: 20 }} lg={{ span: 12 }}>
								<AutoComplete
									className="certainCategorySearch"
									dropdownClassName="certainCategorySearchDropdown"
									dropdownMatchSelectWidth={true}
									size="large"
									style={{ width: "100%" }}
									dataSource={options}
									placeholder="请输入查询关键字"
									optionLabelProp="value"
									onSelect={this.onSelect}
								>
									<Input
										className={style.searchInput}
										suffix={
											<Icon
												type="search"
												style={{
													transition:
														"all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
													fontSize: "16px"
												}}
											/>
										}
									/>
								</AutoComplete>
							</Col>
						</Row>
					</div>
					<Row type="flex" justify="center" style={{ background: "#ccc" }}>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem url="/img/6.jpg" bgColor="#FFFFFF" title="技术文档" list={ItemList}/>
						</Col>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem url="/img/7.jpg" bgColor="#F4F4F4" title="需求文档" list={ItemList} />
						</Col>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem url="/img/3.png" bgColor="#FFFFFF" title="规格文档" list={ItemList} />
						</Col>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem url="/img/4.png" bgColor="#F4F4F4" title="设计文档" list={ItemList} />
						</Col>
					</Row>
					<Row type="flex" justify="center" style={{ background: "#ccc" }}>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem2 bgColor="#5A5A5A" title="文件上传" type="upload" desc="this is a good idea ! like to !" pathData={{pathname:'/upload'}}/>
						</Col>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem2 bgColor="#323232" title="统计分析" type="bar-chart" desc="this is a good idea ! like to !" pathData={{pathname:'/analyze'}}/>
						</Col>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem2 bgColor="#5A5A5A" title="精华" type="heat-map" desc="this is a good idea ! like to !" pathData={{pathname:'/leader'}}/>
						</Col>
						<Col lg={{ span: 6 }} sm={{span: 12}}>
							<BItem2 bgColor="#323232" title="标签云" type="tags" desc="this is a good idea ! like to !" pathData={{pathname:'/tags'}}/>
						</Col>
					</Row>
				</Content>
				<Footer style={{ textAlign: "center", backgroundColor: '#5A5A5A'}}>
					版本 ©2018 交通银行软件开发中心（上海）所有
				</Footer>
			</Layout>
		);
	}
}

export default withRouter(Home);
