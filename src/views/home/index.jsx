import React, { Component } from 'react';
import { Layout, AutoComplete, Button } from 'antd';
import {withRouter, Link} from 'react-router-dom';


const data = [
	{ label: 'PDF', data: 'pdf' },
	{ label: 'word', data: 'pdf' },
	{ label: 'excel', data: 'pdf' }
];

import style from './index.less';

class Home extends Component {
	state = {
		dataSource: []
	};

	handleSearch=(value)=>{
		this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
				value + value + value,
				value + value + value + '1',
				value + value + value + '2',
				value + value + value + '3',
				value + value + value + '4',
				value + value + value + '5',
				value + value + value + '6',
      ],
    });
	}

	onSelect=(value)=>{
		this.props.history.push({
			pathname: '/search',
			state: {keyword: value}
		})
	}

	uploadClick=()=>{
		this.props.history.push({
			pathname: '/upload',
			state: {}
		})
	}

	render() {
		const { dataSource } = this.state;

		return (
			<Layout style={{height: '100%'}}>
				<div className={style.container}>
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
				</div>
			</Layout>
		);
	}
}


export default withRouter(Home);
