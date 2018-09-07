import React, { Component } from 'react';

import style from './index.less';
import {Icon, Tag} from 'antd';
import {withRouter} from 'react-router-dom';

class ListItem extends Component {
	constructor(props) {
		super();
		this.state = {
			data: props && props.data
		};
	}

	componentWillReceiveProps(nextProps) {
		let {data} = this.state;
		if('data' in nextProps) {
			this.setState({data: nextProps.data})
		}
	}

	titleClick=()=>{
		this.props.history.push({
			pathname: '/search/detail',
			state: {}
		})
	}
	
	render() {
		let {data} = this.state;
		return (
			<div>
				<div className={style.title} dangerouslySetInnerHTML={{__html: data.title}} onClick={this.titleClick}></div>
				<div className={style.desc} dangerouslySetInnerHTML={{__html: data.desc}}></div>
				<div className={style.likeContainer} >
					<span className={style.like}>{data.likes} <Icon type="like"/></span>
					<span className={style.like} style={{padding: '0 10px'}}>{data.downloads} <Icon type="download"/></span>
					<span >
						<Tag color="green">react</Tag>
						<Tag color="green">java</Tag>
						<Tag color="green">helloword</Tag>
					</span>
				</div>
			</div>
		);
	}
}

export default withRouter(ListItem);