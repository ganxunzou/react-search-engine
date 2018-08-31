import React, { Component } from 'react';
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
} from 'antd';
const { Header, Content, Sider } = Layout;
const CheckBoxGroup = Checkbox.Group;
import { Link, withRouter } from 'react-router-dom';

import ListItem from '../../components/ListItem';
import style from './index.less';

const searchKeyWords = [
	{ label: 'PDF', type: 'pdf' },
	{ label: 'word', type: 'word' },
	{ label: 'excel', type: 'excel' }
];

let allList = searchKeyWords.map(item => {
	return item.type;
});

const searchResult = [];
for (let i = 0; i < 100; i++) {
	let type = 'pdf';
	if (i % 3 == 0) type = 'word';
	if (i % 5 == 0) type = 'excel';

	searchResult.push({
		type,
		title: 'aa <span style="color:#D0021B">HelloWord</span> XXXXXX' + i,
		desc: 'xxxx <span style="color:#D0021B">aaaa</span> Xxxxxxx',
		likes: 999
	});
}

const pageSize = 20;

class SearchList extends Component {
	constructor(props) {
		super();

		let currentPageResult = searchResult.slice(0, pageSize);

		this.state = {
			checkAll: true,
			indeterminate: false,
			checkedList: allList,
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
				checkedList.length > 0 && checkedList.length < searchKeyWords.length,
			checkAll: checkedList.length === searchKeyWords.length
		});

		this.filterSearchResult(checkedList);
	};

	filterSearchResult = checkedList => {
		console.log('object', checkedList);
		let isAllChecked = checkedList.length == searchKeyWords.length;
		let isAllNotChecked = checkedList.length == 0;
		let { searchResult } = this.state;
		let searchFilterResult = [];
		if (!isAllChecked && !isAllNotChecked) {
			searchFilterResult = searchResult.filter(item => {
				for (let i = 0; i < checkedList.length; i++) {
					if (checkedList[i] == item.type) return true;
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

		this.filterCurrentPageData(1,pageSize, searchFilterResult);
	};

	allCheckChange = e => {
		let checkedList = e.target.checked ? allList : [];
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
			pathname: '/upload',
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
			<Layout style={{ height: '100%' }}>
				<Header className>
					<div className={style.logo}>
						<Link to="/">Search Engine</Link>
					</div>
				</Header>
				<Layout>
					<Sider
						width={200}
						style={{
							background: '#fff',
							paddingLeft: '10px',
							borderRight: '1px solid #eee'
						}}
					>
						<Row
							style={{ margin: '20px 0 50px 10px', width: '100%' }}
							type="flex"
							align="middle"
						>
							<Button
								type="primary"
								size="large"
								icon="upload"
								onClick={this.uploadClick}
							>
								上传文档
							</Button>
						</Row>
						<Row>
							<Col span={24} style={{ padding: '10px 0 10px 10px' }}>
								<h3>Document Type</h3>
							</Col>
							<Col span={24} style={{ padding: '10px 0 0 20px' }}>
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
								{searchKeyWords &&
									searchKeyWords.map((item, index) => {
										return (
											<Col
												span={24}
												style={{ padding: '10px 0 0 20px' }}
												key={`key_${index}`}
											>
												<Checkbox value={item.type}>{item.label}</Checkbox>
											</Col>
										);
									})}
							</Row>
						</CheckBoxGroup>
					</Sider>
					<Layout style={{ background: '#fff' }}>
						<Content>
							<div className={style.search}>
								<AutoComplete style={{ width: 400 }} />
							</div>
							<div className={style.results}>
								找到 {searchFilterResult.length} 条结果
							</div>
							<List
								style={{ padding: '0 24px 24px' }}
								bordered={false}
								dataSource={currentPageResult}
								renderItem={item => (
									<List.Item>
										<ListItem data={item} />
									</List.Item>
								)}
							/>
							<Pagination
								pageSize={pageSize}
								defaultCurrent={currentPageIndex}
								total={searchFilterResult.length}
								onChange={this.paginationChange}
							/>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(SearchList);
