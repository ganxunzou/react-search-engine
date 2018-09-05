import React, { Component } from "react";
import {
	Layout,
	Menu,
	AutoComplete,
	List,
	Checkbox,
	Row,
	Col,
	Button,
	Pagination
} from "antd";
const { Header, Content, Sider } = Layout;
const CheckBoxGroup = Checkbox.Group;
import { Link, withRouter } from "react-router-dom";

import ListItem from "../../components/ListItem";
import RecommendList from "../../components/RecommendList";
import { Categorys, Tags } from "../../constant";

import style from "./index.less";

const tags_section = Tags.slice(0, 8);

const searchResult = [];
for (let i = 0; i < 100; i++) {
	let category = "1";
	if (i % 2 == 0) category = "2";
	if (i % 3 == 0) category = "3";
	if (i % 5 == 0) category = "4";
	if (i % 7 == 0) category = "5";
	if (i % 11 == 0) category = "6";
	if (i % 13 == 0) category = "7";
	if (i % 17 == 0) category = "8";

	searchResult.push({
		category,
		title: 'aa <span style="color:#D0021B">HelloWord</span> XXXXXX' + i,
		desc: 'xxxx <span style="color:#D0021B">aaaa</span> Xxxxxxx',
		likes: 999,
		downloads: 999
	});
}

const pageSize = 10;

class SearchList extends Component {
	constructor(props) {
		super();

		let currentPageResult = searchResult.slice(0, pageSize);

		this.state = {
			checkAll: true,
			indeterminate: false,
			checkedList: Categorys,
			searchResult: searchResult,
			searchFilterResult: searchResult,
			currentPageResult,
			currentPageIndex: 1
		};
	}

	typeCheckChange = checkedList => {
		this.setState({
			checkedList,
			indeterminate:
				checkedList.length > 0 && checkedList.length < Categorys.length,
			checkAll: checkedList.length === Categorys.length
		});

		this.filterSearchResult(checkedList);
	};

	filterSearchResult = checkedList => {
		let isAllChecked = checkedList.length == Categorys.length;
		let isAllNotChecked = checkedList.length == 0;
		let { searchResult } = this.state;
		let searchFilterResult = [];
		if (!isAllChecked && !isAllNotChecked) {
			searchFilterResult = searchResult.filter(item => {
				for (let i = 0; i < checkedList.length; i++) {
					if (checkedList[i].id == item.category) return true;
				}
			});
		}

		if (isAllNotChecked) {
			searchFilterResult = [];
		}

		if (isAllChecked) {
			searchFilterResult = searchResult;
		}

		this.setState({ searchFilterResult });

		this.filterCurrentPageData(1, pageSize, searchFilterResult);
	};

	allCheckChange = e => {
		let checkedList = e.target.checked ? Categorys : [];
		this.filterSearchResult(checkedList);
		this.setState({
			checkedList,
			checkAll: e.target.checked,
			indeterminate: false
		});
	};

	filterCurrentPageData = (page, pageSize, searchFilterResult) => {
		let startIndex = (page - 1) * pageSize;
		let endIndex = page * pageSize;
		let currentPageResult = [];
		if (searchFilterResult < startIndex + pageSize) {
			endIndex = searchFilterResult.length;
		}

		currentPageResult = searchFilterResult.slice(startIndex, endIndex);

		this.setState({
			currentPageResult,
			currentPageIndex: page
		});
	};

	paginationChange = (page, pageSize) => {
		let { searchFilterResult } = this.state;
		this.filterCurrentPageData(page, pageSize, searchFilterResult);
	};

	uploadClick = () => {
		this.props.history.push({
			pathname: "/upload",
			state: {}
		});
	};

	render() {
		let {
			checkAll,
			indeterminate,
			checkedList,
			searchFilterResult,
			currentPageResult,
			currentPageIndex
		} = this.state;
		return (
			<Layout style={{ height: "100%", paddingTop:'10px', background: '#FFF' }}>
				<Layout>
					<Sider
						width={200}
						style={{
							background: "#fff",
							paddingLeft: "10px",
							borderRight: "1px solid #eee"
						}}
					>
						<Row>
							<Col span={24} style={{ padding: "20px 0 0 10px" }}>
								<h2 style={{ color: "#666" }}>分类</h2>
							</Col>
							<Col span={24} style={{ padding: "10px 0 0 10px" }}>
								<Checkbox
									checked={checkAll}
									onChange={this.allCheckChange}
									indeterminate={indeterminate}
								>
									ALL
								</Checkbox>
							</Col>
						</Row>
						<CheckBoxGroup onChange={this.typeCheckChange} value={checkedList}>
							<Row>
								{Categorys &&
									Categorys.map((item, index) => {
										return (
											<Col
												span={24}
												style={{ padding: "10px 0 0 10px" }}
												key={`key_${index}`}
											>
												<Checkbox value={item}>{item.value}</Checkbox>
											</Col>
										);
									})}
							</Row>
						</CheckBoxGroup>

						<Row>
							<Col span={24} style={{ padding: "30px 0 0 10px" }}>
								<h2 style={{ color: "#666" }}>标签</h2>
							</Col>
							<Col span={24} style={{ padding: "10px 0 0 10px" }}>
								<Checkbox indeterminate={indeterminate}>ALL</Checkbox>
							</Col>
						</Row>
						<CheckBoxGroup>
							<Row>
								{tags_section &&
									tags_section.map((item, index) => {
										return (
											<Col
												span={24}
												style={{ padding: "10px 0 0 10px" }}
												key={`key_${index}`}
											>
												<Checkbox value={item}>{item.value}</Checkbox>
											</Col>
										);
									})}
							</Row>
						</CheckBoxGroup>
					</Sider>
					<Layout style={{ background: "#fff" }}>
						<Content>
							<Row>
								<Col span={18}>
									<div className={style.search}>
										<AutoComplete style={{ width: 500, marginRight: '20px' }} size="large" />
										<Button type="primary" size="large" >搜索</Button>
									</div>
									<div className={style.results}>
										找到 {searchFilterResult.length} 条结果
									</div>
									<List
										style={{ padding: "0 24px 24px" }}
										bordered={false}
										dataSource={currentPageResult}
										renderItem={item => (
											<List.Item>
												<ListItem data={item} />
											</List.Item>
										)}
									/>
									<Pagination
										style={{ padding: "0 24px" }}
										pageSize={pageSize}
										defaultCurrent={currentPageIndex}
										total={searchFilterResult.length}
										onChange={this.paginationChange}
									/>
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
											<RecommendList title="点赞排行" isLike={true}/>
										</div>
										<div
											style={{
												marginBottom: "20px"
											}}
										>
											<RecommendList title="下载排行" isLike={false}/>
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

export default withRouter(SearchList);
