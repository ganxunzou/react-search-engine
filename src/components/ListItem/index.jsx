import React, { Component } from 'react';

import style from './index.less';
import {Icon} from 'antd';

export default class ListItem extends Component {
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
	
	render() {
		let {data} = this.state;
		return (
			<div>
				<div className={style.title} dangerouslySetInnerHTML={{__html: data.title}}></div>
				<div className={style.desc} dangerouslySetInnerHTML={{__html: data.desc}}></div>
				<div className={style.likeContainer} >
					<span className={style.like}>{data.likes} <Icon type="like"/></span>
					<span className={style.like} style={{padding: '0 10px'}}>{data.downloads} <Icon type="download"/></span>
				</div>
			</div>
		);
	}
}
